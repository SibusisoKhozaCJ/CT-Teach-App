import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { ReflexContainer, ReflexElement } from "react-reflex";
import ReactHtmlParser from "react-html-parser";
import ReactPageScroller from "../../utils/react-page-scroller";

import * as authFetch from "../../shared/lib/authorizedFetch";
// import { getLesson } from "../codepanel/data/getLesson";
import ld from "../codepanel/data/c1_p1_l4";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 100,
    width: 1200,
    height: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  form: {
    width: "40%",
    height: "100%"
  },
  slider: {
    width: "40%",
    height: "100%"
  },
  reflex: {
    height: "100%",
    padding: "10px 16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: theme.palette.secondary.contrastText
  },
  slideContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingBottom: 25,
    width: "100%",
    height: "100%"
  },
}));

const UploadLesson = () => {
  const classes = useStyles();
  const [slides, setSlides] = useState(null);
  const [projects, setProjects] = useState(null);
  const [currentProject, setCurrentProject] = useState(null);
  const currentCourse = "C001";
  const [parseError, setParseError] = useState(false);
  const [lessonsCount, setLessonsCount] = useState(null)
  const slidesRef = useRef(null);
  // const s = getLesson(1);
  // console.log(JSON.stringify(s.slides));

  const getProjects = async () => {
    return await authFetch.firebaseGet(
      "Projects"
    );
  }

  const getLessons = async () => {
    return await authFetch.firebaseGet(
      "Lessons"
    );
  }

  const updateState = () => {
    getProjects().then(data => {
      if (data) {
        const newProjects = Object.keys(data).map((key) => ({...data[key], projectId: key}));
        setProjects(newProjects);
      }
    })
    getLessons().then(data => {
      if (data) {
        setLessonsCount(Object.keys(data).length);
      }
    })
  }

  useEffect(() => {
    updateState();
  }, [])

  const changeLesson = (e) => {
    const key = e.target.value;
    setCurrentProject(key);
  }

  const changeSlides = (e) => {
    try {
      setParseError(false);
      const slides = JSON.parse(e.target.value);
      const updatedSlides = slides.map(slide => {
        let reg = null;
        if (slide.reg) {
          if (typeof slide.reg[0] === 'object') {
            reg = slide.reg;
          } else {
            reg = slide.reg.map(r => ({
              description: "no description",
              rule: r
            }))
          }
        }
        return {
          ...slide,
          challenge: slide.challenge || slide.checkpoint || null,
          challenge_id: slide.challenge_id || slide.checkpoint_id || null,
          reg
        }
      })
      setSlides(updatedSlides);
    } catch {
      setParseError(true);
    }
  }

  const submit = () => {
    const data = {
      slides,
      projectId: `P00${currentProject}`,
      courseId: currentCourse
    }
    authFetch.firebaseUpdate(
      `Lessons/L00${lessonsCount}`,
      data
    )
  }

  return (
    <div className={classes.container}>
      {projects && (
        <div className={classes.form}>
          <select onChange={changeLesson}>
            {projects.map((project, key) => {
              return (
                <option key={key} value={key}>{project.title}</option>
              )
            })}
          </select>
          <textarea
            ref={slidesRef}
            onChange={changeSlides}
            rows="20"
            value={JSON.stringify(ld)}
          >
          </textarea>
          <button type="button" onClick={submit}>Submit</button>
        </div>
      )}
      <div className={classes.slider}>
        {slides && (
          <ReflexContainer
            orientation="horizontal"
            role="complementary"
            style={{ height: "100%" }}
          >
            <ReactPageScroller
              animationTimer={300}
              containerWidth="100%"
              style={{ height: "100%" }}
            >
              {slides.map && slides.map(slide => {
                return (
                  <div
                    id="lesson-page"
                    key={"slideNumber"}
                    style={{ height: "100%" }}
                  >
                    <ReflexElement
                      className={`${classes.reflex} snap1 white hide-help swiper-slide`}
                      flex={1}
                      style={{ height: "100%" }}
                    >
                      <div
                        className={`container ${classes.slideContainer}`}
                      >
                        {ReactHtmlParser(slide.html_content)}
                      </div>
                    </ReflexElement>
                  </div>
                );
              })}
            </ReactPageScroller>
          </ReflexContainer>
        )}
      </div>
    </div>
  )
}

export default UploadLesson;

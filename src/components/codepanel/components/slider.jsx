import React, {useEffect, useRef, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReflexContainer, ReflexElement } from "react-reflex";
import ReactHtmlParser from "react-html-parser";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from 'react-router-dom';

import ReactPageScroller from "../../../utils/react-page-scroller";

import {
  codepanelSetSlideNumber,
  codepanelSetTab,
  codepanelSetIsValid,
  codepanelSetTourIsActive,
  codepanelSetProjectsIsActive
} from '../../../redux/actions/codepanel-actions'

// import "../data/INTRO-5MIN-M-V007/custom.css"

const useStyles = makeStyles(theme => ({
  pageLesson: {
    // height: "calc(100% - 128px)",
    height: "100%",
    overflowY: "auto",
    padding: 0,
    margin: 0,
    position: "relative",

    ["@media (min-width:767px)"]: {
      "& .content-mobile-only": {
        padding: 0,
        margin: 0,
        width: 0,
        height: 0,
        overflow: "hidden"
      }
    },

    ["@media (max-width:768px)"]: {
      "& .content-desktop-only": {
        padding: 0,
        margin: 0,
        width: 0,
        height: 0,
        overflow: "hidden"
      }
    }
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
  tourBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 30,
    height: 30,
    padding: 5,
    borderRadius: "50%",
    backgroundColor: "#fff",
    zIndex: 10
  }
}));

let timer = null;

export const debounce = (fn, time) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(fn, time);
};

const Slider = () => {
  const isValid = useSelector(state => state.codepanel.isValid);
  const lesson = useSelector(state => state.codepanel.slides);
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:768px)");
  const currentSlideNumber = useSelector(state => state.codepanel.currentSlide);
  const dispatch = useDispatch();
  const lessonRef = useRef(null);
  const history = useHistory();
  const [scrollBlocked, setScrollBlocked] = useState(false);
  const [isBackButtonClicked, setBackbuttonPress] = useState(false)

  const onBackButtonEvent = (e) => {
    if(isBackButtonClicked){
      e.preventDefault();
      window.history.pushState(null, null, window.location.pathname);
      dispatch(codepanelSetIsValid(false));
      dispatch(codepanelSetTab(0));
      setTimeout(() => {
        dispatch(codepanelSetSlideNumber(currentSlideNumber - 1 ));
      }, 1000);
      setBackbuttonPress(false);
    }
  }

  useEffect(() => {
    if(!isDesktop){
      window.onpopstate = (e) => {
        window.history.pushState(null, null, window.location.pathname);
        setBackbuttonPress(true);
        onBackButtonEvent(e);
      }
    }

  });

  const clickHandler = e => {
    e.persist();

    if(e.target.closest(".take-tour")) {
      dispatch(codepanelSetTourIsActive(true));
    }
    if(e.target.closest(".btn.btn-encouraging.next.check")) {
      const btn = e.target.closest(".btn.btn-encouraging.next.check");
      const data = btn.dataset.click
      if (data) {
        const [action, value] = data.split(":");
        if (action === "gt") {
          history.push(value);
        }
        if (action === "o") {
          if (value === "projects") {
            dispatch(codepanelSetProjectsIsActive(true));
          }
        }
      }
    }
    if (
        e.target.closest(".swiper-next") ||
        (e.target.closest(`#slide${currentSlideNumber}`) &&
            e.target.closest(".swiper-editor") &&
            e.target.closest(".validated"))
    ) {
      dispatch(codepanelSetSlideNumber(currentSlideNumber + 1));
    }
    if (e.target.closest(".swiper-editor")) {
      // editor.focus();
      dispatch(codepanelSetTab(1));
    }
  };

  const topClickHandler = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const height = lessonRef.current.offsetHeight != "null"?lessonRef.current.offsetHeight:0;
    const width = lessonRef.current.offsetWidth;

    if (y < height * 0.6) {
      if (x < width / 2) {
        dispatch(codepanelSetSlideNumber(currentSlideNumber - 1));
      } else {
        isValid && dispatch(codepanelSetSlideNumber(currentSlideNumber + 1));
      }
    }
  }

  const pageChangeHandler = e => {
    dispatch(codepanelSetSlideNumber(e));
  };

  const beforeScrollHandler = e => {
    if (e !== currentSlideNumber) {
      dispatch(codepanelSetIsValid(false));
    }
  }

  if (!lesson) {
    return <div>Loading</div>
  }

  console.log("lesson===", lesson)
  console.log("currentSlideNumber===", currentSlideNumber)
  
  return (
      <ReflexContainer
          className={classes.pageLesson}
          orientation="horizontal"
          role="complementary"
          style={{ height: isDesktop ? "calc(100vh - 148px)"  : "100%" }}
      >
        <ReactPageScroller
            animationTimer={isDesktop ? 15 :300}
            blockScrollUp={scrollBlocked}
            blockScrollDown={!isValid || scrollBlocked}
            containerWidth="100%"
            customPageNumber={currentSlideNumber}
            pageOnChange={pageChangeHandler}
            style={{ height: "100%" }}
            onBeforePageScroll={e => beforeScrollHandler(e)}
        >
          {lesson.slides.map((slide, slideNumber) => {
            return (
                <div
                    id="lesson-page"
                    key={`${lesson.slug}_${slideNumber}`}
                    style={{ height: "100%" }}
                    onClick={topClickHandler}
                    ref={lessonRef}
                >
                  <ReflexElement
                      className={`${
                          classes.reflex
                      } snap1 white hide-help swiper-slide ${
                          slide.reg ? " bg-orange" : ""
                      }`}
                      flex={1}
                      style={{ height: "100%" }}
                  >
                    <div
                        className={`container ${classes.slideContainer}${
                            isValid && slideNumber === currentSlideNumber
                                ? " validated"
                                : ""
                        }`}
                        id={`slide${slideNumber}`}
                        style={isDesktop ? null : { paddingBottom: 20, paddingTop: 20 }}
                        onClick={e => clickHandler(e)}
                    >
                      {ReactHtmlParser(slide.html_content)}
                    </div>
                  </ReflexElement>
                </div>
            );
          })}
        </ReactPageScroller>
        <div className={classes.tourBtn} onClick={() => {dispatch(codepanelSetTourIsActive(true))}}>
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="lightbulb-on" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-lightbulb-on fa-w-20 fa-2x"><path fill="currentColor" d="M112,192a24,24,0,0,0-24-24H24a24,24,0,0,0,0,48H88A24,24,0,0,0,112,192Zm-4.92,95.22-55.42,32a24,24,0,1,0,24,41.56l55.42-32a24,24,0,0,0-24-41.56Zm24-232-55.42-32a24,24,0,1,0-24,41.56l55.42,32a24,24,0,1,0,24-41.56ZM520.94,100a23.8,23.8,0,0,0,12-3.22l55.42-32a24,24,0,0,0-24-41.56l-55.42,32a24,24,0,0,0,12,44.78ZM616,168H552a24,24,0,0,0,0,48h64a24,24,0,0,0,0-48ZM588.34,319.23l-55.42-32a24,24,0,1,0-24,41.56l55.42,32a24,24,0,0,0,24-41.56ZM320,0C217.72,0,144,83,144,176a175,175,0,0,0,43.56,115.78c16.63,19,42.75,58.8,52.41,92.16V384h48v-.12a47.67,47.67,0,0,0-2.13-14.07C280.25,352,263,305.06,223.66,260.15A127.48,127.48,0,0,1,192.06,176C191.84,102.36,251.72,48,320,48a127.91,127.91,0,0,1,96.34,212.15c-39.09,44.61-56.4,91.47-62.09,109.46A56.78,56.78,0,0,0,352,383.92V384h48V384c9.69-33.37,35.78-73.18,52.41-92.15A175.93,175.93,0,0,0,320,0Zm0,80a96.11,96.11,0,0,0-96,96,16,16,0,0,0,32,0,64.08,64.08,0,0,1,64-64,16,16,0,0,0,0-32ZM240.06,459.19a16,16,0,0,0,2.69,8.84l24.5,36.83A16,16,0,0,0,280.56,512h78.85a16,16,0,0,0,13.34-7.14L397.25,468a16.2,16.2,0,0,0,2.69-8.84L400,416H240Z" class=""></path></svg>
        </div>
      </ReflexContainer>
  );
};

export default Slider;
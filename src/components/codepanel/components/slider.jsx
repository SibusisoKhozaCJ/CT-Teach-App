import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReflexContainer, ReflexElement } from "react-reflex";
import ReactHtmlParser from "react-html-parser";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ReactPageScroller from "../../../utils/react-page-scroller";

import {
  codepanelSetSlideNumber,
  codepanelSetTab,
  codepanelSetIsValid
} from '../../../redux/actions/codepanel-actions'

// import "../data/INTRO-5MIN-M-V007/custom.css"

const useStyles = makeStyles(theme => ({
  pageLesson: {
    // height: "calc(100% - 128px)",
    height: "100%",
    overflowY: "auto",
    padding: 0,
    margin: 0
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
  }
}));

const Slider = () => {
  const isValid = useSelector(state => state.codepanel.isValid);
  const lesson = useSelector(state => state.codepanel.slides);
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:768px)");
  const currentSlideNumber = useSelector(state => state.codepanel.currentSlide);
  const dispatch = useDispatch();
  const lessonRef = useRef(null);


  const clickHandler = e => {
    e.persist();

    if (
      e.target.closest(".swiper-next") ||
      (e.target.closest(`#slide${currentSlideNumber}`) &&
        e.target.closest(".swiper-editor") &&
        e.target.closest(".validated"))
    ) {
      dispatch(codepanelSetSlideNumber(currentSlideNumber + 1));
      // setCurrentSlide(currentSlide + 1);
    }
    if (e.target.closest(".swiper-editor")) {
      // editor.focus();
      dispatch(codepanelSetTab(1));
    }
  };

  const topClickHandler = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const height = lessonRef.current.offsetHeight;
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
      // dispatch(codepanelSetSlideNumber(e));
    }
  }

  if (!lesson) {
    return <div>Loading</div>
  }

  return (
    <ReflexContainer
      className={classes.pageLesson}
      orientation="horizontal"
      role="complementary"
      style={{ height: isDesktop ? "calc(100vh - 148px)"  : "100%" }}
    >
      <ReactPageScroller
        animationTimer={300}
        blockScrollDown={!isValid}
        containerWidth="100%"
        customPageNumber={currentSlideNumber}
        pageOnChange={e => pageChangeHandler(e)}
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
    </ReflexContainer>
  );
};

export default Slider;

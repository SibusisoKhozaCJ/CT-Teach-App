import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import CloseIcon from '@material-ui/icons/Close';

import ReactPageScroller from "../../../utils/react-page-scroller";
import slides from "./tour-slides";

import { codepanelSetTourIsActive } from "../../../redux/actions/codepanel-actions";

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 2000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "#5fd3aa",
    zIndex: 2000,
    color: "#fff",
    padding: 20,
    width: 500,
    height: "100vh",

    ["@media (max-width:767px)"]: {
      width: "100%",
      height: "100%"
    }
  },
  close: {
    position: "absolute",
    top: 10,
    right: "calc(50vw - 250px)",
    width: 40,
    height: 40,
    color: "#fff",

    ["@media (max-width:767px)"]: {
      right: 10,
    }
  }
}));

const TakeTour = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const clickHandler = e => {
    console.log("clicked")
    e.persist();

    if (e.target.closest(".btn")) {
      dispatch(codepanelSetTourIsActive(false));
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <ReactPageScroller
          animationTimer={300}
          containerWidth="100%"
          style={{ height: "100%" }}
        >
          {slides.map((slide, slideNumber) => {
            return (
              <div
                key={slideNumber}
                className="swiper-wrapper"
                style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}
                onClick={clickHandler}
              >
                {ReactHtmlParser(slide)}
              </div>
            );
          })}
        </ReactPageScroller>
        <div className={classes.close} onClick={() => {dispatch(codepanelSetTourIsActive(false))}}>
          <CloseIcon />
        </div>
      </div>
    </div>
  )
}

export default TakeTour;

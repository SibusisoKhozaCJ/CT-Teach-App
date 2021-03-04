import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactHtmlParser from "react-html-parser";
import CloseIcon from '@material-ui/icons/Close';

import ReactPageScroller from "../../../utils/react-page-scroller";
import slides from "./tour-slides";

const useStyles = makeStyles(theme => ({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#5fd3aa",
    zIndex: 2000,
    color: "#fff",
    padding: 20
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    color: "#fff"
  }
}));

const TakeTour = ({ closeHandler }) => {
  const classes = useStyles();

  return (
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
            >
              {ReactHtmlParser(slide)}
            </div>
          );
        })}
      </ReactPageScroller>
      <div className={classes.close} onClick={closeHandler}>
        <CloseIcon />
      </div>
    </div>
  )
}

export default TakeTour;

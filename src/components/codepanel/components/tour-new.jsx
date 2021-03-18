import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import { codepanelSetTab } from "../../../redux/actions/codepanel-actions";
import TourIcon1 from "../../../assets/images/tour_1.png";
import TourIcon2 from "../../../assets/images/tour_2.png";
import TourIcon3 from "../../../assets/images/tour_3.png";
import TourIcon4 from "../../../assets/images/tour_4.png";
import TourSlide1 from "../../../assets/images/tour-slide-1.png";
import TourSlide2 from "../../../assets/images/tour-slide-2.png";
import CloseIcon from "../../../assets/images/close-icon.png";
import TourArrowIcon from "../../../assets/images/tour-arrow.png";

const useStyles = makeStyles(theme => ({
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 3000,
  },
  overlay: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    position: "absolute",
    top: "50%",
    width: "calc(90vw / 3)",
    backgroundColor: "#fff",
    border: "4px solid #43D4DD",
    borderRadius: 25,
    display: "flex",
    padding: 20,

    ["@media (max-width:767px)"]: {
      width: "90vw",
    }
  },
  arrow: {
    position: "absolute",
    width: 1,
    height: 1,
    border: "#FBDD3F",
    top: -80,
    width: 40,

    ["@media (max-width:767px)"]: {
      display: "none"
    }
  },
  cross: {
    position: "absolute",
    width: 30,
    height: 30,
    top: 5,
    right: 5
  },
  stats: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 150,

    ["@media (max-width:767px)"]: {
      width: 70,
    }
  },
  slides: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#364954",
    textTransform: "uppercase",

    ["@media (max-width:767px)"]: {
      fontSize: 14,
    }
  },
  count: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#C4C4C4",

    ["@media (max-width:767px)"]: {
      fontSize: 14,
    }
  },
  content: {
    marginLeft: 40,

    "& p": {
      fontSize:24,
      fontWeight: "regular",
      color: "#364954",

      ["@media (max-width:767px)"]: {
        fontSize: 16,
      }
    },

    "& p.tour__text--small": {
      marginTop: 0,
      fontSize: 20,
      fontStyle: "italic",

      ["@media (max-width:767px)"]: {
        fontSize: 13,
      }
    },

    "& img": {
      maxWidth: "70%"
    },

    "& span": {
      color: "#D40073",
      fontWeight: "bold"
    }
  },
  button: {
    position: "absolute",
    bottom: -30,
    right: 50,
    backgroundColor: "#43D4DD",
    border: "none",
    borderRadius: 25,
    padding: "6px 30px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,

    ["@media (max-width:767px)"]: {
      padding: "3px 20px",
      fontSize: 20,
      bottom: -20
    }
  },
  slider: {
    left: "calc(100vw / 6)",
    transform: "translate(-50%, -50%)",

    "& $arrow": {
      left: 40
    },

    ["@media (max-width:767px)"]: {
      left: "50%"
    }
  },
  editor: {
    left: "50%",
    transform: "translate(-50%, -50%)",

    "& $arrow": {
      left: "50%",
      transform: "translateX(-50%)",
    }
  },
  preview: {
    left: "calc(500vw / 6)",
    transform: "translate(-50%, -50%)",

    "& $arrow": {
      right: 40
    },

    ["@media (max-width:767px)"]: {
      left: "50%",
      right: "auto"
    }
  },
}));

const tourSlides = [
  {
    img: TourIcon1,
    content: (
      <div className="tour__content">
        <p className="tour__text">
          Wow! Aren’t you awesome.
          I’m Jonathan, the Founder of CodeTribe. It’s so great to have you here.{" "}
          <br />
          <span>
            This is the Coding Panel
          </span>{" "}
           and ...
        </p>
      </div>
    ),
    panel: 0,
    button: "NEXT",
    arrow: false,
  },
  {
    img: TourIcon2,
    content: (
      <div className="tour__content">
        <h3 className="tour__title">
          <span className="tour__black">Ta-Daa!</span> Here are the “SLIDES.”
        </h3>
        <img className="tour__img" src={TourSlide1} alt="" />
        <p className="tour__text">
          This is where you learn new things and progress through the training.
        </p>
      </div>
    ),
    panel: 0,
    button: "I SEE",
    arrow: true
  },
  {
    img: TourIcon2,
    content: (
      <div className="tour__content">
        <h3 className="tour__title">
          <span className="tour__black">Some of the slides will be... </span>
          CHALLENGES.
        </h3>
        <img className="tour__img" src={TourSlide2} alt="" />
        <p className="tour__text">
          These tell you what code to type.
        </p>
        <p className="tour__text--small">
          It’s super fun and there are lots of tips.
        </p>
      </div>
    ),
    panel: 0,
    button: "I SEE",
    arrow: true
  },
  {
    img: TourIcon3,
    content: (
      <div className="tour__content">
        <h3 className="tour__title">
          This is the “EDITOR.”
        </h3>
        <p className="tour__text">
          Here is where you type all of your code - There coolest place in the world. :)
        </p>
      </div>
    ),
    panel: 1,
    button: "OKAY",
    arrow: true
  },
  {
    img: TourIcon4,
    content: (
      <div className="tour__content">
        <h3 className="tour__title">
          Aaand,... the “BROWSER”
        </h3>
        <p className="tour__text">
          This is like an internet browser & will show what your website looks like (while you’re building it.)
          <br />
          Now it’s time to rock’n roll! ;)
        </p>
      </div>
    ),
    panel: 2,
    button: "I SEE",
    arrow: true
  },
]

const Tour = () => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);
  const [panelClass, setPanelClass] = useState(classes.slider);
  const dispatch = useDispatch();

  useEffect(() => {
    const completed = localStorage.getItem("tour-finished");
    if (!completed) {
      setShow(true);
    }
  });


  useEffect(() => {
    if (tourSlides[current] === undefined) {
      dispatch(codepanelSetTab(0));
      localStorage.setItem("tour-finished", true);
      return;
    }
    dispatch(codepanelSetTab(tourSlides[current].panel));
    if (tourSlides[current].panel === 0) {
      setPanelClass(classes.slider);
    }
    if (tourSlides[current].panel === 1) {
      setPanelClass(classes.editor);
    }
    if (tourSlides[current].panel === 2) {
      setPanelClass(classes.preview);
    }
  }, [current])

  if ((current >= tourSlides.length) || !show) {
    // const completed = localStorage.getItem("tutorial-finished");
    return null;
  }

  return (
    <div className={classes.modal}>
      <div
        onClick={() => {
          setCurrent(current + 1);
        }}
        className={classes.overlay}
      />
      <div className={`${classes.container} ${panelClass}`}>
        <img
          onClick={() => {
            localStorage.setItem("tour-finished", true);
            setShow(false);
          }}
          src={CloseIcon}
          className={classes.cross}
          alt=""
        />
        {tourSlides[current].arrow && (
          <div className={classes.arrow}>
            <img src={TourArrowIcon} className="coverage" alt="" />
          </div>
        )}
        <div className={classes.stats}>
          {/* <img src="#" className={classes.img} /> */}
          <img src={tourSlides[current].img} className="coverage" alt="" style={{ width: "100%" }} />
          <span className={classes.slides}>
            Slides
          </span>
          <span className={classes.count}>
            {current + 1} of {tourSlides.length}
          </span>
        </div>
        <div className={classes.content}>
          {tourSlides[current].content}
        </div>
        <button
          role="button"
          className={classes.button}
          onClick={() => {
            setCurrent(current + 1);
          }}
        >
          {tourSlides[current].button}
        </button>
      </div>
    </div>
  )
}

export default Tour;

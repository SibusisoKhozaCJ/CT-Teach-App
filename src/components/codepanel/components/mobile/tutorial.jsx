import React, { useState, useEffect } from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  popup: {
    position: "fixed",
    width: "250px",
    padding: "9px 9px",
    zIndex: "10",
    background: "#fff",
    // color: "#000",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#00D2AA",
    borderRadius: 12,
    border: "3px white solid",

    "&::after": {
      content: '""',
      display: "none",
      border: "16px solid transparent",
      position: "absolute",
      width: 1,
      height: 1
    },

    "& h3": {
      fontSize: "14px",
      fontWeight: "bold"
    },

    "& p": {
      fontSize: 22,
      lineHeight: 1
    },

    '&[data-tutorial-position^="left-top"]': {
      width: "60%",
      top: 72,
      left: 60
    },

    '&[data-tutorial-position^="bottom"]': {
      bottom: 72,
      left: "50%",
      transform: "translateX(-50%)"
    },

    '&[data-tutorial-position^="top"]': {
      top: 72,
      left: "50%",
      transform: "translateX(-50%)"
    },

    '&[data-tutorial-arrow^="bottom"]::after': {
      display: "block",
      left: "50%",
      borderTop: "16px solid #fff",
      top: "100%",
      transform: "translateX(-50%)"
    },

    '&[data-tutorial-arrow^="left-top"]::after': {
      display: "block",
      right: "100%",
      top: 16,
      borderRight: "16px solid #fff"
    }
  },

  button: {
    margin: "auto",
    textTransform: "uppercase",
    // padding: "8px 16px",
    color: "#fff",
    fontFamily: "'Rajdhani', sans-serif",
    fontWeight: 400,
    background: "#e42761",
    fontSize: 22,
    border: "1px solid transparent",
    borderRadius: ".25rem",
    padding: "0 10px"
  }
}));

const tutorialData = [
  {
    title: "tip 1 of 3",
    text: <p>To help you, we added the &lt; {"&"} &gt; keys here.</p>,
    button: "Thanks >",
    arrow: "bottom",
    position: "bottom"
  },
  {
    title: "tip 2 of 3",
    text: <p>This is where you will type {"<h1>"}</p>,
    button: "OK >",
    arrow: "left-top",
    position: "left-top"
  },
  {
    title: "tip 3 of 3",
    text: (
      <p>
        When done swipe right <ArrowRightAltIcon /> or click the <AssignmentIcon />{" "}
        button to return to the slides.
      </p>
    ),
    button: "Got it.",
    arrow: "none",
    position: "top"
  }
];

const Tutorial = () => {
  const [tipIndex, setTipIndex] = useState(0);
  const [currentTip, setCurrentTip] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const completed = localStorage.getItem("tutorial-finished");
    if (!completed) {
      setCurrentTip(tutorialData[tipIndex]);
    }
  }, []);

  const clickHandler = () => {
    if (tipIndex + 1 === tutorialData.length) {
      localStorage.setItem("tutorial-finished", true);
    }
    setCurrentTip(tutorialData[tipIndex + 1]);
    setTipIndex(tipIndex + 1);
  };

  return currentTip ? (
    <div
      className={classes.popup}
      data-tutorial-arrow={currentTip.arrow}
      data-tutorial-position={currentTip.position}
    >
      <h3>{currentTip.title}</h3>
      <p>{currentTip.text}</p>
      <button
        className={classes.button}
        onClick={() => clickHandler()}
        type="button"
      >
        {currentTip.button}
      </button>
    </div>
  ) : null;
};

export default Tutorial

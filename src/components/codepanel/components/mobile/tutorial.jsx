import React, { useState, useEffect } from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  popup: {
    position: "fixed",
    width: "80%",
    padding: 20,
    zIndex: "10",
    background: theme.palette.primary.contrastText,
    color: theme.palette.secondary.contrastText,
    textAlign: "center",

    "&::after": {
      content: '""',
      display: "none",
      border: "16px solid transparent",
      position: "absolute",
      width: 1,
      height: 1
    },

    "& p": {
      fontSize: 20
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
      borderTop: `16px solid ${theme.palette.primary.contrastText}`,
      top: "100%",
      transform: "translateX(-50%)"
    },

    '&[data-tutorial-arrow^="left-top"]::after': {
      display: "block",
      right: "100%",
      top: 16,
      borderRight: `16px solid ${theme.palette.primary.contrastText}`
    }
  },

  button: {
    margin: "auto",
    textTransform: "uppercase",
    padding: "8px 16px",
    background: theme.palette.primary.main,
    border: "none"
  }
}));

const tutorialData = [
  {
    title: "tip 1 of 3",
    text: <p>To help you, we have added the &lt; {"&"} &gt; keys here.</p>,
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
      <Typography>
        When done swipe right <ArrowRightAltIcon /> or click <AssignmentIcon />{" "}
        button to return to the slides.
      </Typography>
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

import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  tip: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "rgba(67, 212, 221, 0.15)",
    padding: "12px 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid rgba(67, 212, 221, 0.35)",
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
  },
  btn: {
    padding: "8px 36px",
    border: "none",
    fontWeight: "bold"
  }
}));

let timer = null;
export const debounce = (fn, time) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(fn, time);
};

const Tip = ({ content }) => {
  const classes = useStyles();
  const [closed, setClosed] = useState(false);
  const [show, setShow] = useState(0);
  const [startX, setStartX] = useState(null);
  const [startY, setSartY] = useState(null);

  const clickHandler = () => {
    setClosed(true);
  }

  const touchStartHandler = (e) => {
    console.log(e);
  }

  const touchEndHandler = (e) => {
    console.log(e);
  }

  const swipeHandler = (e) => {
    // setClosed(true);
  }

  useEffect(() => {
    if (show === 0) {
      debounce(() => {
        setShow(1);
      }, 30000);
    }
    if (show === 1) {
      debounce(() => {
        setShow(2);
      }, 10000);
    }
  })

  if (!closed && show === 1) {
    return (
      <div
        className={classes.tip}
        onTouchStart={touchStartHandler}
        onTouchEnd={touchEndHandler}
      >
        <p className={classes.text}>{content}</p>
        <button
          role="button"
          className={classes.btn}
          onClick={clickHandler}
        >
          Got It
        </button>
      </div>
    )
  }
  return null;
}

export default Tip;

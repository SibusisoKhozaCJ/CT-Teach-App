import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import './tick.css';

const useStyles = makeStyles(() => ({
  container: {
    fontSize: 36,
    color: "#fff",
    borderRadius: "100%",
    padding: 4,
    transformOrigin: "center center",
    transform: "scale(1)",
    opacity: 1,
    lineHeight: 36,
    textAlign: "center",
    zIndex: 1210,
    background: "none",
    height: "100%",
    width: "100%",
    animation: "$bounce 1.0s;",
  },
  layers: {
    display: "inline-block",
    height: 100,
    width: 100,
    position: "relative",
  },

  icon: {
    margin: "auto",
    position: "absolute",
    color: "#fff",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },

  "@keyframes bounce": {
    "0%": {
      transform: "scale(0.5)",
      opacity: 1
    },
    "50%": {
      transform: "scale(4)",
      opacity: 0.5
    },
    "60%": {
      transform: "scale(0.7)",
      opacity: 1
    },
    "90%": {
      transform: "scale(1)",
      opacity: 0.9
    },
    "95%": {
      transform: "scale(0.9)",
      opacity: 1
    },
    "100%": {
      transform: "scale(1)",
      opacity: 1
    },
  }
}));

const Tick = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <span className={classes.layers}>
        <svg className={classes.icon} style={{ color: "#fff" }} aria-hidden="true" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
          <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
        </svg>
        <svg className={classes.icon} style={{ color: "#00A921" }} aria-hidden="true" data-prefix="fas" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
          <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
        </svg>
      </span>
    </div>
  );
}

export default Tick;

import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import { useSelector } from "react-redux";

import TickIcon from "../../../../assets/images/tick-icon.png";
import TestTubeIcon from "../../../../assets/images/testtube-icon.png";
import ChevronRightIcon from "../../../../assets/images/chevron-right-icon.png";
import CloseIcon from "../../../../assets/images/close-gray-icon.png";
import Tick from "../../../../assets/images/tick.png";

const useStyles = makeStyles(() => ({
  chart: {
    position: "absolute",
    right: 20,
    top: 20,
    width: 24,
    height: 24,
    border: "3px solide transparent",
    borderRadius: "50%",
    backgroundColor: "rgba(255,255,255,.25)",
  },

  svg: {
    position: "absolute",
    top: 0,
    left: 0
  },

  circle: {
    transform: "rotate(-90deg)",
    transformOrigin: "center",
  },

  completed: {
    position: "absolute",
    right: 20,
    top: 20,
    width: 24,
    height: 24,
    borderRadius: "50%",
    backgroundColor: "#76DC37",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  list: {
    position: "absolute",
    right: 20,
    top: 20,
    maxWidth: "70%",
    margin: 0,
    padding: "8px 4px",
    borderRadius: 14,
    backgroundColor: "#fff",
    border: "2px solid #43D4DD",
    fontSize: 13,

    "&::before": {
      zIndex: 1,
      display: "block",
      position: "absolute",
      content: "''",
      top: 0,
      bottom: 0,
      left: 0,
      width: 32,
      backgroundColor: "#43D4DD",
      borderRadius: 10
    }
  },

  title: {
    fontSize: 14,
    color: "#43D4DD",
    fontWeight: 700,
    textTransform: "uppercase",
    marginLeft: 12
  },

  item: {
    position: "relative",
    zIndex: 10,
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },

  text: {
    marginLeft: 12
  },
}));

const Checker = ({ challenges, percent }) => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(true);
  // const isCheckerOpen = useSelector(state => state.codepanel.isCheckerOpen);
  const [isOpen, setIsOpen] = useState(false);
  const curveLength = percent * 2 * Math.PI / 10;

  return isOpen ? (
    <ul className={classes.list}>
      <img
        src={CloseIcon}
        width="18"
        className={`${classes.close} coverage`}
        alt=""
        onClick={() => {setIsOpen(false)}}
      />
      {collapsed ? (
        <div onClick={() => {setCollapsed(false)}}>
          <li className={classes.item}>
          </li>
          {challenges.map(challenge => (
            <li key={challenge.description} className={classes.item}>
              <img src={challenge.status ? TickIcon : TestTubeIcon} className="coverage" width="20" alt="" />
            </li>
          ))}
        </div>
      ) : (
        <>
          <li className={classes.item} onClick={() => setCollapsed(!collapsed)}>
            <img onClick={()=>{}} src={ChevronRightIcon} className="coverage" alt="" />
            <h3 className={classes.title}>Checker:</h3>
          </li>
          {challenges.map(challenge => (
            <li key={challenge.description} className={classes.item}>
              <img src={challenge.status ? TickIcon : TestTubeIcon} className="coverage" width="20" alt="" />
              <span className={classes.text}>{challenge.description}</span>
            </li>
          ))}
        </>

      ) }
    </ul>
  ) : percent === 100 ? (
    <div className={classes.completed} onClick={() => {setIsOpen(true)}}>
      <img src={Tick} className={`${classes.tick} coverage`} width="20" alt="" />
    </div>
  ) : (
    <div onClick={() => {setIsOpen(true)}} className={classes.chart}>
      {percent > 0 && (
        <svg
          className={classes.svg}
          viewbox="0 0 24 24"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className={classes.circle}
            stroke="#76DC37"
            stroke-width="3"
            stroke-dasharray={`${curveLength},64`}
            stroke-linecap="round"
            fill="none"
            cx="12"
            cy="12"
            r="10"
          />
        </svg>
      )}
    </div>
  )
};

export default Checker;

import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import Tick from "../tick/tick";

const useStyles = makeStyles(() => ({
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
  }
}));

const Checker = ({ challenges }) => {
  const classes = useStyles();
  const [collapsed, setCollapsed] = useState(true);

  return (
    <ul className={classes.list}>
      <li className={classes.item} onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </li>
      {challenges.map(challenge => (
        <li key={challenge.description} className={classes.item}>
          {challenge.status ? <Tick size="24" /> : <ErrorIcon />}
          {collapsed || <span className={classes.text}>{challenge.description}</span>}
        </li>
      ))}
    </ul>
  );
};

export default Checker;

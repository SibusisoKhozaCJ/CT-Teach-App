import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles(() => ({
  item: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 0,
    padding: "15px 0 15px 15px",
    listStyle: "none",
    position: "relative"
  },

  order: {
    fontSize: 20,
    fontWeight: "bold"
  },

  title: {
    marginLeft: 12,
    fontSize: 12,
  },

  link: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#D40073",
    color: "#fff",
    marginLeft: "auto"
  },

  progress: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: "#F0EEEE"
  },

  currentProgress: {
    position: "absolute",
    left: 0,
    top: 0,
    height: 4,
    backgroundColor: "#D40073"
  }
}));

const LessonItem = ({ lesson, index, currentProgress, closeSidebar }) => {
  const classes = useStyles();

  return (
    <li className={classes.item}>
      <span className={classes.order}>
        {index}.
      </span>
      <span className={classes.title}>
        {lesson.title}
      </span>
      <Link onClick={closeSidebar} className={classes.link}>
        <PlayArrowIcon />
      </Link>
      <div className={classes.progress}>
        <div className={classes.currentProgress} style={{ width: `${currentProgress}%` }}/>
      </div>
    </li>
  )
}

export default LessonItem

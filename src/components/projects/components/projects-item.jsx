import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles(() => ({
  item: {
    border: "5px solid #43D4DD",
    margin: "40px 0",
    padding: "20px 36px 0 36px",
    // overflowY: "hidden",
    width: "100%",
    maxWidth: 600,
    position: "relative"
  },

  header: {
    fontSize: 25,
    fontWeight: "bold"
  },

  description: {
    fontSize: 15
  },

  list: {
    margin: "12px 0 0 20px",
    padding: 0,
    fontSize: 13,
    fontWeight: "bold",

    "& li": {
      listStyle: "none"
    },

    "& span": {
      fontWeight: 400
    }
  },

  buttons: {
    marginTop: 22,
    display: "flex",
    justifyContent: "space-between",
  },

  btnStart: {
    flexGrow: 1,
    marginLeft: 39,
    textAlign: "center",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D40073",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "11px 26px",
    borderRadius: 10,

    "&:hover": {
      color: "#fff",
      textDecoration: "none"
    }
  },

  btnMore: {
    flexGrow: 1,
    textAlign: "center",
    justifyContent: "center",
    display: "inline-block",
    backgroundColor: "#43D4DD",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "11px 26px",
    borderRadius: 10,

    "&:hover": {
      color: "#fff",
      textDecoration: "none"
    }
  },

  btnIcon: {
    marginLeft: "auto",
    fontSize: 36
  },

  progress: {
    fontSize: 11,
    marginTop: 14,
    width: "100%",
    textAlign: "center"
  },

  collapse: {
    position: "absolute",
    width: 45,
    height: 45,
    border: "5px solid #43D4DD",
    borderRadius: "50%",
    right: 12,
    bottom: -22,
    backgroundColor: "#fff"
  }
}));

const ProectItem = ({ project: {title, description, level, fun, time, outline, key, lessons}}) => {
  const classes = useStyles();
  const [isListEmpty, setIsListEmpty] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const completed = 0;

  useEffect(() => {
    setIsListEmpty(!(level || fun || time || outline))
  }, [level, fun, time, outline])

  return (
    <div className={classes.item}>
      <h3 className={classes.header}>{title}</h3>
      <p className={classes.description}>{description}</p>
      {isCollapsed ? null : (
        <>
          {isListEmpty || (
            <ul className={classes.list}>
              {level ? <li>LEVEL: <span>{level}</span></li> : null}
              {fun ? <li>FUN: <span>{fun}</span></li> : null}
              {time ? <li>TIME: <span>{time}</span></li> : null}
              {outline ? <li>OUTLINE: <span>{outline}</span></li> : null}
            </ul>
          )}
          <div className={classes.buttons}>
            <Link to={`/lesson/${key}`} className={classes.btnMore}>
              More
            </Link>
            <Link to={`/codepanel/${lessons[0]}`} className={classes.btnStart}>
              <span style={{ marginLeft: "auto" }}>
                Start
              </span>
                <PlayArrowIcon className={classes.btnIcon}/>
            </Link>
          </div>
          <p className={classes.progress}>Training Completed: {completed} of {lessons.length}</p>
        </>
      )}
      <button
        onClick={() => {setIsCollapsed(!isCollapsed)}}
        role="button" className={classes.collapse}
      >
        {isCollapsed ? <KeyboardArrowDownIcon style={{ color: "#D40073" }}/> : <KeyboardArrowUpIcon style={{ color: "#A6A6A6" }}/>}
      </button>
    </div>
  )
}

export default ProectItem

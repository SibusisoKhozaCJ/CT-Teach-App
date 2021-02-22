import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import ShareIcon from "../../../assets/icons/footer-icon/share.png";
import Card from "../../../shared/components/card/card";

const useStyles = makeStyles(() => ({
  item: {
    border: "5px solid #43D4DD",
    borderRadius: 25,
    margin: "40px 0",
    padding: "20px 36px 56px 36px",
    // overflowY: "hidden",
    width: "100%",
    maxWidth: 600,
    position: "relative"
  },

  header: {
    fontSize: 29,
    fontWeight: "bold"
  },

  description: {
    fontSize: 21
  },

  list: {
    margin: "12px 0 0 20px",
    padding: 0,

    "& li": {
      margin: "10px 0",
      listStyle: "none",
      fontSize: 19,
      fontWeight: "bold",
    },

    "& span": {
      marginLeft: 20,
      fontWeight: 400,
      padding: "0 19px",
      backgroundColor: "#FBDD3F",
      borderRadius: 15
    }
  },

  buttons: {
    marginTop: 22,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  btnStart: {
    order: 0,
    borderRadius: 40,
    textAlign: "center",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#43D4DD",
    border: "4px solid #fff",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "11px 26px",
    zIndex: 10,

    "&:hover": {
      color: "#fff",
      textDecoration: "none"
    }
  },

  btnMore: {
    zIndex: 1,
    display: "flex",
    order: 1,
    margin: 0,
    marginLeft: -45,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: 1,
    backgroundColor: "#000",
    border: "4px solid #fff",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "16px 32px 16px 58px",
    borderRadius: 40,

    "&:hover": {
      color: "#fff",
      textDecoration: "none"
    }
  },

  btnShare: {
    order: 2,
    marginLeft: "auto",
    backgroundColor: "#c4c4c4",
    borderRadius: 50,
    width: 60,
    height: 60,
    border: "none",
    opacity: ".45",
  },

  btnIcon: {
    marginLeft: "auto",
    fontSize: 36
  },

  progress: {
    order: 1,
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
  // const completed = 0;

  useEffect(() => {
    setIsListEmpty(!(level || fun || time || outline))
  }, [level, fun, time, outline])

  return (
    <Card button={{
      classes: "bottom-right",
      content: isCollapsed ? (
            <KeyboardArrowDownIcon
              style={{ color: "#D40073" }}
              onClick={() => {setIsCollapsed(!isCollapsed)}}
            />) : (
            <KeyboardArrowUpIcon
              style={{ color: "#A6A6A6" }}
              onClick={() => {setIsCollapsed(!isCollapsed)}}
            />)
      }
    }>
    {/* <div className={classes.item}> */}
      <h3 className={classes.header}>{title}</h3>
      {isCollapsed ? null : (
        <>
          <p className={classes.description}>{description}</p>
          {isListEmpty || (
            <ul className={classes.list}>
              {level ? <li>LEVEL: <span>{level}</span></li> : null}
              {fun ? <li>FUN: <span>{fun}</span></li> : null}
              {time ? <li>TIME: <span>{time}</span></li> : null}
              {outline ? <li>OUTLINE: <span>{outline}</span></li> : null}
            </ul>
          )}
          {/* <p className={classes.progress}>Training Completed: {completed} of {lessons.length}</p> */}
        </>
      )}
          <div className={classes.buttons}>
            <Link to={`/lesson/${key}`} className={classes.btnMore}>
              Trainings
            </Link>
            <Link to={`/codepanel/${lessons[0]}`} className={classes.btnStart}>
              <PlayArrowIcon className={classes.btnIcon}/>
            </Link>
            <button role="button" className={classes.btnShare}>
              <img onClick={()=>{}} src={ShareIcon} className="coverage" alt="" />
            </button>
          </div>
    {/* </div> */}
    </Card>
  )
}

export default ProectItem

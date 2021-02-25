import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import ShareIcon from "../../../../../assets/icons/footer-icon/share.png";
import Card from "../../../../../shared/components/card/card";

const useStyles = makeStyles(() => ({
  cardContainer: {
    display: "flex",
    alignItems: "stretch",
    backgroundColor: "#fff",

    "&>div": {
      display: "flex",
      alignItems: "stretch",
    }
  },

  cardLeft: {
    display: "flex",
    flexDirection: "column"
  },
  cardRight: {
    width: 50,
    marginLeft: "auto",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",

    "&>img": {
      marginBottom: 8
    },

    "& img": {
      width: "100%"
    },

    "& button": {
      marginTop: "auto"
    },

    ["@media (min-width:768px)"]: {
      width: 100
    }
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",

    ["@media (min-width:768px)"]: {
      fontSize: 26
    }
  },

  description: {
    fontSize: 13,

    ["@media (min-width:768px)"]: {
      fontSize: 18
    }
  },

  list: {
    padding: 0,
    marginBottom: 20,
    fontSize: 12,

    ["@media (min-width:768px)"]: {
      "& li": {
        fontSize: 18
      }
    },

    "& li": {
      margin: 6,
      listStyle: "none",
      fontWeight: "bold",
    },

    "& span": {
      marginLeft: 8,
      fontWeight: 400,
      padding: "0 8px",
      backgroundColor: "#FBDD3F",
      borderRadius: 15
    }
  },

  buttons: {
    marginTop: 22,
    marginTop: "auto",
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
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "6px 16px",
    zIndex: 10,
    display: "flex",
    alignItems: "center",

    "&:hover": {
      color: "#fff",
      textDecoration: "none"
    }
  },

  btnSoon: {
    borderRadius: 40,
    textAlign: "center",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c4c4c4",
    border: "4px solid #fff",
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "6px 15px",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
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
    marginBottom: 4,
    backgroundColor: "#c4c4c4",
    borderRadius: 50,
    width: 35,
    height: 35,
    border: "none",
    opacity: ".45",
  },

  btnIcon: {
    marginLeft: "auto",
    fontSize: 16
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

const ProectItem = ({ project: {title, description, level, fun, time, outline, key, lessons, img}, closeSidebar}) => {
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
      }
      style={{ backgroundColor: "#fff", padding: 8, paddingBottom: 16  }}
    >
      <div className={classes.cardContainer}>
      <div className={classes.cardLeft}>
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
            {/* <p className={classes.progress}>Training Completed: {completed} of {lessons.length}</p> */}
          </>
        )}
        <div className={classes.buttons}>
          {lessons ? (
            <>
              {lessons.length > 1 ? (
                <>
                  <Link to={`/lesson/${key}`} className={classes.btnMore}>
                    Trainings
                  </Link>
                  <Link to={`/codepanel/${lessons[0]}`} className={classes.btnStart}>
                    <PlayArrowIcon className={classes.btnIcon}/>
                  </Link>
                </>
              ) : (
                <button className={classes.btnStart} role="button" onClick={() => {
                  closeSidebar()
                }}>
                  <span>Rock This!</span>
                  <PlayArrowIcon className={classes.btnIcon}/>
                </button>
              )}
            </>
          ) : (
            <button role="button" className={classes.btnSoon} disabled>
              Coming soon!
            </button>

          )}
        </div>
      </div>
      {img ? (

        <div className={classes.cardRight}>
          <img src={img} />
          <button role="button" className={classes.btnShare}>
            <img onClick={()=>{}} src={ShareIcon} className="coverage" alt="" />
          </button>
        </div>
      ) : null}
      </div>
    </Card>
  )
}

export default ProectItem

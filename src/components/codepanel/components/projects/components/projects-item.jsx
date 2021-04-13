import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useHistory } from 'react-router-dom';

import ShareIcon from "../../../../../assets/icons/footer-icon/share.png";
import Card from "../../../../../shared/components/card/card";
import ExpandIcon from "../../../../../assets/images/chevron-down-pink.png";
import CollapseIcon from "../../../../../assets/images/chevron-up-gray.png";

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
    // marginLeft: "auto",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    margin: 0,
    marginRight: 12,

    "&>img": {
      marginBottom: 8,
      borderRadius: 10
    },

    "& img": {
      width: "100%"
    },

    "& button": {
      marginTop: "auto"
    },

    ["@media (min-width:1275px)"]: {
      width: 100,
      margin: 0,
      marginRight: 32,
    }
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",

    ["@media (min-width:1275px)"]: {
      fontSize: 26
    }
  },
  subtitle: {
    margin: 0,
    padding: 0,
    fontSize: 14,
    fontWeight: "bold",

    ["@media (min-width:1275px)"]: {
      fontSize: 23
    }
  },

  description: {
    fontSize: 13,

    ["@media (min-width:1275px)"]: {
      fontSize: 18
    }
  },

  list: {
    padding: 0,
    marginBottom: 20,
    fontSize: 12,

    ["@media (min-width:1275px)"]: {
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
    },

    ["@media (min-width:1275px)"]: {
      fontSize: 25,
      padding: "11px 45px"
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

    ["@media (min-width:1275px)"]: {
      fontSize: 25,
      padding: "11px 45px"
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
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    // padding: "16px 32px 16px 58px",
    padding: "6px 15px 6px 50px",
    borderRadius: 40,

    ["@media (min-width:1275px)"]: {
      fontSize: 25,
      padding: "11px 45px 11px 65px"
    },

    "&:hover": {
      color: "#fff",
      textDecoration: "none"
    }
  },

  btnShare: {
    order: 2,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 4,
    backgroundColor: "#c4c4c4",
    borderRadius: 50,
    width: 35,
    height: 35,
    border: "none",
    opacity: ".45",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    "& img": {
      width: 20
    },

    ["@media (min-width:1275px)"]: {
      width: 60,
      height: 60
    }

  },

  btnIcon: {
    marginLeft: "auto",
    fontSize: 16,

    ["@media (min-width:1275px)"]: {
      fontSize: 25,
    }
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

const ProectItem = (
  {
    project:
    {
      title,
      subtitle,
      description,
      level,
      fun,
      time,
      outline,
      key,
      lessons,
      img
    },
    closeSidebar,
    selectProject
  }
) => {
  const classes = useStyles();
  const [isListEmpty, setIsListEmpty] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const isDesktop = useMediaQuery("(min-width:1275px)");
  const history = useHistory()
  // const completed = 0;

  useEffect(() => {
    setIsListEmpty(!(level || fun || time || outline))
  }, [level, fun, time, outline])

  return (
    <Card button={{
      classes: "bottom-right",
      content: isCollapsed ? (
          <img src={ExpandIcon} alt="" className="coverage" onClick={() => {setIsCollapsed(!isCollapsed)}}/>
        ) : (
          <img src={CollapseIcon} alt="" className="coverage" onClick={() => {setIsCollapsed(!isCollapsed)}}/>
        )
      }}
      style={{ backgroundColor: "#fff", padding: isDesktop ? "31px 50px 48px 50px" : "11px 10px 18px 10px"}}
    >
      <div className={classes.cardContainer}>
        {img ? (

          <div className={classes.cardRight}>
            <img src={img} />
            {!isCollapsed && (
              <button role="button" className={classes.btnShare}>
                <img onClick={()=>{}} src={ShareIcon} alt="" />
              </button>
            )}
          </div>
        ) : null}
        <div className={classes.cardLeft}>
          {subtitle && <h4 className={classes.subtitle}>{subtitle}:</h4>}
          <h3 className={classes.header}>{title}</h3>
          { (lessons &&  lessons.length === 1) || !isCollapsed ? (
            <p className={classes.description}>{description}</p>
          ) : null}
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
                    <Link onClick={() => {
                        console.log("trainings click")
                        selectProject("P001");
                      }} className={classes.btnMore}>
                      Trainings
                    </Link>
                    <Link
                      onClick={() => {
                        history.push(`/codepanel/C001/P001/${lessons[0]}`);
                        closeSidebar();
                      }}
                      className={classes.btnStart}
                    >
                      <PlayArrowIcon className={classes.btnIcon}/>
                    </Link>
                  </>
                ) : (
                  <button className={classes.btnStart} role="button" onClick={() => {
                    // selectProject(key);
                    history.push(`/codepanel/C001/P001/T000`);
                    closeSidebar();
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
      </div>
    </Card>
  )
}

export default ProectItem

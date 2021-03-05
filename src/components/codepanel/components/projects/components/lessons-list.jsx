import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { lessonsGetList } from "../../../../../redux/actions/lessons-actions";
import { projectsGetById } from "../../../../../redux/actions/projects-actions";
import Loading from "../../../../../shared/components/loader/Loading";
import LessonItem from "./lessons-item";
import Card from "../../../../../shared/components/card/card";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100%",
    width: "100%",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flexGrow: 1,
    border: "5px solid #43D4DD",
    padding: "0 20px 30px 20px",
    position: "relative"
  },

  title: {
    margin: 0,
    marginTop: 20,
    fontSize: 19,
    fontWeight: "bold",
    color: "#000",
    textTransform: "uppercase"
  },

  objective: {
    fontSize: 12,
    color: "#000"
  },

  lessons: {
    margin: 0,
    padding: 0,
  },

  back: {
    flexGrow: 1,
    marginTop: 70,
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

  backRound: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 45,
    height: 45,
    border: "5px solid #43D4DD",
    borderRadius: "50%",
    left: 12,
    bottom: -22,
    backgroundColor: "#fff",
    fontSize: 20,
    color: "#D40073"
  }
}));

const Lessons = ({id, backToProjects, closeSidebar, isDesktop}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lessons = useSelector(state => state.lessons.lessonsList);
  const project = useSelector(state => state.projects.currentProject);
  const isLessonsLoading = useSelector(state => state.lessons.isLoading);
  const isProjectLoading = useSelector(state => state.projects.is);
  const isDesktopQuery = useMediaQuery("(min-width:1275px)");

  useEffect(() => {
    if (isLessonsLoading === null) {
      dispatch(lessonsGetList(id))
      dispatch(projectsGetById(id))
    }
  }, [dispatch, id])

  if (isLessonsLoading || isProjectLoading) {
    return (
      <div className="loader">
        <Loading />
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <Card
        button={isDesktop ? null : {
          classes: "bottom-left",
          content: (
            <Link onClick={backToProjects}>
              <KeyboardArrowLeftIcon />
            </Link>
          )
        }}
        // style={{ backgroundColor: "#fff", padding: 8, paddingBottom: 24, margin: "20px 10px", minHeight: "80%"  }}
        style={{ backgroundColor: "#fff", padding: isDesktopQuery ? "31px 50px 48px 50px" : "11px 10px 18px 10px"}}
      >
        <h1 className={classes.title}>{project.title}</h1>
        <h2 className={classes.title}>Objective</h2>
        <p className={classes.objective}>{project.objective}</p>
        <h2 className={classes.title}>Training:</h2>
        <ul className={classes.lessons}>
          {lessons.map((lesson, index) => (
            <LessonItem
              index={index + 1}
              key={index}
              lesson={lesson}
              currentProgress={87}
              closeSidebar={closeSidebar}
            />)
          )}
        </ul>
        {!isDesktop && <Link onClick={backToProjects} className={classes.back}>Back</Link>}
      </Card>
    </div>

  )
}

export default Lessons

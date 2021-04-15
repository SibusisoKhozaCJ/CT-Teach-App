import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';

import { useHistory } from 'react-router-dom';

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
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    textTransform: "uppercase"
  },

  objective: {
    fontSize: 15,
    color: "#000"
  },

  lessons: {
    margin: 0,
    padding: 0,
  },

  back: {
    flexGrow: 1,
    marginTop: 53,
    textAlign: "center",
    justifyContent: "center",
    display: "inline-block",
    backgroundColor: "#43D4DD",
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "4px 33px",
    borderRadius: 10,
    marginLeft: '10px',

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
  }, 
  subtitle:{
    marginTop:19
  }, 
  object:{
    marginTop:17
  },
  training:{
    marginTop:10
  },
  leftArrow:{
    color: '#D50073'
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
  const history = useHistory()
  useEffect(() => {
     if (id === "P001") {
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
      {id === 'P001' && <Card
        button={{
          classes: "bottom-left",
          content: (
            <Link onClick={backToProjects} className={classes.leftArrow}>
              <KeyboardArrowLeftIcon />
            </Link>
          )
        }}
        // style={{ backgroundColor: "#fff", padding: 8, paddingBottom: 24, margin: "20px 10px", minHeight: "80%"  }}
        style={{ backgroundColor: "#fff", padding: isDesktopQuery ? "0px 12px 48px 12px" : "0px 10px 18px 10px", marginTop:'80px'}}
      >
        <h1 className={classNames(classes.title, classes.subtitle)}>{project.subtitle}: {project.title}</h1>
        <h2 className={classNames(classes.title, classes.object)}>Objective</h2>
        <div className={classes.objective}>
        <Grid item xs={12} sm={8}>
        {project.objective}
        </Grid>
      </div>
        <h2 className={classNames(classes.title, classes.training)}>Training:</h2>
        <ul className={classes.lessons}>
          {lessons.map((lesson, index) => (
            <LessonItem
              index={index + 1}
              key={index}
              lesson={lesson}
              currentProgress={87}
              closeSidebar={() => {
                history.push(`/codepanel/C001/P001/${lesson.trainingId}`)
                closeSidebar();
              }}
            />)
          )}
        </ul>
        {<Link onClick={backToProjects} className={classes.back} style={{marginBottom: isDesktopQuery ? "0px" : "26px"}}>Back</Link>}
      </Card>}
    </div>

  )
}

export default Lessons

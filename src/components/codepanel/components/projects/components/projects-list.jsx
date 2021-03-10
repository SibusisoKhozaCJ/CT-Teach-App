import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

import Loading from "../../../../../shared/components/loader/Loading";
import { projectsGetList } from "../../../../../redux/actions/projects-actions";
import ProjectsItem from "./projects-item";

const useStyles = makeStyles(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
}));

const Projects = ({ closeSidebar, selectProject }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.projectsList);
  const isLoading = useSelector(state => state.projects.isLoading);

  useEffect(() => {
    if (isLoading === null) {
      dispatch(projectsGetList())
    }
  }, [dispatch])

  if (isLoading) {
    return (
      <div className="loader">
        <Loading />
      </div>
    )
  }

  return (
    <div className={classes.root}>
      {projects.map(project => <ProjectsItem project={project} closeSidebar={closeSidebar} selectProject={selectProject}/>)}
    </div>
  )
};

export default Projects;

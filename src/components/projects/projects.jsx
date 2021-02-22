import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';

import Icon1 from "../../assets/icons/footer-icon/icon1.svg";
import Loading from "../../shared/components/loader/Loading";
import { projectsGetList } from "../../redux/actions/projects-actions";
import ProjectItem from "./components/projects-item";

const useStyles = makeStyles(() => ({
  root: {
    // flexGrow: 1,
    minHeight: "100vh",
    width: "100%",
    overflowX: "hidden"
  },

  title: {
    color: "#000",
    textTransform: "uppercase",
    fontSize: 27,
    fontWeight: "bold"
  },

  icon: {
    width: 45,
    marginRight: 22
  }
}));

const Projects = () => {
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
      <div className="commonheight" />
      <div className={classes.container}>
        <h1 className={classes.title}>
          <img src={Icon1} className={`${classes.icon} coverage`} alt="" />
          Projects
        </h1>
        <div>
          {projects.map(project => <ProjectItem project={project} />)}
        </div>
      </div>
    </div>
  )
};

export default Projects;

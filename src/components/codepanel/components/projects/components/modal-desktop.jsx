import React from "react";
import { makeStyles } from "@material-ui/styles";

import ProjectsList from "./projects-list";

const  useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
    height: "100%",
  },

  projects: {
    maxWidth: "40%",
    height: "100%",
    overflowY: "scroll",
    backgroundColor: "rgba(255, 255, 255, .45)",
    borderRadius: 20,
    padding: 16,
    MsOverflowStyle: "none",
    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
      display: "none"
    }
  }
}));

const ModalDesktop = ({ closeSidebar }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.projects}>
      <ProjectsList closeSidebar={closeSidebar}/>
      </div>
    </div>
  )
}

export default ModalDesktop;

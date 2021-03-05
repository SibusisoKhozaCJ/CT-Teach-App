import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import ProjectsList from "./projects-list";
import LessonsList from "./lessons-list";

const  useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
    height: "100%",
  },

  projects: {
    width: "48%",
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
  },
  lessons: {
    width: "48%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
}));

const ModalDesktop = ({ closeSidebar }) => {
  const classes = useStyles();
  const [currentProjectId, setCurrentProjectId] = useState("5-min-website");

  const selectProject = (id) => {
    setCurrentProjectId(id);
  }

  return (
    <div className={classes.container}>
      <div className={classes.projects}>
        <ProjectsList closeSidebar={closeSidebar} selectProject={selectProject}/>
      </div>
      {currentProjectId && (
        <div className={classes.lessons}>
          <LessonsList id={currentProjectId} isDesktop={true} closeSidebar={closeSidebar} />
        </div>
      )}
    </div>
  )
}

export default ModalDesktop;

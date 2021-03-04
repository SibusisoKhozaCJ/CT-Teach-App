import React, {useState} from "react";

import ProjectsList from "./projects-list";
import LessonsList from "./lessons-list.jsx"

const ModalMobile = ({ closeSidebar }) => {
  const [isProjects, setIsProjects] = useState(true);
  const [currentProjectId, setCurrentProjectId] = useState(null);

  const selectProject = (id) => {
    setIsProjects(false);
    setCurrentProjectId(id);
  }

  const backToProjects = () => {
    setIsProjects(true);
  }

  return  (
    <div style={{ width: "100%", height: "100%", overflowY: "scroll" }}>
      {isProjects ? (
        <ProjectsList
          closeSidebar={closeSidebar}
          selectProject={selectProject}
        />
      ) : (
        <LessonsList
          id={currentProjectId}
          backToProjects={backToProjects}
          closeSidebar={closeSidebar}
        />
      )}
    </div>
  )
}

export default ModalMobile;

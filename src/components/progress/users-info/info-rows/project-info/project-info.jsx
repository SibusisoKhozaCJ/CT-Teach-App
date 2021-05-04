import React from "react";
import CrsArrow from "../../../../../assets/images/crossarow.svg";
import LinearProgress from "@material-ui/core/LinearProgress";
import ProjectProgressBar from "./project-progress";
const ProjectInfoRows = ({
  projectList,
  setSelectedProject,
  usersProgressList,
  selectedCourse
}) => {
  return (
    <div className="theader project-header">
      {projectList &&
        projectList.length > 0 &&
        projectList.map((project, index) => (
          <div
            key={"project" + index}
            onClick={() => {
              setSelectedProject(project.id);
            }}
            className="table_header"
          >
            <div className="crsarrow">
              <img title={project.title} src={CrsArrow} />
            </div>
            {project.id}
          </div>
        ))}
      <div className="table_header"></div>
      
        {usersProgressList &&
          usersProgressList.length > 0 &&
          usersProgressList.map((progress, index) => (
            <div className="table_row">
              <ProjectProgressBar selectedCourse={selectedCourse} projectList={projectList} progress={progress}/>
            </div>
          ))}
      
    </div>
  );
};
export default ProjectInfoRows;

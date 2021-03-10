import React, { useState } from "react";
import ProjColsp from "../../../assets/images/project-collpse.svg";
import SelectProjects from "./user-row/project-drop-down"
import UserRow from "./user-row/user-record-row";
import ProjectHeader from "./project-header/project-header"
const Projects = ({index,progressList, projectData, setProjectOpenClass, projectClass }) => {
    const [lessionClass, setLessionClass] = useState("lession0");
    const handleProjectOpen = (openClass)=>{
        setProjectOpenClass(openClass)
    }
  return (
    <div
      className=""
      className={
        projectClass === "project"+index
          ? "project-div"
          : "project-div project-div-close"
      }
    >
      <div className="project-head">
        <div className="project-heading">
          <h2>{projectData.data.title}</h2>
          <button
            onClick={() =>
              projectClass !== "project"+index
                ? handleProjectOpen("project"+index)
                : handleProjectOpen("")
            }
          >
            <img src={ProjColsp} />
          </button>
        </div>

        <span>!</span>
      </div>
       <h2 className="pcoloseheading">{projectData.data.title}</h2>
      <div
        className={
          projectClass === "project"+index
            ? "main-project-div"
            : " main-project-div main-project-div-close"
        }
      >
         <SelectProjects/>
        <div className="table">
          {/* Header */}
          <ProjectHeader
            projectData={projectData} progress={progressList[0]}
            lessionClass={lessionClass}
            setLessionClass={(evt) => setLessionClass(evt)}
          />
          {progressList.map((progress,index)=>(
            <UserRow projectData={projectData} progress={progress} lessionClass={lessionClass} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
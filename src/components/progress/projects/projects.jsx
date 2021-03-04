import React, { useState } from "react";
import ProjColsp from "../../../assets/images/project-collpse.svg";
import SelectProjects from "./user-row/project-drop-down"
import UserRow from "./user-row/user-record-row";
import ProjectHeader from "./project-header/project-header"
const Projects = ({defaultClass, setProjectOpenClass}) => {
    const [projectClass, setProjectClass] = useState(defaultClass);
    const [lessionClass, setLessionClass] = useState("lession1");

    const handleProjectOpen = (openClass)=>{
        setProjectClass(openClass);
        setProjectOpenClass(openClass)
    }
  return (
    <div
      className=""
      className={
        projectClass === "project1"
          ? "project-div"
          : "project-div project-div-close"
      }
    >
      <div className="project-head">
        <div className="project-heading">
          <h2>PROJECT 1</h2>
          <button
            onClick={() =>
              projectClass !== "project1"
                ? handleProjectOpen("project1")
                : handleProjectOpen("")
            }
          >
            <img src={ProjColsp} />
          </button>
        </div>

        <span>!</span>
      </div>
       <h2 className="pcoloseheading">PROJECT 1</h2>
      <div
        className={
          projectClass === "project1"
            ? "main-project-div"
            : " main-project-div main-project-div-close"
        }
      >
         <SelectProjects/>
        <div className="table" id="results">
         
          {/* Header */}
          <ProjectHeader
            lessionClass={lessionClass}
            setLessionClass={(evt) => setLessionClass(evt)}
          />
          {/* Row */}
          <UserRow lessionClass={lessionClass} />
          <UserRow lessionClass={lessionClass} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
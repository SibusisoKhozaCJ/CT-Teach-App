import React, { useState } from "react";
import ProjColsp from "../../../assets/images/project-collpse.svg";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import UserRow from "./user-row/user-row.jsx";
import ProjectHeader from "./project-header/project-header"
const Projects = ({defaultClass}) => {
    const [projectClass, setProjectClass] = useState(defaultClass);
    const [lessionClass, setLessionClass] = useState("lession1");
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
                ? setProjectClass("project1")
                : setProjectClass("")
            }
          >
            <img src={ProjColsp} />
          </button>
        </div>

        <span>!</span>
      </div>
      <div
        className={
          projectClass === "project1"
            ? "main-project-div"
            : " main-project-div main-project-div-close"
        }
      >
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
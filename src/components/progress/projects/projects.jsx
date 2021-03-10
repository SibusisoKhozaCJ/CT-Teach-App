import React, { useEffect, useState } from "react";
import ProjColsp from "../../../assets/images/project-collpse.svg";
import SelectProjects from "./user-row/project-drop-down"
import UserRow from "./user-row/user-record-row";
import ProjectHeader from "./project-header/project-header"
const Projects = ({ index, projectData, trainingList, projectList, setProjectOpenClass, projectClass }) => {
  const [lessionClass, setLessionClass] = useState("");
  const [selectedTraning, setSelectedTraning] = useState("")
  const [selectproject, setSelectedProject] = useState(projectData.id)
  const [traningData, setTraningData] = useState([]);
  const handleProjectOpen = (openClass) => {
    setProjectOpenClass(openClass);
    setTraningData(trainingList[selectproject])
  }
  useEffect(()=>{
    setTraningData(trainingList[selectproject])
  },[selectproject])
  return (
    <div
      className={
        projectClass === ""
          ? "project-div project-div-close"
          : projectClass === "project" + index ? "project-div" : "project-div hide"
      }
    >
      <div className={projectClass === "" ? "project-head" : "project-head hide"}>
        <div className="project-heading">
          <button
            onClick={() =>
              projectClass !== "project" + index
                ? handleProjectOpen("project" + index)
                : handleProjectOpen("")
            }
          >
            <img src={ProjColsp} />
          </button>
        </div>

        <span>!</span>
      </div>
      <h2 className="pcoloseheading">{projectData.title}</h2>
      <div
        className={
          projectClass === "project" + index
            ? "main-project-div"
            : " main-project-div main-project-div-close"
        }
      >
        <SelectProjects selectproject={selectproject} setSelectedProject={(evt)=>setSelectedProject(evt)} selectedTraning={selectedTraning} setSelectedTraning={(evt)=>setSelectedTraning(evt)} traningData={traningData} setLessionClass={(evt) => {setLessionClass(evt);setSelectedTraning(evt)}} lessionClass={lessionClass} setProjectOpenClass={()=>setProjectOpenClass("")} projectData={projectData} projectList={projectList} />
        {traningData && traningData.length > 0 && (
          <div className="table">
            <ProjectHeader
              traningData={traningData}
              lessionClass={lessionClass}
              projectData={projectData}
              selectproject={selectproject}
              selectedTraning={selectedTraning}
              setLessionClass={(evt) => setLessionClass(evt)}
              setSelectedTraning={(evt)=>setSelectedTraning(evt)}
            />
            {/* {progressList.map((progress,index)=>(
            <UserRow projectData={projectData} progress={progress} lessionClass={lessionClass} />
          ))} */}
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;
import React from "react";
import InfoRow from "./info-rows/info-rows";

const TribeUsersInfo = ({setSelectedTraning,selectedCourse, selectedTraning, trainingList, usersProgressList, projectList, setSelectedProject, selectedProject}) => {
  return (
       
        <div className="table">         
          <InfoRow selectedCourse={selectedCourse} selectedTraning={selectedTraning} setSelectedTraning={(evt)=>setSelectedTraning(evt)} trainingList={trainingList} selectedProject={selectedProject} setSelectedProject={(evt)=>{setSelectedProject(evt)}} projectList={projectList} usersProgressList={usersProgressList}/>
        </div>
     
  );
};

export default TribeUsersInfo;
import React, { useEffect, useState } from "react";
import ProgressHeader from "./progress-header/progress-header";
import Projects from "./projects/projects";
import ProjectsName from "./projects/name";
const Progress = () => { 
  const [isProjectOpen, setIsProjectOpen] = useState(false)
  const setProjectOpenClass = (projectclass)=>{
    if(projectclass !== ""){
      setIsProjectOpen(true)
    }else{
      setIsProjectOpen(false)
    }
  }
  return (
    <div className="main-pro-page">
        <div className="commonheight"></div>
      <ProgressHeader />
      <div className="progess-page">
        
         <ProjectsName isProjectOpen={isProjectOpen} />

        {/* //Project 1 */}
        <Projects defaultClass="" setProjectOpenClass={(projectclass) =>setProjectOpenClass(projectclass)}/>
        <Projects defaultClass="" setProjectOpenClass={(projectclass) =>setProjectOpenClass(projectclass)}/>
        <Projects defaultClass="" setProjectOpenClass={(projectclass) =>setProjectOpenClass(projectclass)}/>
        <Projects defaultClass="" setProjectOpenClass={(projectclass) =>setProjectOpenClass(projectclass)}/>
      </div>
    </div>
  );
};

export default Progress;

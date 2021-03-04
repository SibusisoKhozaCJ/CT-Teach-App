import React, { useState } from "react";
import ProjColsp from "../../../assets/images/project-collpse.svg";
import NamRow from "./name-row";

const Projects = ({isProjectOpen}) => {
  return (
       
        <div className="table" id="results">         
          <NamRow isProjectOpen={isProjectOpen}/>
        </div>
     
  );
};

export default Projects;
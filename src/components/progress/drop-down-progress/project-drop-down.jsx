import React, { useEffect, useState } from "react";
import Arrowleft from "../../../assets/images/arrowleft.svg";
import Arrowright from "../../../assets/images/arrowright.svg";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

const SelectProjects = ({
  selectedProject,
  setSelectedProject,
  selectedCourse,
  projectList
}) => {
  const [disablePrevious, setDisablePrevious] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
  };

  useEffect(()=>{
    if(projectList.length > 0){
      const firstItem = projectList[0];
      const lastItem = projectList[projectList.length-1];
      if(firstItem.id === selectedProject){
        setDisablePrevious(true)
      }else{
        setDisablePrevious(false)
      }
      if(lastItem.id === selectedProject){
        setDisableNext(true)
      }else{
        setDisableNext(false)
      }
    }
  },[selectedProject])

  const setPreviousProject =()=>{
    const selectProjectIndx = projectList.findIndex(x=>x.id===selectedProject);
    const previousProject = projectList[selectProjectIndx-1];
    setSelectedProject(previousProject.id)
  }
  const setNextProject =()=>{
    const selectProjectIndx = projectList.findIndex(x=>x.id===selectedProject);
    const nextProject = projectList[selectProjectIndx+1];
    setSelectedProject(nextProject.id)
  }
  return (
    <>
      <div className="project-slect">
        <div className="select-header">
          <div className="slt-btn">
            <button className="btn-move-back" title="Move back to courses" onClick={()=>setSelectedProject("")}>{selectedCourse}</button>
          </div>
          <div className="projectslect prj1">
            <FormControl variant="filled">
              <Select
                labelId="slect-filled-label"
                id="demo-simple-select-filled"
                value={selectedProject}
                name="type"
                onChange={handleProjectChange}
              >
                {projectList &&
                  projectList.length > 0 &&
                  projectList.map((project, index) => (
                    <MenuItem key={"project"+index} value={project.id}>{project.id}<span className="seperator">|</span>{project.title}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
          <div className="nextpevselect ">
            <button onClick={()=>setPreviousProject()} disabled={disablePrevious} className={disablePrevious ? "nextslect btn-move-back btn-disabled" :"nextslect btn-move-back"}>
              <img src={Arrowleft} />
            </button>
            <button onClick={()=>setNextProject()} disabled={disableNext} className={disableNext ? "prevslect btn-move-back btn-disabled": "prevslect btn-move-back"}>
              <img src={Arrowright} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectProjects;

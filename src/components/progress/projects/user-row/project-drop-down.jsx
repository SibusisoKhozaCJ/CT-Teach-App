import React, { useState } from "react";
import ProjColsp from "../../../../assets/images/project-collpse.svg";
import Arrowleft from "../../../../assets/images/arrowleft.svg";
import Arrowright from "../../../../assets/images/arrowright.svg";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

const SelectProjects = ({traningData, selectedTraning,selectproject,setSelectedProject, setSelectedTraning, lessionClass, setLessionClass, projectList, setProjectOpenClass }) => {
  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value);
  };
  const handleTraningChange = (event) => {
    setSelectedTraning(event.target.value);
  };
  return (
    <>
    {lessionClass === "" && (
      <div className="project-slect">
      <div className="select-header">
        <div className="slt-btn">
          <button
            onClick={() => setProjectOpenClass("")
            }
          >
            <img src={ProjColsp} />
          </button>
        </div>
        <div className="projectslect">
          <FormControl variant="filled">
            <InputLabel id="slect-filled-label">
              Project
                      </InputLabel>
            <Select
              labelId="slect-filled-label"
              id="demo-simple-select-filled"
              value={selectproject}
              name="type"
              onChange={handleProjectChange}
            >
              {projectList.map((project,index)=>(
                <MenuItem value={project.id}>{project.title}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="nextpevselect">
          <button >
            <img src={Arrowleft} />
          </button>
          <button >
            <img src={Arrowright} />
          </button>
        </div>

      </div>
    </div>

    )}
    {lessionClass !== "" && (
    <div className="project-slect">
      <div className="select-header">
        <div className="slt-btn">
          <button
            onClick={() => setLessionClass("")}
          >
            <img src={ProjColsp} />
          </button>
        </div>
        <div className="projectslect">
          <FormControl variant="filled">
            <InputLabel id="slect-filled-label">
             Training 
                      </InputLabel>
            <Select
              labelId="slect-filled-label"
              id="demo-simple-select-filled"
              value={selectedTraning}
              name="type"
              onChange={handleTraningChange}
            >
              {traningData.map((training,index)=>(
                <MenuItem value={training.id}>{training.id}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="nextpevselect">
          <button >
            <img src={Arrowleft} />
          </button>
          <button >
            <img src={Arrowright} />
          </button>
        </div>

      </div>
    </div>
    )}

    </> 
  );
};

export default SelectProjects;
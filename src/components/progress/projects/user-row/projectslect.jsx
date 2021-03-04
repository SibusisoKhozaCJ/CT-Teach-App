import React, { useState } from "react";
import ProjColsp from "../../../../assets/images/project-collpse.svg";
import Arrowleft from "../../../../assets/images/arrowleft.svg";
import Arrowright from "../../../../assets/images/arrowright.svg";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

const SelectProjects = ({defaultClass}) => {
   const [projectClass, setProjectClass] = useState(defaultClass);
    const [selectproject, setSelectedProject] = useState("Project1");
    const handleChange = (event) => {
    setSelectedProject(event.target.value);
  };
  return (
   <div className="project-slect">
       <div className="select-header">
           <div className="slt-btn">
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
                        onChange={handleChange}
                      >
                        <MenuItem  value={"Project1"}>  Project1</MenuItem>
                        <MenuItem value={"Project2"}>  Project2</MenuItem>
                        <MenuItem  value={"Project3"}>  Project3</MenuItem>
                        <MenuItem value={"Project4"}>  Project4</MenuItem>
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
  );
};

export default SelectProjects;
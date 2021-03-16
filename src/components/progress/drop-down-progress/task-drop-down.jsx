import React, { useEffect, useState } from "react";
import Arrowleft from "../../../assets/images/arrowleft.svg";
import Arrowright from "../../../assets/images/arrowright.svg";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

const SelectTaskDropDown = ({ selectedTraning,setSelectedTraning, selectedProject, trainingList  }) => {
  const [traningList, setTraningList] = useState([])
  const handleTraningChange = (event) => {
    setSelectedTraning(event.target.value);
  };
  useEffect(()=>{
      if(selectedTraning !== ""){
        const tempChallenges = trainingList[selectedProject]
        if(tempChallenges){
            setTraningList(tempChallenges)
        }
      }

  },[selectedTraning])
  return (
    <>
      <div className="project-slect">
        <div className="select-header">
          <div className="slt-btn">
            <button>{selectedProject}</button>
          </div>

          <div className="projectslect prj1">
            <FormControl variant="filled">
              <Select
                labelId="slect-filled-label"
                id="demo-simple-select-filled"
                value={selectedTraning}
                name="type"
                onChange={handleTraningChange}
              >
                {traningList &&
                  traningList.length > 0 &&
                  traningList.map((traning, index) => (
                    <MenuItem key={"traning"+index} value={traning.id}>{traning.id + " | "+traning.title}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>

          <div className="nextpevselect ">
            <button className="nextslect">
              <img src={Arrowleft} />
            </button>
            <button className="prevslect">
              <img src={Arrowright} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectTaskDropDown;

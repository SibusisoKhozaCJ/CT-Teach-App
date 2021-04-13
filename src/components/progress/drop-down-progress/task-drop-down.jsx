import React, { useEffect, useState } from "react";
import Arrowleft from "../../../assets/images/arrowleft.svg";
import Arrowright from "../../../assets/images/arrowright.svg";
import ArrowUp from "../../../assets/images/uparrow.svg";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

const SelectTaskDropDown = ({ selectedTraning, setSelectedTraning, selectedProject, trainingList }) => {
  const [traningList, setTraningList] = useState([]);
  const [disablePrevious, setDisablePrevious] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const handleTraningChange = (event) => {
    setSelectedTraning(event.target.value);
  };
  useEffect(() => {
    if (selectedTraning !== "") {
      const tempChallenges = trainingList[selectedProject]
      if (tempChallenges) {
        setTraningList(tempChallenges)
      }
      if (trainingList) {
        const traningTaskList = trainingList[selectedProject]
        const firstItem = traningTaskList[0];
        const lastItem = traningTaskList[traningTaskList.length - 1];
        if (firstItem.id === selectedTraning) {
          setDisablePrevious(true)
        } else {
          setDisablePrevious(false)
        }
        if (lastItem.id === selectedTraning) {
          setDisableNext(true)
        } else {
          setDisableNext(false)
        }
      }
    }

  }, [selectedTraning])


  const setPreviousTask = () => {
    const selectTraningIndx = traningList.findIndex(x=>x.id===selectedTraning);
    const previousTraning = traningList[selectTraningIndx-1];
    setSelectedTraning(previousTraning.id)
  }
  const setNextTask = () => {
    const selectTraningIndx = traningList.findIndex(x=>x.id===selectedTraning);
    const nextTraning = traningList[selectTraningIndx+1];
    setSelectedTraning(nextTraning.id)
  }
  return (
    <>
      <div className="project-slect">
        <div className="select-header">
          <div className="slt-btn">
            <button className="btn-move-back" title="Move back to projects" onClick={() => setSelectedTraning("")}>{selectedProject}  <img src={ArrowUp} /></button>
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
                    <MenuItem key={"traning" + index} value={traning.id}>{traning.id}<span className="seperator">|</span>{traning.title}</MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>

          <div className="nextpevselect ">
            <button onClick={() => setPreviousTask()} disabled={disablePrevious} className={disablePrevious ? "nextslect btn-move-back btn-disabled" : "nextslect btn-move-back"}>
              <img src={Arrowleft} />
            </button>
            <button onClick={() => setNextTask()} disabled={disableNext} className={disableNext ? "prevslect btn-move-back btn-disabled" : "prevslect btn-move-back"}>
              <img src={Arrowright} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectTaskDropDown;

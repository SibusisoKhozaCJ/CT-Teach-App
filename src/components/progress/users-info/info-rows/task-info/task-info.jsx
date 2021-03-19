import React, { useEffect, useState } from "react";
import CrsArrow from "../../../../../assets/images/crossarow.svg";
import LinearProgress from "@material-ui/core/LinearProgress";
import TaskProgressBar from "./task-progress";
const TaskInfoRows = ({
  trainingList,
  selectedProject,
  setSelectedTraning,
  usersProgressList,
  selectedCourse
}) => {
  const [traningList, setTraningList] = useState([])
  useEffect(() => {
    if (trainingList) {
      setTraningList(trainingList[selectedProject]);
    }
  }, [selectedProject])
  return (
    <div className="theader project-header">
      {traningList &&
        traningList.length > 0 &&
        traningList.map((traning, index) => (
          <div key={"project"+index} onClick={()=> {setSelectedTraning(traning.id)}} className="table_header">
            <div className="crsarrow">
              <img title={traning.title} src={CrsArrow} />
            </div>
            {traning.id}
          </div>
        ))}
      <div className="table_header"></div>
      
      {usersProgressList &&
          usersProgressList.length > 0 &&
          usersProgressList.map((progress, index) => (
            <div class="table_row">
              <TaskProgressBar traningList={traningList} selectedCourse={selectedCourse} selectproject={selectedProject} progress={progress}/>
            </div>
          ))}
    </div>
  );
};
export default TaskInfoRows;

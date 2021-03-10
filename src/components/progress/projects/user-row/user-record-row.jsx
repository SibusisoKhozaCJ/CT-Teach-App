import React, { useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useState } from "react";
const UserRow = ({ progress, projectData, lessionClass }) => {
  const [totalProgress, setTotalProgress] = useState(0);
  const [checkpointList, setCheckpointList] = useState(0);
  useEffect(() => {
    const progressValue = progress.progressInfo && progress.progressInfo[projectData.name] && progress.progressInfo[projectData.name].progress ? progress.progressInfo[projectData.name].progress : 0;
    const chkList = progress.progressInfo && progress.progressInfo[projectData.name] && progress.progressInfo[projectData.name].checkpoints ? progress.progressInfo[projectData.name].checkpoints : [];
    let checjList = []
    const refinedList = chkList.map((check, index) => {
      if (check)
        checjList.push(check);
    })
    setTotalProgress(progressValue);
    setCheckpointList(checjList)
  }, [])
  return (
    <div className="table_row">
      {checkpointList && checkpointList.length > 0 && (
        checkpointList.map((tasks, index) => (
          <>
            <div className="table_small">
              <LinearProgress variant="determinate" value={tasks.progress} />
            </div>
            <div
              className={
                lessionClass === "lession"+index
                  ? "header-new-row "
                  : " header-new-row header-new-row-close"
              }
            >
              {tasks.challenges && tasks.challenges.length > 0 && (
                tasks.challenges.map((challenge,index)=>(
                  <div className={challenge ? "test-div blue" : "test-div"}></div>
                ))
              )}
            </div>
          </>
        )))}

      <div className="table_big table_small table-close-row">
        <LinearProgress variant="determinate" value={totalProgress} />
      </div>
    </div>
  );
};
export default UserRow;
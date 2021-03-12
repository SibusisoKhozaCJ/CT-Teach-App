import React, { useEffect } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useState } from "react";
const UserRow = ({ progress, selectedCourse, selectedTraning, selectproject, lessionClass }) => {
  const [totalProgress, setTotalProgress] = useState(0);
  const [taskList, setTaskList] = useState(0);
  const [challengesList, setChallengesList] = useState(0);
  useEffect(() => {
    if (selectedTraning === "") {
      if (progress && progress.progressInfo && progress.progressInfo[selectedCourse] && progress.progressInfo[selectedCourse][selectproject]) {
        const userProgress = progress.progressInfo[selectedCourse][selectproject];
        let taskCount = 0;
        let totalProgress = 0;
        let checjList = []
        Object.entries(userProgress).forEach(([keyT, valueT]) => {
          taskCount++
          totalProgress += valueT.progress;
          checjList.push(valueT);
        });
        setTotalProgress(totalProgress > 0 ? totalProgress / taskCount : 0);
        setTaskList(checjList)
      } else {
        setTotalProgress(0)
      }
    } else {
      if (progress.progressInfo[selectedCourse][selectproject][selectedTraning] && progress.progressInfo[selectedCourse][selectproject][selectedTraning].challenges) {
        const challenges = progress.progressInfo[selectedCourse][selectproject][selectedTraning].challenges;
        let tempChallengeList = [];
        for (var x = 0; x < challenges.length; x++) {
          const validators = challenges[x].validators;
          if (validators.length > 1) {
            const allTrue = validators.every(v => v === true);
            if (allTrue) {
              tempChallengeList.push(0)
            } else {
              const allFalse = validators.every(v => v === false);
              if (allFalse) {
                tempChallengeList.push(1)
              } else {
                tempChallengeList.push(2)
              }
            }
          } else {
            tempChallengeList.push(validators[0] ? 0 : 1)
          }
        }
        setChallengesList(tempChallengeList)
      }
    }

  }, [progress, selectedTraning])
  return (
    <div className="table_row">
      {selectedTraning === "" && (
        taskList && taskList.length > 0 && (
          taskList.map((tasks, index) => (
            <div className="table_small">
              <LinearProgress variant="determinate" value={tasks.progress} />
            </div>
          ))))}
      {selectedTraning !== "" && (
        <div
          className="header-new-row"
        >
          {challengesList && challengesList.length > 0 && (
            challengesList.map((challenge, index) => (
              <div className={challenge === 0 ? "test-div blue" : challenge === 1 ? "test-div" : "test-div yellow"}></div>
            ))
          )}
        </div>
      )}
      {selectedTraning === "" && (
        <div className="table_big table_small table-close-row">
          <LinearProgress variant="determinate" value={totalProgress} />
        </div>
      )}
    </div>
  );
};
export default UserRow;
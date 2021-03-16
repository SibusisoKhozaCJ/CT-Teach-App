import React, { useEffect, useState } from "react";
const ChallengeProgressBar = ({
  progress,
  selectedCourse,
  selectproject,
  selectedTraning,
}) => {
  const [challengesList, setChallengesList] = useState([]);
  useEffect(() => {
    if (
      progress.progressInfo[selectedCourse][selectproject][selectedTraning] &&
      progress.progressInfo[selectedCourse][selectproject][selectedTraning]
        .challenges
    ) {
      const challenges =
        progress.progressInfo[selectedCourse][selectproject][selectedTraning]
          .challenges;
      let tempChallengeList = [];
      for (var x = 0; x < challenges.length; x++) {
        const validators = challenges[x].validators;
        if (validators.length > 1) {
          const allTrue = validators.every((v) => v === true);
          if (allTrue) {
            tempChallengeList.push(0);
          } else {
            const allFalse = validators.every((v) => v === false);
            if (allFalse) {
              tempChallengeList.push(1);
            } else {
              tempChallengeList.push(2);
            }
          }
        } else {
          tempChallengeList.push(validators[0] ? 0 : 1);
        }
      }
      setChallengesList(tempChallengeList);
    }
  }, [selectedTraning]);

  return (
    <>
      {challengesList &&
        challengesList.length > 0 &&
        challengesList.map((challenge, index) => (
          <div key={"challenge" + index} class="table_small">
            <div class="table_cell">
              <div
                className={
                  challenge === 0
                    ? "test-div blue"
                    : challenge === 1
                    ? "test-div"
                    : "test-div yellow"
                }
              ></div>
            </div>
          </div>
        ))}
    </>
  );
};
export default ChallengeProgressBar;

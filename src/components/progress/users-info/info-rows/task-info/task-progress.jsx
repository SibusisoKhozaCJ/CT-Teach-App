import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
const TaskProgressBar = ({ progress, selectedCourse, selectproject, traningList }) => {
    const setTotalProgress = (traning) => {
        if (progress && progress.progressInfo && progress.progressInfo[selectedCourse] && progress.progressInfo[selectedCourse][selectproject]) {
            const userProgress = progress.progressInfo[selectedCourse][selectproject];
            if (userProgress[traning.id]) {
                return userProgress[traning.id].progress;
            } else {
                return 0
            }
        } else {
            return 0
        }
    }

    return (
<>
        { traningList && traningList.length > 0 && traningList.map((traning, index) => (
            <div className="table_small">
                <div key={"traning" + index} className="table_cell">
                    <LinearProgress variant="determinate" value={setTotalProgress(traning)} />
                </div>
            </div>
        ))}
        
</>
    );
};
export default TaskProgressBar;

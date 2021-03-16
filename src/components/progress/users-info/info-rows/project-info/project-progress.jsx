import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
const ProjectProgressBar = ({ progress, projectList,selectedCourse }) => {

    const setTotalProgress = (project) => {
        const selectproject = project.id;
        if (progress && progress.progressInfo && progress.progressInfo[selectedCourse] && progress.progressInfo[selectedCourse][selectproject]) {
            const userProgress = progress.progressInfo[selectedCourse][selectproject];
            let taskCount = 0;
            let totalProgress = 0;
            Object.entries(userProgress).forEach(([keyT, valueT]) => {
                taskCount++
                totalProgress += valueT.progress;
            });
            return (totalProgress > 0 ? totalProgress / taskCount : 0);
        } else {
            return 0
        }
    }


    return (
        <div class="table_small">
            {projectList.map((project, index) => (
                <div class="table_cell project-progress">
                    <LinearProgress variant="determinate" value={setTotalProgress(project)} />
                </div>
            ))}
        </div>

    );
};
export default ProjectProgressBar;

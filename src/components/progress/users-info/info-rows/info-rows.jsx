import React from "react";
import UserRecord from "./user-records/user-records";
import CrsArrow from "../../../../assets/images/crossarow.svg";
import LinearProgress from "@material-ui/core/LinearProgress";
import ProjectInfoRows from "./project-info/project-info";
import TaskInfoRows from "./task-info/task-info";
import ChallengeInfoRows from "./challenge-info/challenge-info";
const UserRow = ({
  selectedProject,
  usersProgressList,
  setSelectedProject,
  projectList,
  trainingList,
  setSelectedTraning,
  selectedTraning,
  selectedCourse
}) => {
  return (
    <div className="table_row">
      <div className="progress-name ">
        <div class="table projecttable">
          <div class="theader name-header">
            <div class="table_header name-head">
              <div className="crsarrow">
                <img src={CrsArrow} />
              </div>
              FIRST{" "}
              <svg
                width="15"
                height="10"
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4609 0.464844L18.4346 3.61426L9.25 12.4473L0.753906 3.40918L4.00586 0.494141L9.42578 6.4707L15.4609 0.464844Z"
                  fill="#A6A6A6"
                />
              </svg>
            </div>
            <div class="table_header name-head">
              <div className="crsarrow">
                <img src={CrsArrow} />
              </div>
              LAST{" "}
              <svg
                width="16"
                height="10"
                viewBox="0 0 19 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4609 0.464844L18.4346 3.61426L9.25 12.4473L0.753906 3.40918L4.00586 0.494141L9.42578 6.4707L15.4609 0.464844Z"
                  fill="#A6A6A6"
                />
              </svg>
            </div>
            {usersProgressList &&
              usersProgressList.length > 0 &&
              usersProgressList.map((progress, index) => (
                <UserRecord progress={progress} />
              ))}
          </div>

          {/* Projects Header */}
          {selectedProject === "" && (
            <ProjectInfoRows selectedCourse={selectedCourse} usersProgressList={usersProgressList} setSelectedProject={(evt)=>{setSelectedProject(evt)}} projectList={projectList}/>
          )}
          
          {/* Projects Header Ends*/}
          {selectedProject !== "" && selectedTraning === "" && (
          <TaskInfoRows selectedCourse={selectedCourse} usersProgressList={usersProgressList} setSelectedTraning={(evt)=>setSelectedTraning(evt)} trainingList={trainingList} selectedProject={selectedProject}/>
          )}
          {/* Task Header */}

          {/* Challenege Header */}
          {selectedTraning && selectedTraning !== "" && (
            <ChallengeInfoRows selectedProject={selectedProject} selectedTraning={selectedTraning} trainingList={trainingList}/>
          )}
          
          {/* Challenege Header Ends */}

        </div>
      </div>
    </div>
  );
};
export default UserRow;

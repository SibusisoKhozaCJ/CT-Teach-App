import React, { useEffect, useState } from "react";
import CrsArrow from "../../../../assets/images/crossarow.svg";
import Training from "../../training/training"
const ProjectHeader = ({ progress, projectData, lessionClass, setLessionClass }) => {
  const [checkpointList, setCheckpointList] = useState(0);
  useEffect(() => {
    const chkList = progress.progressInfo && progress.progressInfo[projectData.name] && progress.progressInfo[projectData.name].checkpoints ? progress.progressInfo[projectData.name].checkpoints : [];
    let checjList = []
    const refinedList = chkList.map((check, index) => {
      if (check)
        checjList.push(check);
    })
    setCheckpointList(checjList)
  }, [])
  return (
    <>
    <div className="theader">
      {/* Lession Checks(Task) */}
      {checkpointList && checkpointList.length > 0 && (
        checkpointList.map((tasks, index) => (
          <>
            <div className="table_header">
              {"T" + index}
              <div
                className="crsarrow"
                onClick={() =>
                  lessionClass !== "lession" + index
                    ? setLessionClass("lession" + index)
                    : setLessionClass("")
                }
              >
                <img src={CrsArrow} />
              </div>
            </div>
            {/* <div
              className={
                lessionClass === "lession" + index
                  ? "header-table header-table-close"
                  : "header-table header-table-close"
              }
            >
              {tasks.challenges && tasks.challenges.length > 0 && (
                tasks.challenges.map((challenge,index)=>(
                    <div className="table_header">{index+1}</div>
                ))
              )}
            </div> */}
          </>
        ))
      )}
      {/* Lession Checks(Task) End */}
      <div className="table_header"></div>

     
    </div>

   <Training />
     </>
  );
};
export default ProjectHeader;

import React, { useEffect, useState } from "react";
import CrsArrow from "../../../../../assets/images/crossarow.svg";
import ChallengeProgressBar from "./challenge-progress";
const ChallengeInfoRows = ({selectedTraning, trainingList,selectedProject,usersProgressList, selectedCourse}) => {
  const [challengeList, setChallengeList] = useState([])
  useEffect(()=>{
    const traningList = trainingList[selectedProject];
    const tempTraning =  traningList.find(x=>x.id === selectedTraning);
    setChallengeList(tempTraning.challenges)
  },[selectedTraning])
  return (
    <div className="theader project-header">
      {challengeList.map((challange,index)=>(
        <div className="table_header">
        <div className="crsarrow">
           <img src={CrsArrow} className="tbscimg"/>
        </div>
        {index+1}
      </div>
      ))}
      
      <div className="table_header"></div>
      {usersProgressList &&
          usersProgressList.length > 0 &&
          usersProgressList.map((progress, index) => (
            <div class="table_row">
                <ChallengeProgressBar selectedTraning={selectedTraning} selectedCourse={selectedCourse} selectproject={selectedProject} progress={progress}/>
            </div>
          ))}
    </div>
  );
};
export default ChallengeInfoRows;

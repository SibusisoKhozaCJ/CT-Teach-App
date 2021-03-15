import React, { useEffect, useState } from "react";
import CrsArrow from "../../../../../assets/images/crossarow.svg";
import LinearProgress from "@material-ui/core/LinearProgress";
const ChallengeInfoRows = ({selectedTraning, trainingList,selectedProject}) => {
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
        </div>
        {index+1}
      </div>
      ))}
      
      <div className="table_header"></div>
      <div class="table_row">
              <div class="table_small">
                <div class="table_cell"><div className="test-div"></div></div>
              </div>
              <div class="table_small">
                <div class="table_cell">  <div className="test-div yellow"></div></div>
              </div>
              <div class="table_small">
                <div class="table_cell">  <div className="test-div yellow"></div></div>
              </div>
              <div class="table_small">
                <div class="table_cell">  <div className="test-div yellow"></div></div>
              </div>
              <div class="table_small">
                <div class="table_cell"><div className="test-div blue"></div></div>
              </div>
              <div class="table_small">
                <div class="table_cell"><div className="test-div blue"></div></div>
              </div>
              <div class="table_small">
                <div class="table_cell"><div className="test-div blue"></div></div>
              </div>
              <div class="table_small">
                <div class="table_cell"><div className="test-div blue"></div></div>
              </div>
              <div class="table_small">
                <div class="table_cell"><div className="test-div"></div></div>
              </div>
              <div class="table_small">
                <div class="table_cell"><div className="test-div"></div></div>
              </div>
            </div>
           
    </div>
  );
};
export default ChallengeInfoRows;

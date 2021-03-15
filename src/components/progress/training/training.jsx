import React, { useEffect, useState } from "react";
const Training = ({ selectedTraning,traningData,selectproject }) => {
  const [challengesData, setChanllengesData] = useState([]);
  useEffect(()=>{
    const getChallenges = traningData.find(x=>x.id === selectedTraning);
    if(getChallenges){
      setChanllengesData(getChallenges.challenges)
    }

  },[selectedTraning])
  return (
    <div className="table_row">
      <div
        className="header-new-row training-head"
      >
        {challengesData && challengesData.length > 0 && (
          challengesData.map((challnge,index)=>(
            <div className="">{index+1}</div>
          ))
        )}
        {/* <div className="test-div"></div>
        <div className="test-div yellow"></div>
        <div className="test-div yellow"></div>
        <div className="test-div blue"></div>
        <div className="test-div blue"></div>
        <div className="test-div blue"></div>
        <div className="test-div blue"></div>
        <div className="test-div"></div>
        <div className="test-div"></div>
        <div className="test-div"></div> */}
      </div>
    </div>
  );
};
 export default Training;
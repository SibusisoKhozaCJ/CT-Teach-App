import React from "react";
import InfoRow from "./info-rows/info-rows";

const TribeUsersInfo = ({progressList, isProjectOpen}) => {
  return (
       
        <div className="table">         
          <InfoRow progressList={progressList} isProjectOpen={isProjectOpen}/>
        </div>
     
  );
};

export default TribeUsersInfo;
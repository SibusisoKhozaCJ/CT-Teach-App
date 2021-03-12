import React from "react";
import InfoRow from "./info-rows/info-rows";

const TribeUsersInfo = ({isProjectOpen, usersProgressList}) => {
  return (
       
        <div className="table">         
          <InfoRow isProjectOpen={isProjectOpen} usersProgressList={usersProgressList}/>
        </div>
     
  );
};

export default TribeUsersInfo;
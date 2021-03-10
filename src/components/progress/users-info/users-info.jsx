import React from "react";
import InfoRow from "./info-rows/info-rows";

const TribeUsersInfo = ({isProjectOpen}) => {
  return (
       
        <div className="table">         
          <InfoRow isProjectOpen={isProjectOpen}/>
        </div>
     
  );
};

export default TribeUsersInfo;
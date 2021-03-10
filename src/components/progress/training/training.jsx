import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
const Training = ({ lessionClass }) => {
  return (
    <div className="table_row">
      <div className="table_small">
        <LinearProgress variant="determinate" value={100} />
      </div>
      <div
        className={
          lessionClass === "lession1"
            ? "header-new-row "
            : " header-new-row header-new-row-close1"
        }
      >
        <div className="test-div"></div>
        <div className="test-div yellow"></div>
        <div className="test-div yellow"></div>
        <div className="test-div blue"></div>
        <div className="test-div blue"></div>
        <div className="test-div blue"></div>
        <div className="test-div blue"></div>
        <div className="test-div"></div>
        <div className="test-div"></div>
        <div className="test-div"></div>
      </div>
    </div>
  );
};
 export default Training;
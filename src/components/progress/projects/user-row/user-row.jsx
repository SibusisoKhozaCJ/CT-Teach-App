import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
const UserRow = ({ lessionClass }) => {
  return (
    <div className="table_row">
      <div className="table_small">
        <LinearProgress variant="determinate" value={100} />
      </div>
      <div
        className={
          lessionClass === "lession1"
            ? "header-new-row "
            : " header-new-row header-new-row-close"
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
      <div className="table_small">
        <LinearProgress variant="determinate" value={100} />
      </div>
      <div
        className={
          lessionClass === "lession2"
            ? "header-new-row "
            : " header-new-row header-new-row-close"
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
      <div className="table_small">
        <LinearProgress variant="determinate" value={100} />
      </div>
      <div
        className={
          lessionClass === "lession3"
            ? "header-new-row "
            : " header-new-row header-new-row-close"
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
      <div className="table_small">
        <LinearProgress variant="determinate" value={100} />
      </div>
      <div
        className={
          lessionClass === "lession4"
            ? "header-new-row "
            : " header-new-row header-new-row-close"
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
      <div className="table_small">
        <LinearProgress variant="determinate" value={100} />
      </div>
      <div
        className={
          lessionClass === "lession5"
            ? "header-new-row "
            : " header-new-row header-new-row-close"
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
      <div className="table_big table_small">
        <LinearProgress variant="determinate" value={50} />
      </div>
    </div>
  );
};
 export default UserRow;
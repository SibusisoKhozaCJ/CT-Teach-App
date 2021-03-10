import React, { useEffect, useState } from "react";
import CrsArrow from "../../../../assets/images/crossarow.svg";
import Training from "../../training/training"
const ProjectHeader = ({ traningData,selectproject, lessionClass, selectedTraning, setLessionClass, setSelectedTraning }) => {
  return (
    <>
    {selectedTraning === "" && (
      <div className="theader">
      {traningData && traningData.length > 0 && (
        traningData.map((traning, index) => (
          <>
            <div className="table_header">
              {traning.id}
              <div
                className="crsarrow"
                onClick={() => {
                  lessionClass !== "lession" + index
                    ? setLessionClass("lession" + index)
                    : setLessionClass("") ; setSelectedTraning(traning.id)}
                }
              >
                <img src={CrsArrow} />
              </div>
            </div>
            
          </>
        ))
      )}
      <div className="table_header"></div>
    </div>
    )}
    {selectedTraning !== "" && (
     <Training selectproject={selectproject} traningData={traningData} selectedTraning={selectedTraning}  />
    )}
     </>
  );
};
export default ProjectHeader;

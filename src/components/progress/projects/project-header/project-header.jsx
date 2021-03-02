import React, { useState } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import CrsArrow from "../../../../assets/images/crossarow.svg";
const ProjectHeader = ({ lessionClass, setLessionClass }) => {
  return (
    <div className="theader">
      <div className="table_header">
        T0
        <div
          className="crsarrow"
          onClick={() =>
            lessionClass !== "lession1"
              ? setLessionClass("lession1")
              : setLessionClass("")
          }
        >
          <img src={CrsArrow} />
        </div>
      </div>
      <div
        className={
          lessionClass === "lession1"
            ? "header-table"
            : "header-table header-table-close"
        }
      >
        <div className="table_header">1</div>
        <div className="table_header">2</div>
        <div className="table_header">3</div>
        <div className="table_header">4</div>
        <div className="table_header">5</div>
        <div className="table_header">6</div>
        <div className="table_header">7</div>
        <div className="table_header">8</div>
        <div className="table_header">9</div>
        <div className="table_header">10</div>
      </div>
      <div className="table_header">
        T1
        <div
          className="crsarrow"
          onClick={() =>
            lessionClass !== "lession2"
              ? setLessionClass("lession2")
              : setLessionClass("")
          }
        >
          <img src={CrsArrow} />
        </div>
      </div>
      <div
        className={
          lessionClass === "lession2"
            ? "header-table"
            : "header-table header-table-close"
        }
      >
        <div className="table_header">1</div>
        <div className="table_header">2</div>
        <div className="table_header">3</div>
        <div className="table_header">4</div>
        <div className="table_header">5</div>
        <div className="table_header">6</div>
        <div className="table_header">7</div>
        <div className="table_header">8</div>
        <div className="table_header">9</div>
        <div className="table_header">10</div>
      </div>
      <div className="table_header">
        T2
        <div
          className="crsarrow"
          onClick={() =>
            lessionClass !== "lession3"
              ? setLessionClass("lession3")
              : setLessionClass("")
          }
        >
          <img src={CrsArrow} />
        </div>
      </div>
      <div
        className={
          lessionClass === "lession3"
            ? "header-table"
            : "header-table header-table-close"
        }
      >
        <div className="table_header">1</div>
        <div className="table_header">2</div>
        <div className="table_header">3</div>
        <div className="table_header">4</div>
        <div className="table_header">5</div>
        <div className="table_header">6</div>
        <div className="table_header">7</div>
        <div className="table_header">8</div>
        <div className="table_header">9</div>
        <div className="table_header">10</div>
      </div>
      <div className="table_header">
        T3
        <div
          className="crsarrow"
          onClick={() =>
            lessionClass !== "lession4"
              ? setLessionClass("lession4")
              : setLessionClass("")
          }
        >
          <img src={CrsArrow} />
        </div>
      </div>
      <div
        className={
          lessionClass === "lession4"
            ? "header-table "
            : "header-table header-table-close"
        }
      >
        <div className="table_header">1</div>
        <div className="table_header">2</div>
        <div className="table_header">3</div>
        <div className="table_header">4</div>
        <div className="table_header">5</div>
        <div className="table_header">6</div>
        <div className="table_header">7</div>
        <div className="table_header">8</div>
        <div className="table_header">9</div>
        <div className="table_header">10</div>
      </div>
      <div
        className="table_header"
        onClick={() =>
          lessionClass !== "lession5"
            ? setLessionClass("lession5")
            : setLessionClass("")
        }
      >
        T4
        <div className="crsarrow">
          <img src={CrsArrow} />
        </div>
      </div>
      <div
        className={
          lessionClass !== "lession5"
            ? "header-table  header-table-close"
            : "header-table "
        }
      >
        <div className="table_header">1</div>
        <div className="table_header">2</div>
        <div className="table_header">3</div>
        <div className="table_header">4</div>
        <div className="table_header">5</div>
        <div className="table_header">6</div>
        <div className="table_header">7</div>
        <div className="table_header">8</div>
        <div className="table_header">9</div>
        <div className="table_header">10</div>
      </div>
      <div className="table_header"></div>
    </div>
  );
};
export default ProjectHeader;

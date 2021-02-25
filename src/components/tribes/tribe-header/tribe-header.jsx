import React, { useEffect } from "react";
import Tribesicon from "../../../assets/images/tribes.svg";
import Gridicon from "../../../assets/images/tgrid.svg";
import Colspicon from "../../../assets/images/colsp.svg"; 
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const TribeHeader = ({ handleCollpaseClick }) => {
  return (
    <div className="tribe-menu">
      <div className="header-left-menu">
        <div className="head-tribe">
          <div className="head-trb-main">
            <img src={Tribesicon} alt="" />
            <span>TRIBES</span>
            <span className="head-tr-icon">
              <svg
                width="23"
                height="16"
                viewBox="0 0 23 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6895 0.806641L22.3569 4.69092L11.0293 15.585L0.550781 4.43799L4.56152 0.842773L11.2461 8.21387L18.6895 0.806641Z"
                  fill="#A6A6A6"
                />
              </svg>
            </span>
            <span className="tribe-grid">
              <img src={Gridicon} alt="" />
            </span>
          </div>
          <div className="tribe-colsp">
            <span
              onClick={() => {
                handleCollpaseClick();
              }}
            >
              <img src={Colspicon} alt="" />
            </span>
          </div>
        </div>
        <div className="head-progess"></div>
      </div>
      <div className="header-right-menu">
        <div className="head-add"></div>
        <div className="head-collaspe"></div>
      </div>
    </div>
  );
};

export default TribeHeader;

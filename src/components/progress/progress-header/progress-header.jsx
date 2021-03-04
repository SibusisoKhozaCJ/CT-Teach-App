import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Gridicon from "../../../assets/images/tgrid.svg";
import Colspicon from "../../../assets/images/prnext.svg";
import Compiocn from "../../../assets/images/proheadicon1.svg";
import Moveicon from "../../../assets/images/pmove.svg";
import Removeicon from "../../../assets/images/premove.svg";
import Tribeicon from "../../../assets/images/tribes.svg";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

 const handleChange = (event) => {
  
    
  };
const ProgressHeader = ({ handleCollpaseClick }) => {
  return (
    <div className="tribe-menu">     
      <div className="header-left-menu">
        <div className="head-tribe">
          <div className="head-trb-main">
            <div className="d-flex pro-head">
            <img src={Tribeicon} alt="" />
             
                    <FormControl variant="filled">
                      <InputLabel id="slect-filled-label">
                        SELECT TRIBE
                      </InputLabel>
                      <Select
                        labelId="slect-filled-label"
                        id="demo-simple-select-filled"
                        
                        name="type"
                        onChange={handleChange}
                      >
                        <MenuItem >tribe</MenuItem>
                        <MenuItem>tribe1</MenuItem>
                        <MenuItem >tribe2</MenuItem>
                        <MenuItem>tribe3</MenuItem>
                      </Select>
                    </FormControl>
                 </div>
          
            <span className="tribe-grid">
              <img src={Compiocn} alt="" />
            </span>
            <div className="headPicon">
              <span className="tribe-grid">
              <img src={Moveicon} alt="" />              
            </span>
            <p>MOVE</p>
            </div>
            <div  className="headPicon">
              <span className="tribe-grid">
              <img src={Removeicon} alt="" />
            </span>
            <p>REMOVE</p>
            </div>
             <div className="tribe-colsp">           
            <span>
              <img src={Colspicon} alt="" />
            </span>
             
          </div>
          </div>
         
        </div>
        
      </div>
      <div className="header-right-menu">
        <div className="head-add"></div>
        <div className="head-collaspe"></div>
      </div>
    </div>
  );
};

export default ProgressHeader;

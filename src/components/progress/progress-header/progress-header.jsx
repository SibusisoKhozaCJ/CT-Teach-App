import React, { useEffect } from "react";
import Compiocn from "../../../assets/images/proheadicon1.svg";
import Tribeicon from "../../../assets/images/tribes.svg";
import Filter from "../../../assets/images/filter.svg";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";


const ProgressHeader = ({ tribesList, setSelectedTribe, selectedTribe }) => {
  const handleChange = (event) => {
    setSelectedTribe(event.target.value)
  };
  return (
    <div className="tribe-menu">
      <div className="header-left-menu">
        <div className="head-tribe">
          <div className="head-trb-main">
            <div className="d-flex pro-head">
              <img src={Tribeicon} alt="" />
              <FormControl variant="filled">
                {selectedTribe === "" && (<InputLabel id="slect-filled-label">
                  SELECT TRIBE
                      </InputLabel>)}
                <Select
                  labelId="slect-filled-label"
                  id="demo-simple-select-filled"
                  value={selectedTribe}
                  name="type"
                  onChange={handleChange}
                >
                  {tribesList && tribesList.length > 0 && (
                    tribesList.map((tribe, index) => (
                      <MenuItem value={tribe.code}>{tribe.name}</MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
            </div>

            <span className="tribe-grid">
              <img src={Compiocn} alt="" />
            </span>
            <div className="headPicon">
              <span className="tribe-grid">
                <img src={Filter} alt="" />
              </span>
        
            </div>
          </div>

        </div>

      </div>
   
    </div>
  );
};

export default ProgressHeader;

import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { HeaderProfileStyles } from "../Profile.styles";
import {Grid} from "@material-ui/core";
import EditIcon1 from "../../../../assets/icons/tribe/edit-icon.svg";

const TribeHeader = () => {
  return (
    <div className="tribe-profile">
      
         <Grid md={12} xs={12} >
             <div className="tribe-header">
                 <h1>
                     INNOVATE NOW
                 </h1>
                <div className="edit-icon">
                    <img alt="edit-icon" src={EditIcon1} />
                </div>
             </div>
         </Grid>
      </div>
  );
};

export default withStyles(HeaderProfileStyles)(TribeHeader);

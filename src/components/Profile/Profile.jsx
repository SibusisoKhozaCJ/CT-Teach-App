import React from 'react';
import Header from "./Header/Header";
import {withStyles} from "@material-ui/core/styles";
import {ProfileStyles} from "./Profile.styles";
import EditPublicInfo from "./Forms/EditPublicInfo/EditPublicInfo";
import {Grid} from "@material-ui/core";

const Profile = (props) => {
  const {classes} = props;

  return (
    <div className={classes.root}>
      <Header />
      <Grid container>
        <EditPublicInfo />
      </Grid>
    </div>
  );
};

export default withStyles(ProfileStyles)(Profile);

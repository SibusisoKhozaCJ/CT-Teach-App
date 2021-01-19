import React from 'react';
import Header from "./Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import {ProfileStyles} from "./Profile.styles";
import EditPublicInfo from "./Forms/EditPublicInfo/EditPublicInfo";
import {Grid} from "@material-ui/core";
import EditPrivateInfo from "./Forms/EditPrivateInfo/EditPrivateInfo";

const useStylesProfile = makeStyles(ProfileStyles);

const Profile = () => {
  const classesProfile = useStylesProfile();

  return (
    <div className={classesProfile.root}>
      <Header />
      <Grid container>
        <EditPublicInfo />
        <EditPrivateInfo />
      </Grid>
    </div>
  );
};

export default Profile;

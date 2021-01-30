import React from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Header from "./Header/Header";
import EditPublicInfo from "./Forms/EditPublicInfo/EditPublicInfo";
import EditPrivateInfo from "./Forms/EditPrivateInfo/EditPrivateInfo";
import Loading from "../../shared/components/loader/Loading";

import { ProfileStyles } from "./Profile.styles";

const useStylesProfile = makeStyles(ProfileStyles);

const Profile = () => {
  const classesProfile = useStylesProfile();
  const {loading, isCurrentUser: isRenderForm} = useSelector((state) => state.user);

  if (loading) {
    return (
      <div className="loader">
        <Loading/>
      </div>
    );
  }

  return (
    <div className={classesProfile.root}>
      <div className="commonheightProfile"/>
      <Header/>
      <Grid container>
        <EditPublicInfo/>
        {isRenderForm && <EditPrivateInfo/>}
      </Grid>
    </div>
  );
};

export default Profile;

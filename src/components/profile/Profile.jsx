import React from 'react';
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import Header from "./header/Header";
import EditPublicInfo from "./forms/edit-public-info/EditPublicInfo";
import EditPrivateInfo from "./forms/edit-private-info/EditPrivateInfo";
import Loading from "../../shared/components/loader/Loading";


const Profile = () => {
  const {loading, isCurrentUser: isRenderForm} = useSelector((state) => state.user);

  if (loading) {
    return (
      <div className="loader">
        <Loading/>
      </div>
    );
  }

  return (
    <div className="profileStylesRoot">
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

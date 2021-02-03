import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import Header from "./header/Header";
import EditPublicInfo from "./forms/edit-public-info/EditPublicInfo";
import EditPrivateInfo from "./forms/edit-private-info/EditPrivateInfo";
import Loading from "../../shared/components/loader/Loading";
import { useParams } from 'react-router-dom';
import { isCurrentUser, saveUser } from '../../redux/actions/user-actions';


const Profile = () => {
  const { id } = useParams();
  const { loading, userId, isCurrentUser: isRenderForm } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(isCurrentUser(userId, id));
  }, [dispatch, loading, userId, id]);

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

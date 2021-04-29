import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import Header from "./header/Header";
import EditPublicInfo from "./forms/edit-public-info/EditPublicInfo";
import EditPrivateInfo from "./forms/edit-private-info/EditPrivateInfo";
import Loading from "../../shared/components/loader/Loading";
import { useParams } from 'react-router-dom';
import { isCurrentUser, saveUser } from '../../redux/actions/user-actions';
import TabPanels from './tabs/TabPanels';
import AddFriend from "../../assets/icons/profile-icon/userIcon.png"
import Message from "../../assets/icons/profile-icon/messageIcon.png"
import Divider from '@material-ui/core/Divider';

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
        <Loading />
      </div>
    );
  }

  return (
    <div className="profileStylesRoot">
      <div className="commonheightProfile" />
      <Header />
      <Grid container className="ProfileGrid">
        <TabPanels isRenderForm={isRenderForm} />
      
        {/* <EditPublicInfo/>
        {isRenderForm && <EditPrivateInfo/>} */}
        {/* <div className="borderLine"></div>
       
       <div className="borderLine"></div>
       <Button
        variant="contained"
        color="secondary"
        className="MessageBtn"
        startIcon={<img src={Message} />}
      >
        Say Hi
      </Button> */}
      </Grid>
    </div>
  );
};

export default Profile;

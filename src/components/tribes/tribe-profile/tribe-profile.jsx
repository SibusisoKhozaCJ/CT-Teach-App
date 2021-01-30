import React, {useEffect} from 'react';
import Header from "./Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import {ProfileStyles} from "./Profile.styles";
import EditPublicInfo from "./Forms/EditPublicInfo/EditPublicInfo";
import {Grid} from "@material-ui/core";
import EditPrivateInfo from "./Forms/EditPrivateInfo/EditPrivateInfo";
import Loading from "../../../shared/components/loader/Loading";
import {useDispatch, useSelector} from "react-redux";
import {isCurrentUser, saveUser} from "../../../redux/actions/user-actions";
import {useParams} from "react-router-dom";

const useStylesProfile = makeStyles(ProfileStyles);

const TribeProfile = () => {
  const { id } = useParams();
  const classesProfile = useStylesProfile();
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
    <div className={classesProfile.root}>
      <div className="commonheight" />
      <Header />
      <Grid container>
        <EditPublicInfo />
        <EditPrivateInfo />
      </Grid>
    </div>
  );
};

export default TribeProfile;
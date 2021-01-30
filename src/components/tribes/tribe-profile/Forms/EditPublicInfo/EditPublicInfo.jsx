import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {FormProfileStyles} from "../../Profile.styles";
import {tribeFormPublicControlsProfilePage} from "../../../../../shared/lib/forms/tribeProfileFormControls";
import EditFormProfile from "../EditFormProfile";
import {publicFormProfile} from "../../../../../shared/lib/forms/validation";
import {
  finishEditPrivateUserInfo,
  finishEditPublicUserInfo,
  startEditPublicUserInfo
} from "../../../../../redux/actions/user-actions";

const useStyles = makeStyles(FormProfileStyles);

const EditPublicInfo = () => {
  const classes = useStyles({borderColor: '#43D4DD', paddingTop: 23, background: 'rgba(240, 238, 238, 0.5)'});
  const {editPublicUserInfo, user, isCurrentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const settingsForm = {
    formControls: tribeFormPublicControlsProfilePage,
    defaultValues: {
      tribe: user.userName || '',
      points: user.points || '',
      joined: user.joined || '',
      aboutMe: user.aboutMe || '',
      country: user.country || '',
      question: user.question || '',
    },
    validateResolver: publicFormProfile,
    isEditForm: editPublicUserInfo,
    startEdit: () => {
      dispatch(startEditPublicUserInfo());
      dispatch(finishEditPrivateUserInfo())
    },
    finishEdit: finishEditPublicUserInfo,
    classes
  }

  return (
    <EditFormProfile settingsForm={settingsForm} isCurrentUser={true} />
  );
};

export default EditPublicInfo;

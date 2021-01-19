import React, {useCallback} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {FormProfileStyles} from "../../Profile.styles";
import {formPublicControlsProfilePage} from "../../../../shared/lib/forms/formControls";
import EditFormProfile from "../EditFormProfile";
import {publicFormProfile} from "../../../../shared/lib/forms/validation";
import {
  finishEditPrivateUserInfo,
  finishEditPublicUserInfo,
  startEditPublicUserInfo
} from "../../../../redux/actions/user-actions";

const useStyles = makeStyles(FormProfileStyles);

const EditPublicInfo = () => {
  const classes = useStyles({borderColor: '#43D4DD', paddingTop: 23});
  const {editPublicUserInfo, user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const settingsForm = {
    formControls: formPublicControlsProfilePage,
    defaultValues: {
      userName: user.userName || '',
      points: user.points || '',
      joined: user.joined || '',
      aboutMe: user.aboutMe || '',
      country: user.country || '',
      question: user.question || '',
    },
    validateResolver: publicFormProfile,
    isEditForm: editPublicUserInfo,
    finishEdit: finishEditPublicUserInfo,
    classes
  }

  const handleStartEditForm = useCallback(() => {
    dispatch(startEditPublicUserInfo());
    dispatch(finishEditPrivateUserInfo())
  }, [dispatch])

  return (
    <EditFormProfile settingsForm={settingsForm} handleStartEditForm={handleStartEditForm} />
  );
};

export default EditPublicInfo;

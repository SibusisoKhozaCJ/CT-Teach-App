import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {formPublicControlsProfilePage} from "../../../../shared/lib/forms/formControls";
import EditFormProfile from "../EditFormProfile";
import {publicFormProfile} from "../../../../shared/lib/forms/validation";
import {
  finishEditPrivateUserInfo,
  finishEditPublicUserInfo,
  startEditPublicUserInfo
} from "../../../../redux/actions/user-actions";


const EditPublicInfo = () => {
  const {editPublicUserInfo, user, isCurrentUser} = useSelector(state => state.user);
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
    startEdit: () => {
      dispatch(startEditPublicUserInfo());
      dispatch(finishEditPrivateUserInfo())
    },
    finishEdit: finishEditPublicUserInfo,
    classesWrapper: { border: '5px solid #43D4DD'},
    classesForm: { background: 'rgba(240, 238, 238, 0.5)', paddingTop: 23},
  }

  return (
    <EditFormProfile settingsForm={settingsForm} isCurrentUser={isCurrentUser} />
  );
};

export default EditPublicInfo;

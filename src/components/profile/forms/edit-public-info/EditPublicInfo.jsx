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
import useMediaQuery from "@material-ui/core/useMediaQuery";


const EditPublicInfo = () => {
  const {editPublicUserInfo, user, isCurrentUser} = useSelector(state => state.user);
  const isDesktopQuery = useMediaQuery("(min-width:1275px)");
  const isMediumScreen = useMediaQuery("(min-width:601px)");
  const dispatch = useDispatch();
  const settingsForm = {
    formControls: formPublicControlsProfilePage,
    defaultValues: {
      ME: user.userName || '',
      atRate: user.userName || '',
      Date: user.joined || '',
      Bio: user.aboutMe || '',
      Code: user.code || '',
      Country: user.country || '',
      School: user.userName || '',
      twitter: user.joined || '',
      Tiktok: user.aboutMe || '',
      instagram: user.code || '',
      Discord: user.country || '',
    },
    validateResolver: publicFormProfile,
    isEditForm: editPublicUserInfo,
    startEdit: () => {
      dispatch(startEditPublicUserInfo());
      dispatch(finishEditPrivateUserInfo())
    },
    finishEdit: finishEditPublicUserInfo,
    classesWrapper: { border: '5px solid #43D4DD', display: 'inline-block', width: '100%',margin: isDesktopQuery ?'0 0px': '0 0px'},
    classesForm: { background: isMediumScreen ?'rgba(240, 238, 238, 0.5)' : 'transparent', paddingTop: 23},
  }

  return (
    <EditFormProfile settingsForm={settingsForm} isCurrentUser={isCurrentUser} />
  );
};

export default EditPublicInfo;

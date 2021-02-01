import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {FormProfileStyles} from "../../Profile.styles";

import {
  finishEditPrivateUserInfo,
  finishEditPublicUserInfo,
  startEditPrivateUserInfo,
} from "../../../../../redux/actions/user-actions";
import {privateFormProfile} from "../../../../../shared/lib/forms/validation";
import {tribeFormPrivateControlsProfilePage} from "../../../../../shared/lib/forms/tribeProfileFormControls";
import EditFormProfile from "../edit-tribe-form";

const useStyles = makeStyles(FormProfileStyles);

const EditPublicInfo = ({tribeData, tribeOwner}) => {
  const classes = useStyles({borderColor: '#D50073',    paddingTop: 0, background: 'rgba(240, 238, 238, 1)'});
  const {editPrivateUserInfo, user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const settingsForm = {
    formControls: tribeFormPrivateControlsProfilePage,
    defaultValues: {
      joinCode: tribeData.code || '',
      city: user && user.city ? user.city : '',
    },
    validateResolver: privateFormProfile,
    isEditForm: editPrivateUserInfo,
    startEdit: () => {
      dispatch(startEditPrivateUserInfo());
      dispatch(finishEditPublicUserInfo());
    },
    finishEdit: finishEditPrivateUserInfo,
    privateForm: true,
    classes
  };

  return (
    <EditFormProfile settingsForm={settingsForm} />
  );
};

export default EditPublicInfo;

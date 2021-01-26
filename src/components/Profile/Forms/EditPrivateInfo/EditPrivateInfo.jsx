import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {FormProfileStyles} from "../../Profile.styles";
import {
  finishEditPrivateUserInfo,
  finishEditPublicUserInfo,
  startEditPrivateUserInfo,
} from "../../../../redux/actions/user-actions";
import {privateFormProfile} from "../../../../shared/lib/forms/validation";
import {formPrivateControlsProfilePage} from "../../../../shared/lib/forms/formControls";
import EditFormProfile from "../EditFormProfile";

const useStyles = makeStyles(FormProfileStyles);

const EditPublicInfo = () => {
  const classes = useStyles({borderColor: '#D50073', paddingTop: 0});
  const {editPrivateUserInfo, user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const settingsForm = {
    formControls: formPrivateControlsProfilePage,
    defaultValues: {
      firstname: user.firstname || '',
      lastname: user.lastname || '',
      email: user.email || '',
      country: user.country || '',
      phone: user.phone || '',
      schoolName: user.schoolName || '',
      city: user.city || '',
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
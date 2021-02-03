import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
  finishEditPrivateUserInfo,
  finishEditPublicUserInfo,
  startEditPrivateUserInfo,
} from "../../../../redux/actions/user-actions";
import {privateFormProfile} from "../../../../shared/lib/forms/validation";
import {formPrivateControlsProfilePage} from "../../../../shared/lib/forms/formControls";
import EditFormProfile from "../EditFormProfile";


const EditPrivateInfo = () => {
  const {editPrivateUserInfo, user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const settingsForm = {
    formControls: formPrivateControlsProfilePage,
    defaultValues: {
      firstname: user.firstname || '',
      lastname: user.lastname || '',
      email: user.email || '',
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
    classesWrapper: { border: '5px solid #D50073'},
    classesForm: { background: 'rgba(240, 238, 238, 1)', paddingTop: 0},
  };

  return (
    <EditFormProfile settingsForm={settingsForm} />
  );
};

export default EditPrivateInfo;

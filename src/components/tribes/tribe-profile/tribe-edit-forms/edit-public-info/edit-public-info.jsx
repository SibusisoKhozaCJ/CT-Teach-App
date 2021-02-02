import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {FormProfileStyles} from "../../Profile.styles";
import {tribeFormPublicControlsProfilePage} from "../../../../../shared/lib/forms/tribeProfileFormControls";
import EditFormProfile from "../edit-tribe-form";
import {publicFormProfile} from "../../../../../shared/lib/forms/validation";
import {
  finishEditPrivateTribeInfo,
  finishEditPublicTribeInfo,
  startEditPublicTribeInfo
} from "../../../../../redux/actions/tribe-actions";

const useStyles = makeStyles(FormProfileStyles);

const EditPublicInfo = ({isEditable, tribeData, tribeOwner}) => {
  const classes = useStyles({borderColor: '#43D4DD', paddingTop: 23, background: 'rgba(240, 238, 238, 0.5)'});
  // const {editPublicUserInfo, user } = useSelector(state => state.user);
  const {editPublicTribeInfo} = useSelector(state => state.tribe);
  const dispatch = useDispatch();
  
  const settingsForm = {
    formControls: tribeFormPublicControlsProfilePage,
    defaultValues: {
      tribe: tribeData.name || '',
      tribeHandle: tribeOwner.userName || '',
      founded: tribeData.joined || '',
      aboutTribe: tribeData.desc || '',
      country: tribeOwner.country || '',
      ourJourney: tribeData.journey || '',
      schoolOrg: tribeOwner.schoolName || '',
      joinTribe: tribeData.joinMessage || '',
      question: tribeData.question || ''
    },
    validateResolver: publicFormProfile,
    isEditForm: editPublicTribeInfo,
    startEdit: () => {
      dispatch(startEditPublicTribeInfo());
      dispatch(finishEditPrivateTribeInfo())
    },
    finishEdit: finishEditPublicTribeInfo,
    classes
  }

  return (
    <EditFormProfile settingsForm={settingsForm} isCurrentUser={isEditable} tribeCode={tribeData.code}/>
  );
};

export default EditPublicInfo;

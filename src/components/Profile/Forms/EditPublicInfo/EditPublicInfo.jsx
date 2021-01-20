import React, {useCallback} from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {FormProfileStyles} from "../../Profile.styles";
import EditIcon from "../../../../assets/icons/EditIcon";
import {
  finishEditPublicUserInfo,
  startEditPublicUserInfo
} from "../../../../redux/actions/user-actions";
import {publicFormProfile} from "../../../../shared/lib/forms/validation";
import {formPublicControlsProfilePage} from "../../../../shared/lib/forms/formControls";

const useStyles = makeStyles(FormProfileStyles);

const EditPublicInfo = ({renderInputs, handleSaveAbout, renderButtons}) => {
  const classes = useStyles({borderColor: '#43D4DD', paddingTop: 23});
  const {editPublicUserInfo, user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const {handleSubmit, control, errors, reset} = useForm({
    defaultValues: {
      userName: user.userName || '',
      points: user.points || '',
      joined: user.joined || '',
      aboutMe: user.aboutMe || '',
      country: user.country || '',
      question: user.question || '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(publicFormProfile),
  });



  const handleCloseEdit = useCallback(() => {
    reset({
      userName: user.userName,
      points: user.points,
      joined: user.joined,
      aboutMe: user.aboutMe,
      country: user.country,
      question: user.question,
    })

    dispatch(finishEditPublicUserInfo());
  }, [user, dispatch, reset]);

  return (
    <Grid id='content' item md={5} sm={12} className={classes.wrapperForm}>
      <form onSubmit={handleSubmit(handleSaveAbout)} className={classes.form}>
        { !editPublicUserInfo && <EditIcon onClick={() => dispatch(startEditPublicUserInfo())}/>}
        {renderInputs(formPublicControlsProfilePage, control, editPublicUserInfo, errors)}
        {renderButtons(handleCloseEdit, errors, editPublicUserInfo)}
      </form>
    </Grid>
  );
};

export default EditPublicInfo;

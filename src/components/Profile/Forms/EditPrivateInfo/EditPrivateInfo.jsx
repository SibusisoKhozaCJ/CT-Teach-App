import React, {useCallback} from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import {yupResolver} from "@hookform/resolvers/yup";
import LockIcon from '@material-ui/icons/Lock';
import {useForm} from "react-hook-form";
import {FormProfileStyles} from "../../Profile.styles";
import EditIcon from "../../../../assets/icons/EditIcon";
import {
  finishEditPrivateUserInfo,
  startEditPrivateUserInfo,
} from "../../../../redux/actions/user-actions";
import {privateFormProfile} from "../../../../shared/lib/forms/validation";
import {formPrivateControlsProfilePage} from "../../../../shared/lib/forms/formControls";

const useStyles = makeStyles(FormProfileStyles);

const EditPublicInfo = ({renderInputs, handleSaveAbout, renderButtons}) => {
  const classes = useStyles({borderColor: '#D50073', paddingTop: 0});
  const {editPrivateUserInfo, user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  const {handleSubmit, control, errors, reset} = useForm({
    defaultValues: {
      firstname: user.firstname || '',
      lastname: user.lastname || '',
      email: user.email || '',
      country: user.country || '',
      phone: user.phone || '',
      schoolName: user.schoolName || '',
      city: user.city || '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(privateFormProfile),
  });

  const handleCloseEdit = useCallback(() => {
    reset({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      country: user.country,
      phone: user.phone,
      schoolName: user.schoolName,
      city: user.city,
    })
    dispatch(finishEditPrivateUserInfo());
  }, [user, dispatch, reset]);

  return (
    <Grid id='content' className={classes.wrapperForm} item md={5} sm={12}>
      <form onSubmit={handleSubmit(handleSaveAbout)} className={classes.form}>
        <div className={classes.header}>
          <div className={classes.wrapperIcon}><LockIcon /></div>
          <p>This part is private. It is NOT public.</p>
          { !editPrivateUserInfo && <EditIcon onClick={() => dispatch(startEditPrivateUserInfo())}/>}
        </div>
        {renderInputs(formPrivateControlsProfilePage, control, editPrivateUserInfo, errors)}
        {renderButtons(handleCloseEdit, errors, editPrivateUserInfo)}
      </form>
    </Grid>
  );
};

export default EditPublicInfo;

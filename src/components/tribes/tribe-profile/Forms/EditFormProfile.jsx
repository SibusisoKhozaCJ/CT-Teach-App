import React, {useCallback} from 'react';
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch} from "react-redux";
import LockIcon from '@material-ui/icons/Lock';
import {Grid} from "@material-ui/core";
import {updateUserInfo} from "../../../../redux/actions/user-actions";
import EditIcon from "../../../../assets/icons/EditIcon";
import {tribeFormPublicControlsProfilePage} from "../../../../shared/lib/forms/tribeProfileFormControls";
import Input from "./Input/Input";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import {isEmpty} from "lodash";

const EditFormProfile = ({settingsForm, isCurrentUser}) => {
  const dispatch = useDispatch();
  const {
    formControls,
    defaultValues,
    validateResolver,
    isEditForm,
    classes,
    startEdit,
    finishEdit
  } = settingsForm;

  const isRenderButton = !isEditForm && !settingsForm.privateForm && isCurrentUser;

  const {handleSubmit, control, errors, reset} = useForm({
    defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(validateResolver),
  });

  const handleCloseEdit = useCallback(() => {
    reset(defaultValues)
    dispatch(finishEdit());
  }, [dispatch, reset, defaultValues, finishEdit]);

  const handleSaveAbout = useCallback((data) => {
    dispatch(updateUserInfo(data));
  }, [dispatch]);

  const renderInputs = () => {
    return Object.keys(formControls).map((controlName, index) => {
      const item = formControls[controlName];
      return (
        <Controller
          key={controlName + index}
          control={control}
          name={controlName}
          render={
            ({value, ref, name, onChange}) => {
              return (
                <Input
                  item={item}
                  onChange={onChange}
                  ref={ref}
                  value={value}
                  name={name}
                  errors={errors}
                  isEdit={isEditForm}
                />
              )
            }}
        />
      )
    });
  };

  const renderButtons = () => {
    if (isEditForm) {
      return  (
        <Grid container className={classNames(isEditForm && !settingsForm.privateForm && classes.btnButtons)}>
          <Button
            onClick={handleCloseEdit}
            className={classes.btnCancel}
          >
            Cancel
          </Button>
          <Button
            className={classes.btnSave}
            disabled={!isEmpty(errors)}
            type="submit"
          >
            Save
          </Button>
        </Grid>
      )
    }
  };

  return (
    <Grid id='content' item md={5} sm={12} className={classes.wrapperForm}>
      <form onSubmit={handleSubmit(handleSaveAbout)} className={classes.form}>
        {settingsForm.privateForm && (
          <div className={classes.header}>
            <div className={classes.wrapperIcon}><LockIcon /></div>
            <p>This part is private. It is NOT public.</p>
            { !isEditForm && <EditIcon onClick={startEdit}/>}
          </div>
        )}
        { isRenderButton && <EditIcon onClick={startEdit}/>}
        {renderInputs(tribeFormPublicControlsProfilePage)}
        {renderButtons()}
      </form>
    </Grid>
  );
};

export default EditFormProfile;


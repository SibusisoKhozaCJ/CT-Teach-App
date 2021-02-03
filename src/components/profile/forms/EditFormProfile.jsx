import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LockIcon from '@material-ui/icons/Lock';
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { isEmpty } from "lodash";
import Modal from 'react-modal';

import { updateUserInfo } from "../../../redux/actions/user-actions";
import EditIcon from "../../../assets/icons/EditIcon";
import { formPublicControlsProfilePage } from "../../../shared/lib/forms/formControls";
import Input from "./input/Input";
import classNames from "classnames";

export const customModalStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .5)'
  }
};


const EditFormProfile = ({settingsForm, isCurrentUser}) => {
  const [modalIsOpen,setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    formControls,
    defaultValues,
    validateResolver,
    isEditForm,
    classesWrapper,
    classesForm,
    startEdit,
    finishEdit
  } = settingsForm;

  const isRenderButton = !isEditForm && !settingsForm.privateForm && isCurrentUser;

  const {editPublicUserInfo, editPrivateUserInfo} = useSelector(state => state.user);

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

  const handleEdit = () => {
    if (!editPublicUserInfo && !editPrivateUserInfo) {
      startEdit();
    } else {
      setIsOpen(true);
    }
  }

  const closeModal = answer => {
    if (answer === 'yes') {
      startEdit();
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  }

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
      return (
        <Grid container className={classNames(isEditForm && "btnButtons")}>
          <Button
            onClick={handleCloseEdit}
            className="btnCancel"
          >
            Cancel
          </Button>
          <Button
            className="btnSave"
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
      <Grid id='content' item md={5} sm={12} style={classesWrapper} className={'wrapperFormEditProfile'}>
        <form onSubmit={handleSubmit(handleSaveAbout)} style={classesForm} className="form">
          {settingsForm.privateForm && (
            <div className="header">
              <div className="wrapperIcon"><LockIcon /></div>
              <p>This part is private. It is NOT public.</p>
              {!isEditForm && <EditIcon onClick={handleEdit} />}
            </div>
          )}
          {isRenderButton && <EditIcon onClick={handleEdit} />}
          {renderInputs(formPublicControlsProfilePage)}
          {renderButtons()}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customModalStyles}
            contentLabel="Edit Modal"
          >
            <p>Are you sure you want to close this section without saving changes?</p>
            <div className='modalProfileEditCheck'>
              <Button className='btnCancel' onClick={() => closeModal('no')}>No</Button>
              <Button className='btnSave' onClick={() => closeModal('yes')}>Yes</Button>
            </div>
          </Modal>
        </form>
      </Grid>
  );
};

export default EditFormProfile;


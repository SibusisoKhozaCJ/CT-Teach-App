import React, {useCallback} from 'react';
import Header from "./Header/Header";
import {makeStyles} from "@material-ui/core/styles";
import {FormProfileStyles, ProfileStyles} from "./Profile.styles";
import EditPublicInfo from "./Forms/EditPublicInfo/EditPublicInfo";
import {Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";
import EditPrivateInfo from "./Forms/EditPrivateInfo/EditPrivateInfo";
import {Controller} from "react-hook-form";
import Input from "./Forms/Input/Input";
import Button from "@material-ui/core/Button";
import {isEmpty} from "lodash";
import {updateUserInfo} from "../../redux/actions/user-actions";

const useStylesForm = makeStyles(FormProfileStyles);
const useStylesProfile = makeStyles(ProfileStyles);

const Profile = () => {
  const classesForm = useStylesForm();
  const classesProfile = useStylesProfile();
  const {editPublicUserInfo} = useSelector(state => state.user)
  const dispatch = useDispatch()

  const handleSaveAbout = useCallback((data) => {
    dispatch(updateUserInfo(data));
  }, [dispatch]);

  const renderInputs = (formControls, control, isEdit, errors) => {
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
                  isEdit={isEdit}
                />
              )
            }}
        />
      )
    });
  };

  const renderButtons = (handleCloseEdit, errors, isRender) => {
    if (isRender) {
      return  (
        <Grid container className={classNames(editPublicUserInfo && classesForm.btnButtons)}>
          <Button
            onClick={handleCloseEdit}
            className={classesForm.btnModalCancel}
          >
            Cancel
          </Button>
          <Button
            className={classesForm.btnModalSave}
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
    <div className={classesProfile.root}>
      <Header />
      <Grid container>
        <EditPublicInfo
          handleSaveAbout={handleSaveAbout}
          renderInputs={renderInputs}
          renderButtons={renderButtons}
        />
        <EditPrivateInfo
          handleSaveAbout={handleSaveAbout}
          renderInputs={renderInputs}
          renderButtons={renderButtons}
        />
      </Grid>
    </div>
  );
};

export default Profile;

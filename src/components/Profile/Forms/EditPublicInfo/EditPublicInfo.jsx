import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Grid} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {FormProfileStyles} from "../../Profile.styles";
import {
  createControl,
  validate,
  validateForm
} from "../../../../shared/lib/formHelpers";
import EditIcon from "../../../../assets/icons/EditIcon";
import Button from "@material-ui/core/Button";
import Input from "../Input/Input";
import {
  finishEditUserInfo,
  startEditUserInfo,
  updatePublicUserInfo
} from "../../../../redux/actions/user-actions";

function getInnerHTML(ref) {
  return ref.current.innerHTML;
}

const EditPublicInfo = ({classes, ...props}) => {
  const userNameRef = useRef();
  const aboutMeRef = useRef();
  const questionRef = useRef();
  const [isFormValid, setIsFormValid] = useState(false);

  const [formControls, setFormControls] = useState({
    userName: createControl({
      label: 'UserName',
      value: props.userName,
      className: 'userName',
      isEdit: true,
      inputActiveClassName: 'activeControlInput',
      errorMessage: 'Can\'t be empty.',
      ref: userNameRef
    }, {required: true}),
    points: createControl({
      label: 'Points',
      value: props.points,
      className: 'userInfo',
      errorMessage: 'Can\'t be empty.'
    }, {required: true}),
    joined: createControl({
      label: 'Joined',
      value: props.joined,
      className: 'userInfo',
      errorMessage: 'Can\'t be empty.'
    }, {required: true}),
    aboutMe: createControl({
      label: 'About me',
      value: props.aboutMe,
      className: 'controlTextarea',
      isEdit: true,
      inputActiveClassName: 'activeControlTextarea',
      errorMessage: 'Can\'t be empty.',
      ref: aboutMeRef
    }, {required: true}),
    country: createControl({
      label: 'Country',
      value: props.country,
      className: 'userInfo',
      errorMessage: 'Can\'t be empty.'
    }, {required: true}),
    question: createControl({
      label: 'Why I’m learning coding?',
      value: props.question,
      className: 'controlTextarea',
      isEdit: true,
      inputActiveClassName: 'activeControlTextarea',
      errorMessage: 'Can\'t be empty.',
      ref: questionRef
    }, {required: true}),
  });

  const handleSaveAbout = useCallback(() => {
    const updateData = {
      userName: getInnerHTML(userNameRef),
      aboutMe: getInnerHTML(aboutMeRef),
      question: getInnerHTML(questionRef),
    };

    props.handleUpdatePublicUserInfo(updateData);
  }, [props]);

  const handleCloseEdit = useCallback(() => {
    userNameRef.current.innerHTML = props.userName || '';
    aboutMeRef.current.innerHTML = props.aboutMe || '';
    questionRef.current.innerHTML = props.question || '';

    props.handleFinishEditUserInfo();
  }, [props]);

  const handleChangeInput = (event, controlName) => {
    const newFormControls = { ...formControls };
    const control = { ...newFormControls[controlName] };
    const valueInput = event.currentTarget.innerHTML

    control.value = valueInput;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    newFormControls[controlName] = control;

    setFormControls(newFormControls);
    setIsFormValid(validateForm(newFormControls));

    event.currentTarget.selectionEnd = valueInput.length;
  };

  const renderInputs = useMemo(() => {
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName];
      return (
        <Input
          key={controlName + index}
          item={formControls[controlName]}
          isEdit={props.editUserInfo}
          shouldValidate={!!control.validation}
          onChange={event => handleChangeInput(event, controlName)}
        />
      )
    });
  }, [formControls])

  const renderButtons = useMemo(() => {
    if (props.editUserInfo) {
     return  <Grid container>
       <Button
         onClick={handleCloseEdit}
         className={classes.btnModalCancel}
       >
         Cancel
       </Button>
       <Button
         onClick={handleSaveAbout}
         className={classes.btnModalSave}
         disabled={isFormValid}
       >
         Save
       </Button>
     </Grid>
    }
  }, [props.editUserInfo])

  return (
    <Grid item md={6}>
      <div className={classes.wrapperLeftForm} id='content'>
        <form className={classes.form}>
          { !props.editUserInfo && <EditIcon onClick={props.handleStartEditUserInfo}/>}
          {renderInputs}
          {renderButtons}
        </form>
      </div>
    </Grid>
  );
};

function mapStateToProps(state) {
  return {
    userName: state.user.user.userName,
    points: state.user.user.points,
    joined: state.user.user.joined,
    aboutMe: state.user.user.aboutMe,
    country: state.user.user.country,
    question: state.user.user.question,
    editUserInfo: state.user.editUserInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleUpdatePublicUserInfo: data => dispatch(updatePublicUserInfo(data)),
    handleStartEditUserInfo: () => dispatch(startEditUserInfo()),
    handleFinishEditUserInfo: () => dispatch(finishEditUserInfo())
  }
}

export default withStyles(FormProfileStyles)(connect(mapStateToProps, mapDispatchToProps)(EditPublicInfo));

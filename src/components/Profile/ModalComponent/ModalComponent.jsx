import React, { useCallback } from 'react';
import {TextareaAutosize, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import {ProfileStyles} from "../Profile.styles";
import {
  handleCloseModal,
  handleCodeToIframe,
  handleEmojiCode, handleFindLinkOrImg
} from "../../../redux/actions/profile-actions";

const modalStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.58)'
  },
  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    width: '30%',
    margin: '70px auto',
    padding: 0,
    border: 0,
    zIndex: 9999,
  }
};

const ModalComponent = (
  {
    classes,
    saveAbout,
    ...props
  }) => {
  const textAreaHandler = useCallback(event => {
    const value = event.target.value;
    props.handleCodeToIframe(value);
    props.handleFindLinkOrImg(value);
  }, []);

  return (
    <Modal
      isOpen={props.isOpenModal}
      onRequestClose={props.handleCloseModal}
      className={classes.modalContent}
      style={modalStyles}
      contentLabel='Modal'
    >
      <div className={classes.modalPrivate}>
        <div className={classes.personalize}>
          <Typography variant="h5">PERSONALIZE</Typography>
          <Typography variant="h6">HEADER:</Typography>
          <Typography>
            Add your own mini-website to your header.
            <br />
            <div className={classes.tipNote}>
              TIP: Not sure what I mean? Do the <a href="#">5-Minute-Website</a> and paste it in here.
            </div>
          </Typography>
        </div>
        <TextareaAutosize
          name='about_me'
          rowsMin={10}
          rowsMax={20}
          className={classes.textArea}
          placeholder="Paste your code here. There is a max of 20 lines allowed."
          defaultValue={props.code}
          onChange={textAreaHandler}
        />
        {props.isFindLinkOrImg && <p className={classes.textareaError}>Error</p>}
        <div className={classes.personalize}>
          <Typography variant="h6">AVATAR:</Typography>
          <Typography>
            Add an emoji or character by adding the code.
            <br />
            <div className={classes.tipNote}>
              TIP: For example #128512; is a big smile emoji.
              <br />
              Lear more <a href="#">here</a>.
            </div>
          </Typography>
        </div>
        <TextField
          name='emoji'
          id="emoji"
          className={classes.inputWrapper}
          variant="outlined"
          value={props.emoji}
          onChange={event => props.handleEmojiCode(event.target.value)}
        />
        <Button
          onClick={handleCloseModal}
          className={classes.btnModalCancel}
        >
          Cancel
        </Button>
        <Button
          onClick={saveAbout}
          className={classes.btnModalSave}
          disabled={props.isFindLinkOrImg}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};

function mapStateToProps(state) {
  return {
    code: state.profile.codeInIframe,
    emoji: state.profile.emojiCode,
    isOpenModal: state.profile.isOpenModal,
    isFindLinkOrImg: state.profile.isFindLinkOrImg
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleCodeToIframe: code => dispatch(handleCodeToIframe(code)),
    handleEmojiCode: code => dispatch(handleEmojiCode(code)),
    handleCloseModal: () => dispatch(handleCloseModal()),
    handleFindLinkOrImg: code => dispatch(handleFindLinkOrImg(code))
  }
}

export default withStyles(ProfileStyles)(connect(mapStateToProps, mapDispatchToProps)(ModalComponent));

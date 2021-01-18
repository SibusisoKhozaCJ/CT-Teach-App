import React, { useCallback } from 'react';
import {TextareaAutosize, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import {connect} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import {HeaderProfileStyles} from "../Profile.styles";
import {closeModal} from "../../../redux/actions/user-actions";

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
    setTextareaValue,
    setInputValue,
    ...props
  }) => {
  return (
    <Modal
      isOpen={props.openModal}
      onRequestClose={props.handleCloseModal}
      className={classes.modalContent}
      style={modalStyles}
      contentLabel='Modal'
    >
      <form onSubmit={saveAbout} className={classes.modalPrivate}>
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
          onChange={event => setTextareaValue(event.target.value)}
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
          defaultValue={props.emoji}
          onChange={event => setInputValue(event.target.value)}
        />
        <Button
          onClick={props.handleCloseModal}
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
      </form>
    </Modal>
  );
};

function mapStateToProps(state) {
  return {
    code: state.user.codeInIframe,
    emoji: state.user.emojiCode,
    openModal: state.user.openModal,
    isFindLinkOrImg: state.user.isFindLinkOrImg
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleCloseModal: () => dispatch(closeModal())
  }
}

export default withStyles(HeaderProfileStyles)(connect(mapStateToProps, mapDispatchToProps)(ModalComponent));

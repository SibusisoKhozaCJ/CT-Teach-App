import React from 'react';
import {TextareaAutosize, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import {useDispatch, useSelector} from "react-redux";
import {withStyles} from "@material-ui/core/styles";
import {HeaderProfileStyles} from "../Profile.styles";
import {closeModal} from "../../../../redux/actions/user-actions";
import { Link } from 'react-router-dom';

const modalStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.58)',
    zIndex: 1301,
    overflow: 'auto'
  },
  content: {
    position: 'relative',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    width: '30%',
    margin: '0 auto',
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
    setInputValue
  }) => {
  const {codeInIframe, emojiCode, openModal, isFindLinkOrImg} = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => dispatch(closeModal())}
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
              TIP: Not sure what I mean? Do the <Link to="/">5-Minute-Website</Link> and paste it in here.
            </div>
          </Typography>
        </div>
        <TextareaAutosize
          name='about_me'
          rowsMin={10}
          rowsMax={19}
          className={classes.textArea}
          placeholder="Paste your code here. There is a max of 20 lines allowed."
          defaultValue={codeInIframe}
          onChange={event => setTextareaValue(event.target.value)}
        />
        <div className={classes.personalize}>
          <Typography variant="h6">AVATAR:</Typography>
          <Typography>
            Add an emoji or character by adding the code.
            <br />
            <div className={classes.tipNote}>
              TIP: For example #128512; is a big smile emoji.
              <br />
              Lear more <Link to="/">here</Link>.
            </div>
          </Typography>
        </div>
        <TextField
          name='emoji'
          id="emoji"
          className={classes.inputWrapper}
          variant="outlined"
          defaultValue={emojiCode}
          onChange={event => setInputValue(event.target.value)}
        />
        <Button
          onClick={() => dispatch(closeModal())}
          className={classes.btnModalCancel}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className={classes.btnModalSave}
          disabled={isFindLinkOrImg}
        >
          Save
        </Button>
      </form>
    </Modal>
  );
};

export default withStyles(HeaderProfileStyles)(ModalComponent);

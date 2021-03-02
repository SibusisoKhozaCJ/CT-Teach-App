import React from 'react';
import {TextareaAutosize, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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

const ProfileHeaderModalComponent = (
  {
    saveAbout,
    setTextareaValue,
    setInputValue,
    closeModal,
    codeInIframe,
    emojiCode,
    openModal,
    isFindLinkOrImg
  }) => {

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => closeModal()}
      className='modalContentEditProfile'
      style={modalStyles}
      contentLabel='Modal'
    >
      <form onSubmit={saveAbout} className='modalPrivate'>
        <IconButton aria-label="upload picture" component="span" className="closeBtn">
          <CloseIcon onClick={() => closeModal()} />
        </IconButton>
        <div className='personalize'>
          <Typography variant="h5">PERSONALIZE</Typography>
          <Typography variant="h6">HEADER:</Typography>
          <Typography>
            Add your own mini-website to your header.
            <br />
            <div className="tipNote">
              TIP: Not sure what I mean? Do the <Link to="/">5-Minute-Website</Link> and paste it in here.
            </div>
          </Typography>
        </div>
        <TextareaAutosize
          name='about_me'
          rowsMin={5}
          rowsMax={5}
          className='textArea'
          placeholder="Type or paste your code here. There is a max of 20 lines allowed."
          defaultValue={codeInIframe}
          onChange={event => setTextareaValue(event.target.value)}
        />
        <div className="personalize">
          <Typography variant="h6">AVATAR:</Typography>
          <Typography>
            Add an emoji or character by adding the code.
            <br />
            <div className="tipNote">
              TIP: For example #128512; is a big smile emoji.
              <br />
              Lear more <a href="https://www.w3schools.com/charsets/ref_emoji.asp" target="_blank">here</a>.
            </div>
          </Typography>
        </div>
        <TextField
          name='emoji'
          id="emoji"
          className='inputWrapper'
          variant="outlined"
          defaultValue={emojiCode}
          onChange={event => setInputValue(event.target.value)}
        />
        <Button
          onClick={() => closeModal()}
          className="btnModalCancel"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="btnModalSave"
          disabled={isFindLinkOrImg}
        >
          Save
        </Button>
      </form>
    </Modal>
  );
};

export default ProfileHeaderModalComponent;


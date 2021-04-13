import React, { useState } from 'react';
import {TextareaAutosize, TextField, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Modal from "react-modal";
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { BulbIcon } from '../../svgs/menu-items'

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
    width: '375px',
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
  const [toolTop, setToolTip] = useState('')

  const onClickToolTip = (e, value) => {
    e.preventDefault();
    e.stopPropagation();
    if (toolTop !== value) {
      setToolTip(value)
    } else {
      setToolTip('')
    }
  }

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={() => closeModal()}
      className='modalContentEditProfile'
      style={modalStyles}
      contentLabel='Modal'
    >
      <form onSubmit={saveAbout} className='modalPrivate' onClick={() => setToolTip('')}>
        <IconButton aria-label="upload picture" component="span" className="closeBtn">
          <CloseIcon onClick={() => closeModal()} />
        </IconButton>
        <div className='personalize'>
          <Typography variant="h5">PERSONALIZE</Typography>
          <Typography variant="h6">HEADER:</Typography>
          <Typography>
            Add your own mini-website to your header.
          </Typography>
          <button type="button" className="tipBtn" onClick={(e) => onClickToolTip(e, '5min')}><BulbIcon /></button>
          {toolTop === '5min' && <div className="tipNote">
            TIP: Not sure what I mean?<br /> Do the <Link to="/">5-Minute-Website</Link> and paste it in here.
          </div>}
        </div>
        <TextareaAutosize
          name='about_me'
          rowsMin={5}
          rowsMax={5}
          className='textArea'
          placeholder="Paste your code here. There is a max of 20 lines allowed."
          defaultValue={codeInIframe}
          onChange={event => setTextareaValue(event.target.value)}
        />
        <div className="personalize">
          <Typography variant="h6">AVATAR:</Typography>
          <Typography>
            Add an emoji or character by adding the code.
          </Typography>
          <button type="button" className="tipBtn" onClick={(e) => onClickToolTip(e, 'bigemoji')}><BulbIcon /></button>
          {toolTop === 'bigemoji' && <div className="tipNote">
              TIP: For example #128512; is a big smile emoji.
              <br />
              Lear more <a href="https://www.w3schools.com/charsets/ref_emoji.asp" target="_blank">here</a>.
            </div>}
        </div>
        <TextField
          name='emoji'
          id="emoji"
          className='inputWrapper'
          variant="outlined"
          defaultValue={emojiCode}
          onChange={event => setInputValue(event.target.value)}
        />
        <div className="personalize">
          <Typography>
            Choose the background color or code.
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
        <div className="btnBox">
          <Button
            type="submit"
            className="btnModalSave"
            disabled={isFindLinkOrImg}
          >
            UPDATE
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ProfileHeaderModalComponent;


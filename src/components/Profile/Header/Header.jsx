import React, {useCallback, useEffect, useState} from 'react';
import Modal from 'react-modal';
import EditIcon from '../../../assets/icons/EditIcon'
import {useDispatch, useSelector} from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
  openModal,
  updateUserHeaderUserProfile
} from "../../../redux/actions/user-actions";
import ModalComponent from "../ModalComponent/ModalComponent";
import { HeaderProfileStyles } from "../Profile.styles";
import {createIframe} from "../../../shared/lib/createIframe";

Modal.setAppElement('#modalInProfile');

function wrapperEmoji(emoji) {
  return `
    <html lang="en">
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <title>Profile emoji</title>
        </head>
        <body style="display: flex; justify-content: center; align-items: center;">
            <i class="fa" style="font-size:60px;">${emoji}</i>
        </body>
    </html>
  `
}

function writeContentToIframe(iframe, content) {
  iframe.open();
  iframe.write(content);
  iframe.close();
}

const Header = ({ classes }) => {
  const [textareaValue, setTextareaValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [iframe_code, setIframe_code] = useState();
  const [iframe_emoji, setIframe_emoji] = useState();
  const {codeInIframe, emojiCode} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    createIframe(
      'profileHeaderIframe',
      null, null,
      '#profile',
      { width: '100%' }
    );
    createIframe(
      'emojiIframe',
      null,
      null,
      '#wrapperEmojiIframe',
      { width: '100%', height: '100%', border: 'none' }
    );

    setIframe_code(document.getElementById('profileHeaderIframe').contentWindow.document);
    setIframe_emoji(document.getElementById('emojiIframe').contentWindow.document);
  }, []);

  useEffect(() => {
    if (iframe_code && iframe_emoji) {
      writeContentToIframe(iframe_code, codeInIframe);
      writeContentToIframe(iframe_emoji, wrapperEmoji(emojiCode));
    }
  }, [iframe_code, iframe_emoji, codeInIframe, emojiCode]);

  const saveAbout = useCallback(async (event) => {
    event.preventDefault();
    const data = {
      codeInIframe: textareaValue,
      emojiCode: inputValue,
    }
    dispatch(updateUserHeaderUserProfile(data));

    writeContentToIframe(iframe_code, codeInIframe);
    writeContentToIframe(iframe_emoji, wrapperEmoji(emojiCode));
  }, [iframe_code, iframe_emoji, inputValue, textareaValue, codeInIframe, emojiCode, dispatch]);

  return (
    <div id="profile" className={classes.profileHeader}>
      <div className={classes.containerIcon}>
        <div className={classes.circleHome}>
          <div className={classes.editIcon}>
            <EditIcon onClick={() => dispatch(openModal())} />
          </div>
          <div id="wrapperEmojiIframe" className={classes.circleHomeIcon} />
        </div>
      </div>
      <ModalComponent
        saveAbout={saveAbout}
        setTextareaValue={setTextareaValue}
        setInputValue={setInputValue}
      />
    </div>
  );
};

export default withStyles(HeaderProfileStyles)(Header);

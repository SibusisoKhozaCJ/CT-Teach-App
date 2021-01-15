import React, {useCallback, useEffect, useState} from 'react';
import Modal from 'react-modal';
import EditIcon from '../../../assets/icons/EditIcon'
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import {
  handleCloseModal,
  handleCodeToIframe, handleEmojiCode,
  handleOpenModal
} from "../../../redux/actions/profile-actions";
import ModalComponent from "../ModalComponent/ModalComponent";
import { ProfileStyles } from "../Profile.styles";
import firebase from "firebase";
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

const Header = ({ classes, ...props }) => {
  const [certRef] = useState(firebase.database().ref('user_profile'));
  const [iframe_code, setIframe_code] = useState();
  const [iframe_emoji, setIframe_emoji] = useState();

  const certRefHandler = useCallback((snapshot) => {
    let cert = snapshot.val();

    props.handleCodeToIframe(cert['e19cdj6143ec8']['code']);
    props.handleEmojiCode(cert['e19cdj6143ec8']['emoji']);

    writeContentToIframe(iframe_code, cert['e19cdj6143ec8']['code']);
    writeContentToIframe(iframe_emoji, wrapperEmoji(cert['e19cdj6143ec8']['emoji']));
  }, [iframe_code, iframe_emoji])

  useEffect(() => {
    if (iframe_code && iframe_emoji) {
      certRef.on('value', certRefHandler);
    }
  }, [iframe_code, iframe_emoji, certRef, certRefHandler]);

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

  const saveAbout = useCallback(async () => {
    const certRef = firebase.database().ref('user_profile');

    try {
      await certRef.child('e19cdj6143ec8').update({
        code: props.code,
        emoji: props.emoji
      });
    } catch (e) {
      console.warn(e)
    }

    props.handleCodeToIframe(props.code);
    props.handleEmojiCode(props.emoji);

    writeContentToIframe(iframe_code, props.code);
    writeContentToIframe(iframe_emoji, wrapperEmoji(props.emoji));

    props.handleCloseModal();
  }, [props, iframe_code, iframe_emoji]);

  return (
    <div id="profile" className={classes.profileHeader}>
      <div className={classes.containerIcon}>
        <div className={classes.circleHome}>
          <div className={classes.editIcon}>
            <EditIcon onClick={props.handleOpenModal} />
          </div>
          <div id="wrapperEmojiIframe" className={classes.circleHomeIcon} />
        </div>
      </div>
      <ModalComponent saveAbout={saveAbout} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    code: state.profile.codeInIframe,
    emoji: state.profile.emojiCode,
    isLoading: state.profile.isLoading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleCodeToIframe: code => dispatch(handleCodeToIframe(code)),
    handleEmojiCode: code => dispatch(handleEmojiCode(code)),
    handleCloseModal: () => dispatch(handleCloseModal()),
    handleOpenModal: () => dispatch(handleOpenModal())
  }
}

export default withStyles(ProfileStyles)(connect(mapStateToProps, mapDispatchToProps)(Header));

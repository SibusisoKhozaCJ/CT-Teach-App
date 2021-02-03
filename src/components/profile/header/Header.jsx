import React, {useCallback, useEffect, useState} from 'react';
import Modal from 'react-modal';
import EditIcon from '../../../assets/icons/EditIcon'
import {useDispatch, useSelector} from "react-redux";
import {
  closeModal,
  openModal,
  closeModalWarning,
  updateUserHeaderUserProfile
} from "../../../redux/actions/user-actions";
import ModalComponent from "../modal-component/ModalComponent";
import {createIframe} from "../../../shared/lib/createIframe";
import {Button} from "@material-ui/core";

Modal.setAppElement('#modalInProfile');

const modalStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.58)',
    zIndex: 11
  },
  content: {
    position: 'relative',
    top: '30%',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    width: '30%',
    height: 150,
    margin: '75px auto',
    padding: 0,
    border: 0,
    zIndex: 9999,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media screen and (min-width: 576px)': {
      color: 'red'
    }
  }
};

function wrapperEmoji(emoji) {
  return `
    <html lang="en">
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <title>Profile emoji</title>
            <style type="text/css">
                body {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                .fa {
                  font-size: 120px;
                  line-height: 148px;
                }
                @media screen and (max-device-width: 959px) {
                    .fa {
                        font-size: 60px;
                        line-height: 70px;
                    }
                }
            </style>
        </head>
        <body>
            <i class="fa">${emoji}</i>
        </body>
    </html>
  `
}

function writeContentToIframe(iframe, content) {
  iframe.open();
  iframe.write(content);
  iframe.close();
}

const Header = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [iframe_code, setIframe_code] = useState();
  const [iframe_emoji, setIframe_emoji] = useState();
  const {codeInIframe, emojiCode, isCurrentUser, isFindLinkOrImg} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    createIframe(
      'profileHeaderIframe',
      null, null,
      '#profile',
      { width: '100%', height: '100%', border: 'none' }
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
      codeInIframe: textareaValue || codeInIframe,
      emojiCode: inputValue || emojiCode,
    }

    dispatch(updateUserHeaderUserProfile(data));

    writeContentToIframe(iframe_code, codeInIframe);
    writeContentToIframe(iframe_emoji, wrapperEmoji(emojiCode));
  }, [iframe_code, iframe_emoji, inputValue, textareaValue, codeInIframe, emojiCode, dispatch]);

  return (
    <div id="profile" className="profileHeader">
      <div className="containerIcon">
        <div className="circleHome">
          <div className="editIcon">
            {isCurrentUser && <EditIcon onClick={() => dispatch(openModal())}/>}
          </div>
          <div id="wrapperEmojiIframe" className="circleHomeIcon" />
        </div>
      </div>
      <ModalComponent
        saveAbout={saveAbout}
        setTextareaValue={setTextareaValue}
        setInputValue={setInputValue}
      />
      <Modal
        isOpen={isFindLinkOrImg}
        onRequestClose={() => dispatch(closeModal())}
        style={modalStyles}
      >
        <p className="warning">No images or hyperlinks are allowed in the profile. Please remove all src=, img or url tags before saving." [button]</p>
        <Button className="btnModalSave" onClick={() => dispatch(closeModalWarning())}>OK</Button>
      </Modal>
    </div>
  );
};

export default Header;

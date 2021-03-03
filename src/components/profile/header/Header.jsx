import React, {useCallback, useEffect, useState} from 'react';
import Modal from 'react-modal';
import EditIcon from '../../../assets/icons/EditIcon'
import {useDispatch, useSelector} from "react-redux";
import {
  closeModalAction,
  openModalAction,
  closeModalWarning,
  updateUserHeaderUserProfile
} from "../../../redux/actions/user-actions";
import ModalComponent from "../../../shared/components/profile-header-modal";
import {createIframe} from "../../../shared/lib/createIframe";
import {Button} from "@material-ui/core";
import { wrapperEmojiInHtmlString, writeContentToIframe } from '../../../shared/lib/contentRender';

Modal.setAppElement('#modalInProfile');

const defaultCodeInIframe = `<body style="background:grey; color: white; font-family: helvetica; text-align: center;" >
<h2>
ADD YOUR OWN CODE HERE TO PERSONALIZE YOUR HEADER.
</h2>
</body>`;

const modalStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.58)',
    zIndex: 1302
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

const Header = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [iframe_code, setIframe_code] = useState();
  const [iframe_emoji, setIframe_emoji] = useState();
  const {codeInIframe, emojiCode, isCurrentUser, isFindLinkOrImg, openModal} = useSelector(state => state.user);
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
      writeContentToIframe(iframe_code, codeInIframe || defaultCodeInIframe);
      writeContentToIframe(iframe_emoji, wrapperEmojiInHtmlString(emojiCode));
    }
  }, [iframe_code, iframe_emoji, codeInIframe, emojiCode]);

  const saveAbout = useCallback(async (event) => {
    event.preventDefault();
    const data = {
      codeInIframe: textareaValue,
      emojiCode: inputValue || emojiCode,
    }

    dispatch(updateUserHeaderUserProfile(data));
    writeContentToIframe(iframe_code, codeInIframe || defaultCodeInIframe);
    writeContentToIframe(iframe_emoji, wrapperEmojiInHtmlString(emojiCode));
  }, [iframe_code, iframe_emoji, inputValue, textareaValue, codeInIframe, emojiCode, dispatch]);

  return (
    <div id="profile" className="profileHeader">
      <div className="containerIcon">
        <div className="circleHome">
          <div className="editIcon">
            {isCurrentUser && <EditIcon onClick={() => dispatch(openModalAction())}/>}
          </div>
          <div id="wrapperEmojiIframe" className="circleHomeIcon" />
        </div>
      </div>
      <ModalComponent
        saveAbout={saveAbout}
        setTextareaValue={setTextareaValue}
        setInputValue={setInputValue}
        codeInIframe={codeInIframe}
        emojiCode={emojiCode}
        openModal={openModal}
        isFindLinkOrImg={isFindLinkOrImg}
        closeModal={()=>{dispatch(closeModalWarning());dispatch(closeModalAction())}}
      />
      <Modal
        isOpen={isFindLinkOrImg}
        onRequestClose={() => {dispatch(closeModalWarning())}}
        style={modalStyles}
      >
        <p className="warning">No images or hyperlinks are allowed in the profile. Please remove all src=, img or url tags before saving." [button]</p>
        <Button className="btnModalSave" onClick={() => dispatch(closeModalWarning())}>OK</Button>
      </Modal>
    </div>
  );
};

export default Header;

import React, {useCallback, useEffect, useState} from 'react';
import Modal from 'react-modal';
import {useDispatch, useSelector} from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { HeaderProfileStyles } from "../Profile.styles";
import {Button, Grid} from "@material-ui/core";
import EditIcon1 from "../../../../assets/icons/tribe/edit-icon.svg";
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
  const {codeInIframe, emojiCode, isCurrentUser, isFindLinkOrImg} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);

  return (
    <div className="tribe-profile">
      
         <Grid md={12} xs={12} >
             <div className="tribe-header">
                 <h1>
                     INNOVATE NOW
                 </h1>
                <div className="edit-icon">
                    <img src={EditIcon1} />
                </div>
             </div>
         </Grid>
      </div>
  );
};

export default withStyles(HeaderProfileStyles)(Header);

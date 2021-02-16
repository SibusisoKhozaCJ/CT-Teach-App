import React, { useState } from 'react';

import SendIcon from '@material-ui/icons/Send';
import CodeIcon from '@material-ui/icons/Code';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const useStyles = makeStyles(() => ({
  input: {
    width: '84%',
    borderRadius: '24px',
    padding: '1%',
    marginLeft: 'auto',
    marginRight: '8px',
    border: '1px solid grey',
    backgroundColor: '#f8f7f7',
  },
  iconButton: {
    position: 'absolute',
    right: '2%',
    padding: 10,
  },
  toggleCodeTextBtn: {
    position: 'absolute',
    left: '2%',
    padding: 10,
  },
  textArea: {
    position: 'absolute',
    left: '15%',
    fontSize: '14px',
    padding: '8px',
    height: '40px',
    width: '70%',
    overflow: 'auto',
    outline: 'none',
    '-webkit-box-shadow': 'none',
    '-moz-box-shadow': 'none',
    boxShadow: 'none',
    resize: 'none',
    background: 'black',
    color: '#ffffff',
  },
  textAreaExtend: {
    height: '70px',
  },
}));

const FooterChatRoom = ({ submitMessage, onChange, value }) => {
  const classes = useStyles();
  const [messageType, setMessageType] = useState('text');
  const [focus, setFocus] = useState(false);

  const onKeyPressHandler = event => {
    if (event.key === 'Enter') {
      submitMessage(event);
    }
  };

  const handleClick = () => {
    if (messageType === 'text') {
      setMessageType('code');
    } else {
      setMessageType('text');
    }
  };

  return (
    <footer className={classNames('chat-room-footer', { 'footer-extend': focus })}>
      <IconButton type="submit" className={classes.toggleCodeTextBtn} aria-label="search" onClick={handleClick}>
        {messageType === 'text' ? <TextFieldsIcon /> : <CodeIcon />}
      </IconButton>

      {messageType === 'text' ? (
        <InputBase
          className={classes.input}
          placeholder="Type a message here"
          name="message"
          value={value}
          onChange={onChange}
          type="text"
          onKeyPress={onKeyPressHandler}
        />
      ) : (
        <textarea
          name="message"
          value={value}
          onChange={onChange}
          className={classNames(classes.textArea, { [classes.textAreaExtend]: focus })}
          placeholder="Type a code here"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
      )}

      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
        onClick={messageType === 'text' ? submitMessage : event => submitMessage(event, 'code')}
      >
        <SendIcon />
      </IconButton>
    </footer>
  );
};

FooterChatRoom.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  submitMessage: PropTypes.func.isRequired,
};

export default FooterChatRoom;

import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import CodeIcon from '@material-ui/icons/Code';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useStyles from './styles';

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
    <footer className="chat-room-footer">
      <IconButton
        type="submit"
        className={classNames(classes.toggleCodeTextBtn, { [classes.toggleCodeTextBtnWhite]: messageType !== 'text' })}
        aria-label="search"
        onClick={handleClick}
      >
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
        <div className={classes.textareaBox}>
          <textarea
            name="message"
            value={value}
            onChange={onChange}
            className={classNames(classes.textArea, { [classes.textAreaExtend]: focus })}
            placeholder="Type a code here"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </div>
      )}
      <IconButton
        type="submit"
        className={classNames(classes.iconButton, { [classes.iconButtonWhite]: messageType !== 'text' })}
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

import React from 'react';

import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  input: {
    marginLeft: theme.spacing(1),
    width: '100%',
    flex: 1,
    borderRadius: '24px',
    padding: '1%',
    margin: '0 8px 0 8px',
    border: '1px solid grey',
    backgroundColor: '#f8f7f7',
  },
  iconButton: {
    position: 'absolute',
    right: '2%',
    padding: 10,
  },
}));

const FooterChatRoom = ({ submitMessage, onChange, value }) => {
  const classes = useStyles();

  const onKeyPressHandler = event => {
    if (event.key === 'Enter') {
      submitMessage(event);
    }
  };

  return (
    <div className="chat-room-footer">
      <InputBase
        className={classes.input}
        placeholder="Type a message here"
        name="message"
        value={value}
        onChange={onChange}
        type="text"
        onKeyPress={onKeyPressHandler}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={submitMessage}>
        <SendIcon />
      </IconButton>
    </div>
  );
};

export default FooterChatRoom;

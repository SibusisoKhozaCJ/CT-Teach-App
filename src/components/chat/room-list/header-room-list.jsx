import React from 'react';
import { useDispatch } from 'react-redux';

import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import * as action from '../../../redux/actions/chat-action';
import { ChatSvg } from '../../../shared/svgs/menu-items';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    right: 0,
    color: 'black',
  },
}));

const HeaderRoomList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClickHideChat = () => {
    dispatch(action.hideChat());
  };

  return (
    <div className="room-list-header">
      <div className="chat-icon-header">
        <ChatSvg />
        <p>CHAT</p>
      </div>
      <IconButton color="primary" aria-label="upload picture" component="span" className={classes.root}>
        <CloseIcon fontSize="large" onClick={handleClickHideChat} />
      </IconButton>
    </div>
  );
};

export default HeaderRoomList;
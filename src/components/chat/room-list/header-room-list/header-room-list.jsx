import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import { hideChat } from '../../../../redux/actions/chat-action';
import { ChatSvg } from '../../../../shared/svgs/menu-items';
import useStyles from './styles';

const HeaderRoomList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClickHideChat = useCallback(() => {
    dispatch(hideChat());
  }, []);

  return (
    <div className="room-list-header">
      <div className="chat-icon-header">
        <ChatSvg />
        <p>CHAT</p>
      </div>
      <IconButton color="primary" aria-label="upload picture" component="span" className={classes.root}>
        <CloseIcon className={classes.svgCloseIcon} onClick={handleClickHideChat} />
      </IconButton>
    </div>
  );
};

export default HeaderRoomList;

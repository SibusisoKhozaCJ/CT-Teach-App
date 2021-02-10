import React from 'react';
import { useDispatch } from 'react-redux';

import TitleIcon from '@material-ui/icons/Title';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import * as action from '../../../redux/actions/chat-action';
import { ChatSvg } from '../../../shared/svgs/menu-items';

const HeaderRoomList = () => {
  const dispatch = useDispatch();

  const handleClickHideChat = () => {
    dispatch(action.hideChat());
  };

  return (
    <div className="room-list-header">
      <TitleIcon style={{ color: '#FBDD3F' }} />
      <div className="chat-icon-header">
        <ChatSvg />
        <p>CHAT</p>
      </div>
      <IconButton color="primary" aria-label="upload picture" component="span">
        <CloseIcon className="close-btn" fontSize="large" onClick={handleClickHideChat} />
      </IconButton>
    </div>
  );
};

export default HeaderRoomList;

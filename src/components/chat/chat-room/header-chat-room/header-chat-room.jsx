import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import { increaseLimit } from '../../../../redux/actions/chat-action';
import useStyles from './styles';
import { selectedChat, getAvatar } from '../../../../redux/selectors/selectors';

const HeaderChatRoom = ({ exitChat, avatar }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { selectedRoom, rooms, idRoom } = useSelector(selectedChat);

  const fetchMoreMessages = useCallback(() => {
    dispatch(increaseLimit());
  }, []);

  return (
    <header className="chat-room-header">
      <div className={classes.wrapper}>
        <IconButton
          onClick={exitChat}
          color="primary"
          aria-label="upload picture"
          component="span"
          className={classes.backBtn}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.65234 15.2188L0.0839844 11.4395L11.1055 0.839844L21.3008 11.6855L17.3984 15.1836L10.8945 8.01172L3.65234 15.2188Z"
              fill="#43D4DD"
            />
          </svg>
        </IconButton>
        <Avatar
          alt={`Avatar n°${1}`}
          className={classes.avatar}
        >
          {rooms.length > 0 && selectedRoom ? String.fromCodePoint(parseInt(rooms.filter( room => room.idRoom === idRoom)[0].emojiCode.match(/\d+/i))) : null}
        </Avatar>
        <p className={classes.roomName}>{selectedRoom}</p>
      </div>
      <div className={classes.wrapper}>
        {/* <IconButton type="button" onClick={fetchMoreMessages}>
          <CloudDownloadIcon className={classes.cloudDownloadIcon} />
        </IconButton> */}
        <MoreVertIcon className={classes.dots} />
      </div>
    </header>
  );
};

HeaderChatRoom.propTypes = {
  exitChat: PropTypes.func.isRequired,
};

export default HeaderChatRoom;

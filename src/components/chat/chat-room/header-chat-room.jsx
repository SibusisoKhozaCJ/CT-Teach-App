import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import * as actions from '../../../redux/actions/chat-action';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    '& span': {
      fontWeight: 'bold',
    },
  },
  avatar: {
    background: '#43D4DD',
    border: '2px solid #e83e8c',
  },
  dots: {
    color: '#43D4DD',
  },
  backBtn: {
    transform: 'rotate(-90deg);',
  },
  roomName: {
    fontWeight: 'bold',
    margin: 0,
    fontSize: '18px',
  },
  arrowAvatarWrapper: {
    display: 'flex',
  },
  cloudDownloadIcon: {
    color: '#43D4DD',
    fontSize: '1.7rem',
  },
}));

const HeaderChatRoom = ({ exitChat }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentRoomName } = useSelector(state => state.chat);
  const fetchMoreMessages = () => dispatch(actions.increaseLimit());

  return (
    <header className="chat-room-header">
      <div className={classes.arrowAvatarWrapper}>
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
        <Avatar alt={`Avatar n°${1}`} src={`/static/images/avatar/${1}.jpg`} className={classes.avatar} />
      </div>
      <IconButton type="button" onClick={fetchMoreMessages}>
        <CloudDownloadIcon className={classes.cloudDownloadIcon} />
      </IconButton>
      <p className={classes.roomName}>{currentRoomName}</p>
      <MoreVertIcon className={classes.dots} />
    </header>
  );
};

HeaderChatRoom.propTypes = {
  exitChat: PropTypes.func.isRequired,
};

export default HeaderChatRoom;

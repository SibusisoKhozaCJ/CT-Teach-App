import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';

import { fetchRooms } from '../../../../redux/actions/chat-action';
import HeaderRoomList from '../header-room-list/header-room-list';
import SearchRoomList from '../search-room-list/search-room-list';
import RoomList from '../room-list/room-list';
import useStyles from './styles';
import { CHAT_STATUS } from '../../../../redux/constants/chat-types';

function RoomBox() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { chatStatus, rooms, loadingRooms, errorLoadingRooms } = useSelector(state => state.chat);

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  return (
    <div className={classNames('room-list-wrapper', { hidden: chatStatus !== CHAT_STATUS.roomlist })}>
      <HeaderRoomList />
      <SearchRoomList />
      {errorLoadingRooms && <p>Error: Failed to load chats</p>}
      {loadingRooms ? (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <RoomList rooms={rooms} />
      )}
    </div>
  );
}

export default RoomBox;

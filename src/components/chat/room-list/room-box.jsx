import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';

import * as actions from '../../../redux/actions/chat-action';
import HeaderRoomList from './header-room-list';
import SearchRoomList from './search-room-list';
import RoomList from './room-list';

const useStyles = makeStyles(() => ({
  spinner: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

function RoomBox() {
  const classes = useStyles();
  const { chatStatus, rooms, loadingRooms } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchRooms());
    dispatch(actions.updatePrivateChatsOn());
    dispatch(actions.updateJoinedTribeChatsOn());
  }, []);

  return (
    <div className={classNames('room-list-wrapper', { hidden: chatStatus !== 'roomlist' })}>
      <HeaderRoomList />
      <SearchRoomList />
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

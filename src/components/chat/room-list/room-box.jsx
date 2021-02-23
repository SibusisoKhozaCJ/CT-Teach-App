import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import firebase from 'firebase';

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
  const [unreadMessages, setUnreadMessages] = useState([]);
  const dispatch = useDispatch();

  const snapshotToArray = snapshot => {
    const returnArr = [];

    snapshot.forEach(childSnapshot => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });

    return returnArr;
  };

  useEffect(() => {
    firebase
      .database()
      .ref('messages/')
      .orderByChild('status')
      .equalTo('unread')
      .on('value', snapshot => {
        const messageArray = snapshotToArray(snapshot);

        // JUST FOR DEMO

        if (messageArray.length > 1000) {
          console.log('STOP COUNT UNREAD MESSAGE');
          setUnreadMessages([]);
        } else {
          setUnreadMessages(messageArray);
        }
      });
  }, []);

  useEffect(() => {
    let counterUnreadMessages = 0;
    if (rooms.length !== 0) {
      rooms.forEach(room => {
        const theRoom = room;
        theRoom.unreadMessages = 0;
        unreadMessages.forEach(message => {
          if (theRoom.idRoom === message.idRoom) {
            counterUnreadMessages += 1;
            theRoom.unreadMessages += 1;
          }
        });
      });
    }
    dispatch(actions.setUnreadMessageCount(counterUnreadMessages));
  }, [rooms, unreadMessages]);

  useEffect(() => {
    dispatch(actions.fetchRooms());
    dispatch(actions.updatePrivateChatsOn());
    dispatch(actions.updateJoinedTribeChatsOn());
  }, []);

  const onEnter = (idRoom, name) => dispatch(actions.enterChatRoom(idRoom, name));

  return (
    <div className={classNames('room-list-wrapper', { hidden: chatStatus !== 'roomlist' })}>
      <HeaderRoomList />
      <SearchRoomList />
      {loadingRooms ? (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      ) : (
        <RoomList rooms={rooms} onEnter={onEnter} />
      )}
    </div>
  );
}

export default RoomBox;

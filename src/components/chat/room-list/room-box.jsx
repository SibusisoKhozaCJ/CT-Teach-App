import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';
import classNames from 'classnames';
import firebase from 'firebase';

import { getCookies } from '../../../shared/lib/authentication';
import * as actions from '../../../redux/actions/chat-action';
import HeaderRoomList from './header-room-list';
import SearchRoomList from './search-room-list';
import { enterChatRoom, snapshotToArray } from '../../../shared/lib/chat';
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
  const chatStatus = useSelector(state => state.chat.chatStatus);
  const [rooms, setRooms] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const [unreadMessages, setUnreadMessages] = useState([]);
  const dispatch = useDispatch();
  const { userId, userFirstName } = getCookies();
  const refContainer = useRef([]);
  const fetchStatus = {
    fetchPrivateRooms: false,
    fetchUserTribe: false,
    fetchUserJoinedTribe: false,
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

  const updateRooms = messages => {
    refContainer.current.push(...messages);

    if (fetchStatus.fetchPrivateRooms && fetchStatus.fetchUserTribe && fetchStatus.fetchUserJoinedTribe) {
      const filteredRooms = _.uniqBy(refContainer.current, 'idRoom');
      setRooms([]);
      setRooms(filteredRooms);
      setShowLoading(false);
    }
  };

  const getTribeInfo = tribeCode =>
    firebase
      .database()
      .ref(`Tribes/${tribeCode}`)
      .once('value', snapshot => snapshot);

  const getTribeInfoAsync = tribeCode =>
    new Promise(res => {
      firebase
        .database()
        .ref(`Tribes/${tribeCode}`)
        .on('value', snapshot => {
          res(snapshot.val());
        });
    });

  const fetchPrivateChats = () => {
    firebase
      .database()
      .ref(`Users/${userId}/friends`)
      .orderByChild('status')
      .equalTo('accepted')
      .on('value', snapshot => {
        const userFriends = snapshot.val();
        const privateChats = [];
        if (userFriends) {
          userFriends.forEach(friend => {
            privateChats.push({
              name: `${friend.firstname} ${friend.lastname}`,
              idRoom: friend.idRoom,
              isPrivateRoom: true,
              unreadMessages: 0,
            });
          });
          fetchStatus.fetchPrivateRooms = true;
          updateRooms(privateChats);
        } else {
          fetchStatus.fetchPrivateRooms = true;
          updateRooms([]);
        }
      });
  };

  const fetchOwnTribeChat = () => {
    firebase
      .database()
      .ref(`Users/${userId}/tribe_code`)
      .on('value', async snapshot => {
        const userTribe = snapshot.val();
        const tribesChats = [];
        if (userTribe) {
          const tribe = (await getTribeInfo(userTribe)).val();
          tribesChats.push({
            name: tribe.name,
            idRoom: tribe.code,
            isPrivateRoom: false,
            unreadMessages: 0,
          });
          fetchStatus.fetchUserTribe = true;
          updateRooms(tribesChats);
        } else {
          fetchStatus.fetchUserTribe = true;
          updateRooms([]);
        }
      });
  };

  const fetchJoinedTribeChats = () => {
    firebase
      .database()
      .ref(`Users/${userId}/tribe_joined`)
      .on('value', snapshot => {
        const tribesJoined = snapshot.val();
        if (tribesJoined) {
          const actionsPromises = tribesJoined.map(getTribeInfoAsync);
          const tribesJoinedChats = [];
          Promise.all(actionsPromises)
            .then(tribes => {
              tribes.forEach(tribe => {
                tribesJoinedChats.push({
                  name: tribe.name,
                  idRoom: tribe.code,
                  isPrivateRoom: false,
                  unreadMessages: 0,
                });
              });
              fetchStatus.fetchUserJoinedTribe = true;
              updateRooms(tribesJoinedChats);
            })
            .catch(error => {
              console.error('Failed get tribe info', error.message);
            });
        } else {
          fetchStatus.fetchUserJoinedTribe = true;
          updateRooms([]);
        }
      });
  };

  useEffect(() => {
    fetchPrivateChats();
    fetchOwnTribeChat();
    fetchJoinedTribeChats();
  }, []);

  const onEnter = (idRoom, name) => {
    const roomInfo = {
      dispatch,
      firstname: userFirstName,
      idRoom,
      roomname: name,
    };

    enterChatRoom(roomInfo);
  };

  return (
    <div className={classNames('room-list-wrapper', { hidden: chatStatus !== 'roomlist' })}>
      <HeaderRoomList />
      <SearchRoomList />
      {showLoading ? (
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

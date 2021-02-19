import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import _ from 'lodash';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';

import firebase from 'firebase';
import { getCookies } from '../../../shared/lib/authentication';
import HeaderRoomList from './header-room-list';
import SearchRoomList from './search-room-list';
import { enterChatRoom } from '../../../shared/lib/chat';

const useStyles = makeStyles(theme => ({
  root: {
    height: '500px',
    overflow: 'auto',
    '& span': {
      fontWeight: 'bold',
    },
    [theme.breakpoints.down('xs')]: {
      height: '570px',
      '& span': {
        fontSize: '16px !important',
      },
    },
  },
  spinner: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  },
  avatar: {
    background: '#43D4DD',
    border: '2px solid #e83e8c',
  },
  dots: {
    color: '#43D4DD',
  },
}));

function RoomList() {
  const classes = useStyles();
  const chatStatus = useSelector(state => state.chat.chatStatus);
  const [rooms, setRooms] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const dispatch = useDispatch();
  const { userId, userFirstName } = getCookies();
  const refContainer = useRef([]);
  const fetchStatus = {
    fetchPrivateRooms: false,
    fetchUserTribe: false,
    fetchUserJoinedTribe: false,
  };

  const updateRooms = chats => {
    refContainer.current.push(...chats);

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

  useEffect(() => {
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
            });
          });
          fetchStatus.fetchPrivateRooms = true;
          updateRooms(privateChats);
        } else {
          fetchStatus.fetchPrivateRooms = true;
          updateRooms([]);
        }
      });
  }, []);

  useEffect(() => {
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
          });
          fetchStatus.fetchUserTribe = true;
          updateRooms(tribesChats);
        } else {
          fetchStatus.fetchUserTribe = true;
          updateRooms([]);
        }
      });
  }, []);

  useEffect(() => {
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
  }, []);

  const enterChatRoomHandler = (idRoom, name) => {
    const roomInfo = {
      dispatch,
      firstname: userFirstName,
      idRoom,
      roomname: name,
    };

    enterChatRoom(roomInfo);
  };

  const roomListBody = (
    <List dense className={classes.root}>
      {rooms.map(room => {
        const labelId = `checkbox-list-secondary-label-${room.name}`;
        return (
          <ListItem key={room.idRoom} button divider onClick={() => enterChatRoomHandler(room.idRoom, room.name)}>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${room.name + 1}`}
                src={`/static/images/avatar/${room.name + 1}.jpg`}
                className={classes.avatar}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${room.name}`} className={classes.textItem} />
            <ListItemSecondaryAction>
              <MoreVertIcon className={classes.dots} />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );

  const spinner = (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );

  return (
    <div className={classNames('room-list-wrapper', { hidden: chatStatus !== 'roomlist' })}>
      <HeaderRoomList />
      <SearchRoomList />
      {showLoading ? spinner : roomListBody}
    </div>
  );
}

export default RoomList;

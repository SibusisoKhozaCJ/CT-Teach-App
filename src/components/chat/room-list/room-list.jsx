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
import Moment from 'moment';
import classNames from 'classnames';
import firebase from 'firebase';

import * as actions from '../../../redux/actions/chat-action';
import { getCookies } from '../../../shared/lib/authentication';
import HeaderRoomList from './header-room-list';
import SearchRoomList from './search-room-list';

const useStyles = makeStyles(theme => ({
  root: {
    height: '490px',
    overflow: 'auto',
    '& span': {
      fontWeight: 'bold',
    },
    [theme.breakpoints.down('xs')]: {
      height: '570px',
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
  const [firstname, setFirstName] = useState('');
  const [rooms, setRooms] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const dispatch = useDispatch();
  const { userId, userFirstName } = getCookies();
  const refContainer = useRef([]);

  useEffect(() => {
    setFirstName(userFirstName);
    const fetchData = async () => {
      firebase
        .database()
        .ref('Users/' + userId)
        .once('value', snapshot => {
          const item = snapshot.val();
          if (item.tribe_code) {
            refContainer.current.push({
              name: item.tribe_code,
              idRoom: item.tribe_code,
              isPrivateRoom: false,
            });
          }

          if (item.tribe_joined) {
            item.tribe_joined.forEach(el => {
              refContainer.current.push({
                name: el,
                idRoom: el,
                isPrivateRoom: false,
              });
            });
          }

          setRooms([]);
          setRooms(refContainer.current);
          setShowLoading(false);
        });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      firebase
        .database()
        .ref('Users/' + userId + '/friends')
        .orderByChild('status')
        .equalTo('accepted')
        .on('value', snapshot => {
          const item = snapshot.val();

          if (item) {
            item.forEach(el => {
              refContainer.current.push({
                name: `${el.firstname} ${el.lastname}`,
                idRoom: el.idRoom,
                isPrivateRoom: true,
              });
            });
          }

          const currentUserPrivateRooms = _.uniqBy(refContainer.current, 'idRoom');
          setRooms([]);
          setRooms(currentUserPrivateRooms);
          setShowLoading(false);
        });
    };

    fetchData();
  }, []);

  const snapshotToArray = snapshot => {
    const returnArr = [];

    snapshot.forEach(childSnapshot => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });

    return returnArr;
  };

  const enterChatRoom = (roomname, personalData, isPrivateRoom) => {
    const chat = {
      roomname: '',
      firstname: '',
      message: '',
      date: '',
      type: '',
    };
    chat.roomname = roomname;
    chat.firstname = firstname;
    chat.date = Moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
    chat.message = `${firstname} enter the room`;
    chat.type = 'join';
    const newMessage = firebase.database().ref('chats/').push();
    newMessage.set(chat);

    firebase
      .database()
      .ref('roomusers/')
      .orderByChild('roomname')
      .equalTo(roomname)
      .on('value', snapshot => {
        let roomuser = [];
        roomuser = snapshotToArray(snapshot);
        const user = roomuser.find(x => x.firstname === firstname);
        if (user !== undefined) {
          const userRef = firebase.database().ref('roomusers/' + user.key);
          userRef.update({ status: 'online' });
        } else {
          const newroomuser = { roomname: '', firstname: '', status: '' };
          newroomuser.roomname = roomname;
          newroomuser.firstname = firstname;
          newroomuser.status = 'online';
          const newRoomUser = firebase.database().ref('roomusers/').push();
          newRoomUser.set(newroomuser);
        }
      });

    dispatch(actions.setChatRoom(roomname));

    if (isPrivateRoom) {
      dispatch(actions.setCurrentRoomRoom(personalData));
    } else {
      dispatch(actions.setCurrentRoomRoom(roomname));
    }
  };

  const roomListBody = (
    <List dense className={classes.root}>
      {rooms.map(room => {
        const labelId = `checkbox-list-secondary-label-${room.name}`;
        return (
          <ListItem
            key={room.idRoom}
            button
            onClick={() => {
              enterChatRoom(room.idRoom, room.name, room.isPrivateRoom);
            }}
          >
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

  const bodyRoomList = showLoading ? spinner : roomListBody;

  return (
    <div className={classNames('room-list-wrapper', { hidden: chatStatus !== 'roomlist' })}>
      <HeaderRoomList />
      <SearchRoomList />
      {bodyRoomList}
    </div>
  );
}

export default RoomList;

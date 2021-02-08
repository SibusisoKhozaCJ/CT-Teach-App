import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CircularProgress from '@material-ui/core/CircularProgress';
import Moment from 'moment';
import firebase from "firebase";

import { setChatRoom } from '../../../redux/actions/chat-action';
import { getCookies } from '../../../shared/lib/authentication';
import FooterRoomList from './FooterRoomList';
import HeaderRoomList from './HeaderRoomList';

const useStyles = makeStyles(theme => ({
  listItem: {
    borderBottom: '1px solid blue',
  },
}));

function RoomList() {
  const classes = useStyles();
  const [firstname, setFirstName] = useState('');
  const [room, setRoom] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const { userId, userFirstName } = getCookies();
    setFirstName(userFirstName);
    const userTribes = [];
    const fetchData = async () => {
      firebase
        .database()
        .ref('Users/' + userId)
        .once('value', snapshot => {
          const item = snapshot.val();
          if (item.tribe_code) {
            userTribes.push(item.tribe_code);
          }

          if (item.tribe_joined) {
            item.tribe_joined.forEach(item => userTribes.push(item));
          }

          setRoom([]);
          setRoom(userTribes);
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

  const enterChatRoom = roomname => {
    const chat = { roomname: '', firstname: '', message: '', date: '', type: '' };
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

    dispatch(setChatRoom(roomname));
  };

  return (
    <>
      {showLoading && <CircularProgress />}
      <FooterRoomList />
      <List dense component="div" role="list">
        {room.map((item, idx) => {
          return (
            <ListItem
              key={idx}
              role="listitem"
              button
              className={classes.listItem}
              onClick={() => {
                enterChatRoom(item);
              }}
            >
              {item}
              <MoreVertIcon />
            </ListItem>
          );
        })}
      </List>
      <HeaderRoomList />
    </>
  );
}

export default RoomList;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import ScrollToBottom from 'react-scroll-to-bottom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import randomize from 'randomatic';
import firebase from 'firebase';

import * as actions from '../../../redux/actions/chat-action';
import { getCookies } from '../../../shared/lib/authentication';
import HeaderChat from './header-chat-room';
import FooterChatRoom from './footer-chat-room';

const useStyles = makeStyles(() => ({
  spinner: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
  },
}));

function ChatRoom() {
  const classes = useStyles();
  const [chats, setChats] = useState([]);
  const [firstname, setFirstName] = useState('');
  const [roomname, setRoomname] = useState('');
  const [newchat, setNewchat] = useState({
    roomname: '',
    firstname: '',
    message: '',
    date: '',
    type: '',
  });
  const dispatch = useDispatch();
  const { room, chatStatus } = useSelector(state => state.chat);
  const { userFirstName } = getCookies();
  const [showLoading, setShowLoading] = useState(true);

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
    const fetchData = async () => {
      setFirstName(userFirstName);
      setRoomname(room);
      firebase
        .database()
        .ref('chats/')
        .limitToLast(20)
        .orderByChild('roomname')
        .equalTo(roomname)
        .on('value', snapshot => {
          setChats([]);
          setChats(snapshotToArray(snapshot));
          setShowLoading(false);
        });
    };

    fetchData();
  }, [room, roomname, userFirstName]);

  const submitMessage = e => {
    e.preventDefault();

    if (!newchat.message) {
      return;
    }

    const chat = newchat;
    chat.roomname = roomname;
    chat.firstname = firstname;
    chat.date = Moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
    chat.type = 'message';
    const newMessage = firebase.database().ref('chats/').push();
    newMessage.set(chat);
    setNewchat({
      roomname: '',
      firstname: '',
      message: '',
      date: '',
      type: '',
    });
  };

  const onChange = e => {
    e.persist();
    setNewchat({ ...newchat, [e.target.name]: e.target.value });
  };

  const exitChat = () => {
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
    chat.message = `${firstname} leave the room`;
    chat.type = 'exit';
    const newMessage = firebase.database().ref('chats/').push();
    newMessage.set(chat);

    firebase
      .database()
      .ref('roomusers/')
      .orderByChild('roomname')
      .equalTo(roomname)
      .once('value', snapshot => {
        let roomuser = [];
        roomuser = snapshotToArray(snapshot);
        const user = roomuser.find(x => x.firstname === firstname);
        if (user !== undefined) {
          const userRef = firebase.database().ref('roomusers/' + user.key);
          userRef.update({ status: 'offline' });
        }
      });

    dispatch(actions.setRoomLIst());
    dispatch(actions.clearCurrentRoom());
  };

  const bodyChatRoom = (
    <ScrollToBottom className="ChatContent">
      {chats.map(item => (
        <div key={randomize('A', 4)} className="MessageBox">
          {item.type === 'join' || item.type === 'exit' ? (
            <div className="ChatStatus">
              <span className="ChatDate">{item.date}</span>
              <span className="ChatContentCenter">{item.message}</span>
            </div>
          ) : (
            <div className="ChatMessage">
              <div className={`${item.firstname === firstname ? 'RightBubble' : 'LeftBubble'}`}>
                {item.firstname === firstname ? (
                  <span className="MsgName">Me</span>
                ) : (
                  <span className="MsgName">{item.firstname}</span>
                )}
                <span className="MsgDate"> at {item.date}</span>
                <p>{item.message}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </ScrollToBottom>
  );

  const spinner = (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );

  const bodyChatRoomList = showLoading ? spinner : bodyChatRoom;

  return (
    <div className={classNames({ hidden: chatStatus !== 'chatroom' })}>
      <HeaderChat exitChat={exitChat} />
      {bodyChatRoomList}
      <FooterChatRoom submitMessage={submitMessage} onChange={onChange} value={newchat.message} />
    </div>
  );
}

export default ChatRoom;

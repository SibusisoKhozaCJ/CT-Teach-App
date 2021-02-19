import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import ScrollToBottom from 'react-scroll-to-bottom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import randomize from 'randomatic';
import firebase from 'firebase';

import { getCookies } from '../../../shared/lib/authentication';
import HeaderChat from './header-chat-room';
import FooterChatRoom from './footer-chat-room';
import * as actions from '../../../redux/actions/chat-action';

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
  const [newchat, setNewchat] = useState({
    idRoom: '',
    roomname: '',
    firstname: '',
    message: '',
    date: '',
    type: '',
    code: false,
  });
  const dispatch = useDispatch();
  const { idRoom, currentRoomName, chatStatus } = useSelector(state => state.chat);
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
    firebase
      .database()
      .ref('chats/')
      .limitToLast(20)
      .orderByChild('idRoom')
      .equalTo(idRoom)
      .on('value', snapshot => {
        setChats([]);
        setChats(snapshotToArray(snapshot));
        setShowLoading(false);
      });
  }, [idRoom, userFirstName]);

  const submitMessage = (e, code) => {
    e.preventDefault();

    if (!newchat.message) {
      return;
    }

    const chat = newchat;
    chat.idRoom = idRoom;
    chat.roomname = currentRoomName;
    chat.firstname = userFirstName;
    chat.date = Moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
    chat.type = 'message';
    chat.code = !!code;
    const newMessage = firebase.database().ref('chats/').push();
    newMessage.set(chat);
    setNewchat({
      idRoom: '',
      roomname: '',
      firstname: '',
      message: '',
      date: '',
      type: '',
      code: false,
    });
  };

  const onChange = e => {
    e.persist();
    setNewchat({ ...newchat, [e.target.name]: e.target.value });
  };

  const exitChatHandler = () => {
    dispatch(actions.setRoomLIst());
    dispatch(actions.clearCurrentRoomName());
  };

  const memoizedChats = useMemo(
    () => (
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
                <div
                  className={classNames({
                    RightBubble: !item.code && item.firstname === userFirstName,
                    LeftBubble: !item.code && item.firstname !== userFirstName,
                    RightBubbleBlack: item.code && item.firstname === userFirstName,
                    LeftBubbleBack: item.code && item.firstname !== userFirstName,
                    codeBlack: item.code,
                  })}
                >
                  {item.firstname === userFirstName ? (
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
    ),
    [chats, userFirstName],
  );

  const spinner = (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );

  return (
    <div className={classNames({ hidden: chatStatus !== 'chatroom' })}>
      <HeaderChat exitChat={exitChatHandler} />
      {showLoading ? spinner : memoizedChats}
      <FooterChatRoom submitMessage={submitMessage} onChange={onChange} value={newchat.message} />
    </div>
  );
}

export default ChatRoom;

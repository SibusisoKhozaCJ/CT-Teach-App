import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrollToBottom from 'react-scroll-to-bottom';
import classNames from 'classnames';
import firebase from 'firebase';
import { makeStyles } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

import { getCookies } from '../../../shared/lib/authentication';
import FooterChatRoom from './footer-chat-room';
import * as actions from '../../../redux/actions/chat-action';
import HeaderChatRoom from './header-chat-room';
import MessageList from './message-list';
import { sendMessage } from '../../../shared/lib/chat';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    top: '50px',
    width: '100%',
  },
}));

function ChatRoom() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { idRoom, currentRoomName, chatStatus, messages, loadingMessages, limit } = useSelector(state => state.chat);

  const { userFirstName } = getCookies();
  const [newchat, setNewchat] = useState({
    idRoom: '',
    roomname: '',
    firstname: '',
    message: '',
    createdAt: '',
    type: '',
    code: false,
    status: 'unread',
  });

  useEffect(() => {
    dispatch(actions.fetchMessages());
  }, [idRoom, userFirstName, limit]);

  const onChange = e => {
    e.persist();
    setNewchat({
      ...newchat,
      [e.target.name]: e.target.value,
    });
  };

  const exitChatHandler = () => {
    dispatch(actions.clearIdRoom());
    dispatch(actions.clearMessages());
    dispatch(actions.setRoomLIst());
    dispatch(actions.clearCurrentRoomName());
    dispatch(actions.setInitialLimit());
  };

  const submitMessage = (e, code) => {
    e.preventDefault();

    if (!newchat.message) {
      return;
    }

    const chat = newchat;
    chat.idRoom = idRoom;
    chat.roomname = currentRoomName;
    chat.firstname = userFirstName;
    chat.createdAt = firebase.database.ServerValue.TIMESTAMP;
    chat.type = 'message';
    chat.code = !!code;
    sendMessage(chat);
    setNewchat({
      idRoom: '',
      roomname: '',
      firstname: '',
      message: '',
      createdAt: '',
      type: '',
      code: false,
      status: 'unread',
    });
  };

  const memoizedMessage = useMemo(
    () => (
      <ScrollToBottom className="ChatContent" debounce={300}>
        {messages ? (
          <MessageList messages={messages} userFirstName={userFirstName} />
        ) : (
          <div className="no-message">There are no messages ...</div>
        )}
      </ScrollToBottom>
    ),
    [messages, userFirstName],
  );

  return (
    <div className={classNames('chat-room', { hidden: chatStatus !== 'chatroom' })}>
      <HeaderChatRoom exitChat={exitChatHandler} />
      {loadingMessages && <LinearProgress className={classes.root} />}
      {memoizedMessage}
      <FooterChatRoom submitMessage={submitMessage} onChange={onChange} value={newchat.message} />
    </div>
  );
}

export default ChatRoom;

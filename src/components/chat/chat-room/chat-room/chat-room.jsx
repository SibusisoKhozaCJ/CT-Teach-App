import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrollToBottom from 'react-scroll-to-bottom';
import classNames from 'classnames';
import firebase from 'firebase';
import LinearProgress from '@material-ui/core/LinearProgress';

import { getCookies } from '../../../../shared/lib/authentication';
import FooterChatRoom from '../footer-chat-room/footer-chat-room';
import {
  fetchMessages,
  clearIdRoom,
  clearMessages,
  setRoomLIst,
  clearCurrentRoomName,
  setInitialLimit,
} from '../../../../redux/actions/chat-action';
import HeaderChatRoom from '../header-chat-room/header-chat-room';
import MessageList from '../message-list/message-list';
import useStyles from './styles';
import { CHAT_STATUS } from '../../../../redux/constants/chat-types';
import { selectedChat } from '../../../../redux/selectors/selectors';

function ChatRoom() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { idRoom, selectedRoom, chatStatus, messages, loadingMessages, limit } = useSelector(selectedChat);
  const initialChat = {
    idRoom: '',
    roomname: '',
    firstname: '',
    message: '',
    createdAt: '',
    type: '',
    code: false,
    status: 'unread',
  };

  const { userFirstName } = getCookies();
  const [newchat, setNewchat] = useState(initialChat);

  useEffect(() => {
    dispatch(fetchMessages());
  }, [idRoom, userFirstName, limit]);

  const onChange = useCallback(e => {
    e.persist();
    setNewchat({
      ...newchat,
      [e.target.name]: e.target.value,
    });
  }, []);

  const exitChatHandler = useCallback(() => {
    dispatch(clearIdRoom());
    dispatch(clearMessages());
    dispatch(setRoomLIst());
    dispatch(clearCurrentRoomName());
    dispatch(setInitialLimit());
  }, []);

  const submitMessage = (e, code) => {
    e.preventDefault();

    if (!newchat.message.trim()) {
      return;
    }

    const chat = newchat;
    chat.idRoom = idRoom;
    chat.roomname = selectedRoom;
    chat.firstname = userFirstName;
    chat.createdAt = firebase.database.ServerValue.TIMESTAMP;
    chat.type = 'message';
    chat.code = !!code;
    const newMessage = firebase.database().ref('messages/').push();
    newMessage.set(chat);
    setNewchat(initialChat);
  };

  const memoizedMessage = useMemo(
    () => (
      <ScrollToBottom className="ChatContent">
        {messages.length !== 0 ? (
          <MessageList messages={messages} userFirstName={userFirstName} />
        ) : (
          <div className="no-message">There are no messages ...</div>
        )}
      </ScrollToBottom>
    ),
    [messages, userFirstName],
  );

  return (
    <div className={classNames('chat-room', { hidden: chatStatus !== CHAT_STATUS.chatroom })}>
      <HeaderChatRoom exitChat={exitChatHandler} />
      {loadingMessages && <LinearProgress className={classes.root} />}
      {memoizedMessage}
      <FooterChatRoom submitMessage={submitMessage} onChange={onChange} value={newchat.message} />
    </div>
  );
}

export default ChatRoom;

import React from 'react';
import { useSelector } from 'react-redux';

import RoomList from './room-list/RoomList';
import ChatRoom from './chat-room/ChatRoom';


const Chat = () => {
  const chatStatus = useSelector(state => state.chat.chatStatus);
  let chat;

  if (chatStatus === 'roomlist') {
    chat = <RoomList />;
  } else if (chatStatus === 'chatroom') {
    chat = <ChatRoom />;
  }

  return (
      <div className="chat-container">{chat}</div>
  );
};

export default Chat;

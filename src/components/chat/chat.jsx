import React from 'react';
import { useSelector } from 'react-redux';

import RoomList from './room-list/room-list';
import ChatRoom from './chat-room/chat-room';

const Chat = () => {
  const { isVisibleChat } = useSelector(state => state.chat);

  return (
    <div className={`chat-container ${isVisibleChat ? 'openChat' : 'closeChat'}`}>
      <RoomList />
      <ChatRoom />
    </div>
  );
};

export default Chat;

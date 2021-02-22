import React from 'react';
import { useSelector } from 'react-redux';

import RoomBox from './room-list/room-box';
import ChatRoom from './chat-room/chat-room';

const Chat = () => {
  const { isVisibleChat } = useSelector(state => state.chat);

  return (
    <div className={`chat-container ${isVisibleChat ? 'openChat' : 'closeChat'}`}>
      <RoomBox />
      <ChatRoom />
    </div>
  );
};

export default Chat;

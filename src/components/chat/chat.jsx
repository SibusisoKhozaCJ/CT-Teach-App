import React from 'react';
import { useSelector } from 'react-redux';

import RoomBox from './room-list/room-box/room-box';
import ChatRoom from './chat-room/chat-room/chat-room';
import { selectedChat } from '../../redux/selectors/selectors';

const Chat = () => {
  const { isVisibleChat } = useSelector(selectedChat);

  return (
    <div className={`chat-container ${isVisibleChat ? 'openChat' : 'closeChat'}`}>
      <RoomBox />
      <ChatRoom />
    </div>
  );
};

export default Chat;

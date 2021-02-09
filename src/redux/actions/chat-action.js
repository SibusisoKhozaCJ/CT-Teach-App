import * as actionTypes from '../constants/chat-types';

export const setRoomLIst = () => ({
  type: actionTypes.SET_ROOM_LIST,
  chatStatus: 'roomlist',
});

export const setChatRoom = rooname => ({
  type: actionTypes.SET_CHAT_ROOM,
  chatStatus: 'chatroom',
  room: rooname,
});

export const setCurrentRoomRoom = currentRoom => ({
  type: actionTypes.SET_CURRENT_ROOM,
  currentRoom,
});

export const clearCurrentRoom = () => ({
  type: actionTypes.CLEAR_CURRENT_ROOM,
});

export const showChat = () => ({
  type: actionTypes.SHOW_CHAT,
});

export const hideChat = () => ({
  type: actionTypes.HIDE_CHAT,
});

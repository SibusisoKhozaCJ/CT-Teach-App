import * as actionTypes from '../constants/chat-types';

export const setRoomLIst = () => ({
  type: actionTypes.SET_ROOM_LIST,
  chatStatus: 'roomlist',
});

export const setChatRoom = idRoom => ({
  type: actionTypes.SET_CHAT_ROOM,
  chatStatus: 'chatroom',
  idRoom,
});

export const setCurrentRoomName = currentRoomName => ({
  type: actionTypes.SET_CURRENT_ROOM_NAME,
  currentRoomName,
});

export const clearCurrentRoomName = () => ({
  type: actionTypes.CLEAR_CURRENT_ROOM_NAME,
});

export const showChat = () => ({
  type: actionTypes.SHOW_CHAT,
});

export const hideChat = () => ({
  type: actionTypes.HIDE_CHAT,
});

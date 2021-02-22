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

export const clearIdRoom = () => ({
  type: actionTypes.CLEAR_ID_ROOM,
});

export const showChat = () => ({
  type: actionTypes.SHOW_CHAT,
});

export const hideChat = () => ({
  type: actionTypes.HIDE_CHAT,
});

export const setMessages = messages => ({
  type: actionTypes.SET_MESSAGES,
  payload: messages,
});

export const clearMessages = () => ({
  type: actionTypes.CLEAR_MESSAGES,
});

export const setUnreadMessageCount = count => ({
  type: actionTypes.SET_UNREAD_MESSAGES_COUNT,
  payload: count,
});

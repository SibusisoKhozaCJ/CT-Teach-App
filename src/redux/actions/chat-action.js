import { SET_ROOMLIST, SET_CHATROOM } from '../constants/chat-types';

export function setRoomLIst() {
  return {
    type: SET_ROOMLIST,
    chatStatus: 'roomlist',
  };
}

export function setChatRoom(rooname) {
  return {
    type: SET_CHATROOM,
    chatStatus: 'chatroom',
    room: rooname,
  };
}

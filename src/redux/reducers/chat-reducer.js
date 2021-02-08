import { SET_ROOMLIST, SET_CHATROOM } from '../constants/chat-types';

const initialState = {
  chatStatus: 'roomlist',
  room: '',
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROOMLIST:
      return {
        ...state,
        chatStatus: action.chatStatus,
      };
    case SET_CHATROOM:
      return {
        ...state,
        chatStatus: action.chatStatus,
        room: action.room,
      };
    default:
      return state;
  }
};

export default chatReducer;

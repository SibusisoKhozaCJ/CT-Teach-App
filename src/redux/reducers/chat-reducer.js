import * as actionTypes from '../constants/chat-types';

const initialState = {
  chatStatus: 'roomlist',
  idRoom: '',
  currentRoomName: '',
  isVisibleChat: false,
  messages: [],
  unreadMessages: 0,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ROOM_LIST:
      return {
        ...state,
        chatStatus: action.chatStatus,
      };
    case actionTypes.SET_CHAT_ROOM:
      return {
        ...state,
        chatStatus: action.chatStatus,
        idRoom: action.idRoom,
      };
    case actionTypes.SET_CURRENT_ROOM_NAME:
      return {
        ...state,
        currentRoomName: action.currentRoomName,
      };
    case actionTypes.CLEAR_CURRENT_ROOM_NAME:
      return {
        ...state,
        currentRoomName: '',
      };
    case actionTypes.CLEAR_ID_ROOM:
      return {
        ...state,
        idRoom: '',
      };
    case actionTypes.SHOW_CHAT:
      return {
        ...state,
        isVisibleChat: true,
      };
    case actionTypes.HIDE_CHAT:
      return {
        ...state,
        isVisibleChat: false,
      };
    case actionTypes.SET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    case actionTypes.CLEAR_MESSAGES:
      return {
        ...state,
        messages: null,
      };
    case actionTypes.SET_UNREAD_MESSAGES_COUNT:
      return {
        ...state,
        unreadMessages: action.payload,
      };
    default:
      return state;
  }
};

export default chatReducer;

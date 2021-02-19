import * as actionTypes from '../constants/chat-types';

const initialState = {
  chatStatus: 'roomlist',
  idRoom: '',
  currentRoomName: '',
  isVisibleChat: true,
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
    default:
      return state;
  }
};

export default chatReducer;

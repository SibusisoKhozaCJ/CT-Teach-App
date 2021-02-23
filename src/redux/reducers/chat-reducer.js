import _ from 'lodash';
import * as actionTypes from '../constants/chat-types';

const filterChats = (state, action) => {
  const roomsJoined = [...state.rooms, ...action.rooms];
  return _.uniqBy(roomsJoined, 'idRoom');
};

const initialState = {
  chatStatus: 'roomlist',
  idRoom: '',
  currentRoomName: '',
  isVisibleChat: false,
  messages: [],
  loadingMessages: true,
  loadingRooms: true,
  rooms: [],
  limit: 20,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ROOM_LIST:
      return {
        ...state,
        chatStatus: action.chatStatus,
      };
    case actionTypes.SET_ROOM_INFO:
      return {
        ...state,
        chatStatus: action.chatStatus,
        idRoom: action.idRoom,
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
    case actionTypes.CLEAR_MESSAGES:
      return {
        ...state,
        messages: null,
      };
    case actionTypes.INCREASE_LIMIT:
      return {
        ...state,
        limit: state.limit + 5,
      };
    case actionTypes.SET_INITIAL_LIMIT:
      return {
        ...state,
        limit: 20,
      };
    case actionTypes.FETCH_MESSAGES_START:
      return {
        ...state,
        loadingMessages: true,
      };
    case actionTypes.FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        loadingMessages: false,
        messages: action.payload,
      };
    case actionTypes.UPDATE_PRIVATE_CHATS:
      return {
        ...state,
        rooms: filterChats(state, action),
      };
    case actionTypes.UPDATE_JOINED_TRIBE_CHATS: {
      return {
        ...state,
        rooms: filterChats(state, action),
      };
    }
    case actionTypes.CLEAR_ROOMS: {
      return {
        ...state,
        rooms: [],
      };
    }
    case actionTypes.FETCH_ROOMS_SUCCESS: {
      return {
        ...state,
        rooms: filterChats(state, action),
        loadingRooms: false,
      };
    }
    default:
      return state;
  }
};

export default chatReducer;

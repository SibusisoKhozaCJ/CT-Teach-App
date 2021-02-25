import _ from 'lodash';
import {
  SET_ROOM_LIST,
  SET_ROOM_INFO,
  CLEAR_CURRENT_ROOM_NAME,
  CLEAR_ID_ROOM,
  SHOW_CHAT,
  HIDE_CHAT,
  CLEAR_MESSAGES,
  INCREASE_LIMIT,
  SET_INITIAL_LIMIT,
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCESS,
  UPDATE_CHATS,
  CLEAR_ROOMS,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAIL,
} from '../constants/chat-types';

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
  errorLoadingRooms: false,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROOM_LIST:
      return {
        ...state,
        chatStatus: action.chatStatus,
      };
    case SET_ROOM_INFO:
      return {
        ...state,
        chatStatus: action.chatStatus,
        idRoom: action.idRoom,
        currentRoomName: action.currentRoomName,
      };
    case CLEAR_CURRENT_ROOM_NAME:
      return {
        ...state,
        currentRoomName: '',
      };
    case CLEAR_ID_ROOM:
      return {
        ...state,
        idRoom: '',
      };
    case SHOW_CHAT:
      return {
        ...state,
        isVisibleChat: true,
      };
    case HIDE_CHAT:
      return {
        ...state,
        isVisibleChat: false,
      };
    case CLEAR_MESSAGES:
      return {
        ...state,
        messages: [],
      };
    case INCREASE_LIMIT:
      return {
        ...state,
        limit: state.limit + 5,
      };
    case SET_INITIAL_LIMIT:
      return {
        ...state,
        limit: 20,
      };
    case FETCH_MESSAGES_START:
      return {
        ...state,
        loadingMessages: true,
      };
    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        loadingMessages: false,
        messages: action.payload,
      };
    case UPDATE_CHATS: {
      return {
        ...state,
        rooms: filterChats(state, action),
      };
    }
    case CLEAR_ROOMS: {
      return {
        ...state,
        rooms: [],
      };
    }
    case FETCH_ROOMS_SUCCESS: {
      return {
        ...state,
        rooms: filterChats(state, action),
        loadingRooms: false,
      };
    }
    case FETCH_ROOMS_FAIL: {
      return {
        ...state,
        errorLoadingRooms: true,
      };
    }
    default:
      return state;
  }
};

export default chatReducer;

import {
  DELETE_TODO,
  FETCHING_TODO_LIST_ERROR,
  FETCHING_TODO_LIST_START,
  FETCHING_TODO_LIST_SUCCESS,
  FETCHING_USER_NOTE_ERROR,
  FETCHING_USER_NOTE_START,
  FETCHING_USER_NOTE_SUCCESS,
  SET_NEW_TODO,
  UPDATE_USER_NOTE,
} from "../constants/todo-types";

const initialState = {
  userToDoList: [],
  userNote: {
    userId: '',
    value: ``,  
    key: '',
  },
  isFirstLoginned: true,
  isFetchingToDo: false,
  isFetchingNote: false,
};

const ToDoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHING_TODO_LIST_START:
      return { ...state, isFetchingToDo: true };
    case FETCHING_TODO_LIST_SUCCESS:
      return { ...state, userToDoList: payload, isFetchingToDo: false };
    case FETCHING_USER_NOTE_START:
      return { ...state, isFetchingNote: true };
    case FETCHING_USER_NOTE_SUCCESS:
      return { ...state, userNote: {...payload}, isFetchingNote: false };

    default:
      return state;
  }
};

export default ToDoReducer;

import {
  FETCHING_TODO_LIST_START,
  FETCHING_TODO_LIST_SUCCESS,
  FETCHING_USER_NOTE_START,
  FETCHING_USER_NOTE_SUCCESS,
} from "../constants/todo-types";

const initialState = {
  userToDoList: [],
  userNote: {
    userId: "",
    value: ``,
    key: "",
  },
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
      return { ...state, userNote: { ...payload }, isFetchingNote: false };

    default:
      return state;
  }
};

export default ToDoReducer;

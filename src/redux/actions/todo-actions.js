import { getCookies } from "../../shared/lib/authentication";
import firebase from "firebase";
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
import { snapshotToArray } from "./chat-action";

const fetchingToDoStart = () => ({
  type: FETCHING_TODO_LIST_START,
});

const fetchingToDoSuccess = (payload) => ({
  type: FETCHING_TODO_LIST_SUCCESS,
  payload,
});

const fetchingToDoError = (payload) => ({
  type: FETCHING_TODO_LIST_ERROR,
  payload,
});

const deleteToDo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

const setNewTodo = (payload) => ({
  type: SET_NEW_TODO,
  payload,
});

const fetchingNoteStart = () => ({
  type: FETCHING_USER_NOTE_START,
});

const fetchingNoteSuccess = (payload) => ({
  type: FETCHING_USER_NOTE_SUCCESS,
  payload,
});

const fetchingNoteError = (payload) => ({
  type: FETCHING_USER_NOTE_ERROR,
  payload,
});

const updateNote = (payload) => ({
  type: UPDATE_USER_NOTE,
  payload,
});

export const getTodoList = () => (dispatch) => {
  const { userId } = getCookies();
  console.log(userId);
  dispatch(fetchingToDoStart());
  firebase
    .database()
    .ref("todo/")
    .orderByChild("userId")
    .equalTo(userId)
    .on("value", (snapshot) => {
      dispatch(fetchingToDoSuccess(snapshotToArray(snapshot)));
    });
};

export const setTodo = (todo) => {
  firebase.database().ref("todo/").push().set(todo);
};

export const deleteTodo = (key) => (dispatch) => {
  firebase.database().ref(`todo/${key}`).remove();
};

export const getUserNote = () => (dispatch) => {
  const { userId } = getCookies();
  dispatch(fetchingNoteStart());
  firebase
    .database()
    .ref("note/")
    .orderByChild("userId")
    .equalTo(userId)
    .on("value", (snapshot) => {
      if (snapshot.exists()){ 
      const note = snapshot.val();
      const {value, userId} = Object.values(note)[0];
      dispatch(
        fetchingNoteSuccess({
          value, 
          userId,
          key: Object.keys(snapshot.val())[0],
        })
      );
    }});
};

export const updateUserNote = (key, value) => {
  if (key) {
    firebase.database().ref(`note/${key}`).update(value);
  } else {
    firebase.database().ref("note/").push().set(value);
  }
};

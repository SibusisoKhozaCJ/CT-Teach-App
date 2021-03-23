import { getCookies } from "../../shared/lib/authentication";
import firebase from "firebase";
import {
  FETCHING_TODO_LIST_START,
  FETCHING_TODO_LIST_SUCCESS,
  FETCHING_USER_NOTE_START,
  FETCHING_USER_NOTE_SUCCESS,
} from "../constants/todo-types";
import { snapshotToArray } from "./chat-action";

const fetchingToDoStart = () => ({
  type: FETCHING_TODO_LIST_START,
});

const fetchingToDoSuccess = (payload) => ({
  type: FETCHING_TODO_LIST_SUCCESS,
  payload,
});

const fetchingNoteStart = () => ({
  type: FETCHING_USER_NOTE_START,
});

const fetchingNoteSuccess = (payload) => ({
  type: FETCHING_USER_NOTE_SUCCESS,
  payload,
});

export const getTodoList = () => (dispatch) => {
  const { userId } = getCookies();
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
      if (snapshot.exists()) {
        const note = snapshot.val();
        const { value, userId } = Object.values(note)[0];
        dispatch(
          fetchingNoteSuccess({
            value,
            userId,
            key: Object.keys(snapshot.val())[0],
          })
        );
      } else {
        dispatch(
          fetchingNoteSuccess({
            value: "",
            userId: "",
            key: "",
          })
        );
      }
    });
};

export const updateUserNote = (key, value) => {
  if (key) {
    firebase.database().ref(`note/${key}`).update(value);
  } else {
    firebase.database().ref("note/").push().set(value);
  }
};

export const insertDefaultTodo = (userId) => {
  const defaultToDo = [
    {
      color: "#DA8E8E",
      content: "",
      contentType: "text",
      done: false,
      title: "Be cool.",
    },
    {
      color: "#1E2CAB",
      content: "Invite them to your tribe.",
      contentType: "text",
      done: false,
      title: "Got some friends who like coding?",
    },
    {
      color: "#46D8B5",
      content: "",
      contentType: "Link",
      done: false,
      title: "Start Project 1",
    },
    {
      color: "#C5206F",
      content:
        "You do this by clicking publish in the “Preview” panel when coding.",
      contentType: "text",
      done: false,
      title: "Share one of your Projects to the Gallery",
    },
  ];
  const ref = firebase.database().ref(`todo/`);
  defaultToDo.forEach((todo) => {
    ref.push().set({ ...todo, userId: userId });
  });
};

export const userHasEntered = () => {
  const { userId } = getCookies();
  firebase.database().ref(`Users/${userId}`).update({
    hasEntered: true,
  });
};

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
      color: "#46D8B5",
      content: "",
      contentType: "text",
      done: false,
      title: "Finish the 5-Minute-Website",
    },
    {
      color: "#1E2CAB",
      content: "It's in the upper right menu.",
      contentType: "text",
      done: false,
      title: "Check out your Profile",
    },
    {
      color: "#C5206F",
      content: "",
      contentType: "text",
      done: false,
      title: "Start Project 1",
    },
    {
      color: "#694ab4",
      content: "Invite them to your tribe.",
      contentType: "text",
      done: false,
      title: "Got some friends who like coding?",
    },
    {
      color: "#cecaa7",
      content:
        "You do this by clicking publish in the “Preview” panel when coding.",
      contentType: "text",
      done: false,
      title: "Share one of your Projects to the Gallery",
    },
    {
      color: "#40114b",
      content: "Yaaayyy!",
      contentType: "text",
      done: false,
      title: "Finish Training 2 of Project 1",
    },
    {
      color: "#bb1966",
      content: "",
      contentType: "text",
      done: false,
      title: "Check out other people's projects in the Gallery",
    },
    {
      color: "#88b8ce",
      content: "",
      contentType: "text",
      done: false,
      title: "Finish Project 1",
    },
    {
      color: "#dd1b86",
      content: "Ask for feedback :)",
      contentType: "text",
      done: false,
      title:
        "Share a video of the website or profile header you made on TikTok or Insta",
    },
    {
      color: "#e8ba39",
      content: "",
      contentType: "text",
      done: false,
      title: "Start Project 2",
    },
    {
      color: "#5d229d",
      content: "",
      contentType: "text",
      done: false,
      title: "Follow CodeTribe on your fav social Channel",
    },
    {
      color: "#d0416d",
      content: "",
      contentType: "text",
      done: false,
      title: "Be happy and smile",
    },
    {
      color: "#76dcb2",
      content: "",
      contentType: "text",
      done: false,
      title: "Do something nice for someone random",
    },
    {
      color: "#8a4ef8",
      content: "",
      contentType: "text",
      done: false,
      title: "Finish Training 2 of Project 2",
    },
    {
      color: "#c6b7d5",
      content: "",
      contentType: "text",
      done: false,
      title: "Do something nice for a friend or family member",
    },
    {
      color: "#4e7da3",
      content: "",
      contentType: "text",
      done: false,
      title: "Start Training 4 of Project 2",
    },
    {
      color: "#ef8cf7",
      content: "",
      contentType: "text",
      done: false,
      title: 'Check out other "Open" Tribes in your area',
    },
    {
      color: "#54d36f",
      content: "Whoohoo!!!!",
      contentType: "text",
      done: false,
      title: "Finish Project 2",
    },
    {
      color: "#ec7a74",
      content: "Awww. Thanks so much! <3",
      contentType: "text",
      done: false,
      title: "Give us a 5-Star rating",
    },
    {
      color: "#52c5ea",
      content: "",
      contentType: "text",
      done: false,
      title: "Start Project 3",
    },
    {
      color: "#e97bbb",
      content: "",
      contentType: "text",
      done: false,
      title:
        "What are other kids posting on Social Media with the #CodeTriber tag?",
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

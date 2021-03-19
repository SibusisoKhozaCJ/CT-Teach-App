import formatUrl from "./formatUrl";
import { getCookies } from "./authentication";
import firebase from "firebase";

export default (pathname, options = { headers: {} }, query) =>
  fetch(formatUrl({ pathname, query }), {
    ...options,
    headers: {
      Authorization: getCookies().userId,
      ...options.headers,
    },
  });

export function firebaseInsert(state, data) {
  firebase.database().ref(state).set(data).then();
}

export async function firebaseUpdate(state, data) {
  await firebase.database().ref(state).update(data);
}

export async function firebadeGetSelectedValues(state, data) {
  await firebase.database().ref(state).equalTo("B631J421");
}

export async function firebaseUpdateChild(state, data) {
  await firebase.database().ref(state).child(data.code).update(data);
}

export async function firebaseGetOnly(state,childId) {
  await firebase.database().ref(state).equalTo(childId);
}

export function firebaseGet(state, dataValue, callback) {
  let data;
  if (callback)
    firebase
      .database()
      .ref(state)
      .once("value", function (snapshot) {
        data = snapshot.val();
        callback(data);
      });
  else if (dataValue)
    return new Promise((res) => {
      firebase
        .database()
        .ref(state)
        .once("value", function (snapshot) {
          data = snapshot.val();
          let filetedData = [];
          if (typeof data === "object") {
            Object.entries(data).forEach(([key, value]) => {
              if (dataValue.includes(value.code)) {
                filetedData.push(value);
              }
            });
            res(filetedData);
          } else {
            res(data);
          }
        });
    });
  else
    return new Promise((res) => {
      firebase
        .database()
        .ref(state)
        .once("value", function (snapshot) {
          data = snapshot.val();
          res(data);
        });
    });
}

export function firebaseGetByChild(state, dataValue, callback) {
  let data;
  if (callback)
    firebase
      .database()
      .ref(state)
      .once("value", function (snapshot) {
        data = snapshot.val();
        callback(data);
      });
  else if (dataValue)
    return new Promise((res) => {
      firebase
        .database()
        .ref(state)
        .once("value", function (snapshot) {
          data = snapshot.val();
          let filetedData = [];
          if (typeof data === "object" && dataValue.key && dataValue.value) {
            Object.entries(data).forEach(([key, value]) => {
              if (
                value[`${dataValue.key}`] &&
                value[`${dataValue.key}`] === dataValue.value
              )
                filetedData.push(value);
            });
            res(filetedData);
          } else {
            res(data);
          }
        });
    });
  else
    return new Promise((res) => {
      firebase
        .database()
        .ref(state)
        .once("value", function (snapshot) {
          data = snapshot.val();
          res(data);
        });
    });
}

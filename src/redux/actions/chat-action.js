import firebase from 'firebase';
import {
  SET_ROOM_LIST,
  CLEAR_CURRENT_ROOM_NAME,
  CLEAR_ID_ROOM,
  SHOW_CHAT,
  HIDE_CHAT,
  CLEAR_MESSAGES,
  INCREASE_LIMIT,
  SET_INITIAL_LIMIT,
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCESS,
  SET_ROOM_INFO,
  FETCH_ROOMS_START,
  CLEAR_ROOMS,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_FAIL,
  UPDATE_CHATS,
  CHAT_STATUS,
} from '../constants/chat-types';
import { getCookies } from '../../shared/lib/authentication';

const snapshotToArray = snapshot => {
  const returnArr = [];

  snapshot.forEach(childSnapshot => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};

const getTribeInfo = tribeCode =>
  firebase
    .database()
    .ref(`Tribes/${tribeCode}`)
    .once('value', snapshot => snapshot);

const getTribeInfoAsync = tribeCode =>
  new Promise(res => {
    firebase
      .database()
      .ref(`Tribes/${tribeCode}`)
      .once('value', snapshot => res(snapshot.val()));
  });

const getFriendInfo = friendId => 
    firebase
      .database()
      .ref(`Users/${friendId}`)
      .once('value', snapshot => snapshot);

export const setRoomLIst = () => ({
  type: SET_ROOM_LIST,
  chatStatus: CHAT_STATUS.roomlist,
});

export const clearCurrentRoomName = () => ({ type: CLEAR_CURRENT_ROOM_NAME });
export const clearIdRoom = () => ({ type: CLEAR_ID_ROOM });
export const showChat = () => ({ type: SHOW_CHAT });
export const hideChat = () => ({ type: HIDE_CHAT });
export const clearMessages = () => ({ type: CLEAR_MESSAGES });
export const increaseLimit = () => ({ type: INCREASE_LIMIT });
export const setInitialLimit = () => ({ type: SET_INITIAL_LIMIT });

export const fetchMessages = () => (dispatch, getState) => {
  const { idRoom, limit } = getState().chat;
  dispatch({
    type: FETCH_MESSAGES_START,
  });
  firebase
    .database()
    .ref('messages/')
    .limitToLast(limit)
    .orderByChild('idRoom')
    .equalTo(idRoom)
    .on('value', snapshot => {
      const messages = snapshotToArray(snapshot);
      dispatch({
        type: FETCH_MESSAGES_SUCCESS,
        payload: messages,
      });
    });
};

const sendJoinMessage = (dispatch, firstname, idRoom, roomname) => {
  const chat = {
    idRoom,
    roomname,
    firstname,
    message: `${firstname} enter the room`,
    createdAt: firebase.database.ServerValue.TIMESTAMP,
    type: 'join',
    code: false,
    status: 'unread',
  };
  const newMessage = firebase.database().ref('messages/').push();
  newMessage.set(chat);
};

export const enterChatRoom = (idRoom, roomname) => {
  const { userFirstName } = getCookies();
  return dispatch => {
    firebase
      .database()
      .ref('roomusers/')
      .orderByChild('idRoom')
      .equalTo(idRoom)
      .on('value', snapshot => {
        let roomuser = [];
        roomuser = snapshotToArray(snapshot);
        const user = roomuser.find(x => x.firstname === userFirstName);
        if (user) {
          const userRef = firebase.database().ref(`roomusers/${user.key}`);
          userRef.update({ status: 'online' });
        } else {
          sendJoinMessage(dispatch, userFirstName, idRoom, roomname);
          const newroomuser = {
            idRoom,
            roomname,
            firstname: userFirstName,
            status: 'online',
          };
          const newRoomUser = firebase.database().ref('roomusers/').push();
          newRoomUser.set(newroomuser);
        }
      });
    dispatch({
      type: SET_ROOM_INFO,
      chatStatus: CHAT_STATUS.chatroom,
      idRoom,
      selectedRoom: roomname,
    });
  };
};

const fetchPrivateChats = dispatch => {
  const { userId } = getCookies();
  let isInitialFetch = true;

  return new Promise(resolve => {
    firebase
      .database()
      .ref(`Users/${userId}/friends`)
      .orderByChild('status')
      .equalTo('accepted')
      .on('value', snapshot => {
        const userFriends = snapshot.val();
        const privateChats = [];
        if (userFriends) {
          userFriends.forEach(async friend => {
            const friendInfo = (await getFriendInfo(friend.friendId)).val();
            privateChats.push({
              name: `${friendInfo.firstname} ${friendInfo.lastname}`,
              idRoom: friend.idRoom,
              isPrivateRoom: true,
              emojiCode: friendInfo.emojiCode || "&#128512", 
              unreadMessages: 0,
            });
          });
          if (isInitialFetch) {
            isInitialFetch = false;
            resolve(privateChats);
          } else {
            dispatch({
              type: UPDATE_CHATS,
              rooms: privateChats,
            });
          }
        } else {
          if (isInitialFetch) {
            isInitialFetch = false;
            resolve([]);
          } else {
            dispatch({
              type: UPDATE_CHATS,
              rooms: [],
            });
          }
        }
      });
  });
};

const fetchOwnTribeChat = dispatch => {
  const { userId } = getCookies();
  let isInitialFetch = true;

  return new Promise(resolve => {
    firebase
      .database()
      .ref(`Users/${userId}/tribe_code`)
      .on('value', async snapshot => {
        const userTribe = snapshot.val();
        const tribesChats = [];
        if (userTribe) {
          const tribe = (await getTribeInfo(userTribe)).val();
          tribesChats.push({
            name: tribe.name,
            idRoom: tribe.code,
            isPrivateRoom: false,
            emojiCode: tribe.emojiCode || "&#128512", 
            unreadMessages: 0,
          });
          if (isInitialFetch) {
            resolve(tribesChats);
            isInitialFetch = false;
          } else {
            dispatch({
              type: UPDATE_CHATS,
              rooms: tribesChats,
            });
          }
        } else {
          if (isInitialFetch) {
            isInitialFetch = false;
            resolve([]);
          } else {
            dispatch({
              type: UPDATE_CHATS,
              rooms: [],
            });
          }
        }
      });
  });
};

const fetchJoinedTribeChats = dispatch => {
  const { userId } = getCookies();
  let isInitialFetch = true;

  return new Promise(resolve => {
    firebase
      .database()
      .ref(`Users/${userId}/tribe_joined`)
      .on('value', snapshot => {
        const tribesJoined = snapshot.val();
        if (tribesJoined) {
          const actionsPromises = tribesJoined.map(getTribeInfoAsync);
          const tribesJoinedChats = [];
          Promise.all(actionsPromises)
            .then(tribes => {
              tribes.forEach(tribe => {
                tribesJoinedChats.push({
                  name: tribe.name,
                  idRoom: tribe.code,
                  isPrivateRoom: false,
                  emojiCode: tribe.emojiCode || "&#128512", 
                  unreadMessages: 0,
                });
              });
              if (isInitialFetch) {
                resolve(tribesJoinedChats);
                isInitialFetch = false;
              } else {
                dispatch({
                  type: UPDATE_CHATS,
                  rooms: tribesJoinedChats,
                });
              }
            })
            .catch(error => {
              console.error('Failed get tribe info', error.message);
            });
        } else {
          if (isInitialFetch) {
            resolve([]);
            isInitialFetch = false;
          } else {
            dispatch({
              type: UPDATE_CHATS,
              rooms: [],
            });
          }
        }
      });
  });
};

export const fetchRooms = () => dispatch => {
  dispatch({
    type: FETCH_ROOMS_START,
  });
  dispatch({
    type: CLEAR_ROOMS,
  });
  Promise.all([fetchPrivateChats(dispatch), fetchOwnTribeChat(dispatch), fetchJoinedTribeChats(dispatch)])
    .then(rooms => {
      const flattedRooms = rooms.flat();
      dispatch({
        type: FETCH_ROOMS_SUCCESS,
        rooms: flattedRooms,
      });
    })
    .catch(() => {
      dispatch({
        type: FETCH_ROOMS_FAIL,
      });
    });
};

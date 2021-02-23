import firebase from 'firebase';
import * as actionTypes from '../constants/chat-types';
import { fetchJoinedTribeChats, fetchOwnTribeChat, fetchPrivateChats, getTribeInfoAsync } from '../../shared/lib/chat';
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

export const setRoomLIst = () => ({
  type: actionTypes.SET_ROOM_LIST,
  chatStatus: 'roomlist',
});

export const setRoom = idRoom => ({
  type: actionTypes.SET_ROOM,
  chatStatus: 'chatroom',
  idRoom,
});

export const setCurrentRoomName = currentRoomName => ({
  type: actionTypes.SET_CURRENT_ROOM_NAME,
  currentRoomName,
});

export const clearCurrentRoomName = () => ({
  type: actionTypes.CLEAR_CURRENT_ROOM_NAME,
});

export const clearIdRoom = () => ({
  type: actionTypes.CLEAR_ID_ROOM,
});

export const showChat = () => ({
  type: actionTypes.SHOW_CHAT,
});

export const hideChat = () => ({
  type: actionTypes.HIDE_CHAT,
});

export const clearMessages = () => ({
  type: actionTypes.CLEAR_MESSAGES,
});

export const setUnreadMessageCount = count => ({
  type: actionTypes.SET_UNREAD_MESSAGES_COUNT,
  payload: count,
});

export const increaseLimit = () => ({
  type: actionTypes.INCREASE_LIMIT,
});

export const setInitialLimit = () => ({
  type: actionTypes.SET_INITIAL_LIMIT,
});

const fetchMessagesStart = () => ({
  type: actionTypes.FETCH_MESSAGES_START,
});

export const fetchMessagesSuccess = messages => ({
  type: actionTypes.FETCH_MESSAGES_SUCCESS,
  payload: messages,
});

export const fetchMessages = () => (dispatch, getState) => {
  const { idRoom, limit } = getState().chat;
  dispatch(fetchMessagesStart());
  firebase
    .database()
    .ref('messages/')
    .limitToLast(limit)
    .orderByChild('idRoom')
    .equalTo(idRoom)
    .on('value', snapshot => {
      const messages = snapshotToArray(snapshot);
      if (messages.length !== 0) {
        dispatch(fetchMessagesSuccess(messages));
      } else {
        dispatch(fetchMessagesSuccess(null));
      }
    });
};

const sendJoinMessage = (dispatch, firstname, idRoom, roomname) => {
  const chat = {
    idRoom: '',
    roomname: '',
    firstname: '',
    message: '',
    createdAt: '',
    type: '',
    code: false,
    status: 'unread',
  };
  chat.idRoom = idRoom;
  chat.roomname = roomname;
  chat.firstname = firstname;
  chat.createdAt = firebase.database.ServerValue.TIMESTAMP;
  chat.message = `${firstname} enter the room`;
  chat.type = 'join';
  const newMessage = firebase.database().ref('messages/').push();
  newMessage.set(chat);
};

export const enterChatRoom = (idRoom, name) => {
  const roomname = name;
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
            idRoom: '',
            roomname: '',
            firstname: '',
            status: '',
          };
          newroomuser.idRoom = idRoom;
          newroomuser.roomname = roomname;
          newroomuser.firstname = userFirstName;
          newroomuser.status = 'online';
          const newRoomUser = firebase.database().ref('roomusers/').push();
          newRoomUser.set(newroomuser);
        }
      });

    dispatch(setRoom(idRoom));
    dispatch(setCurrentRoomName(roomname));
  };
};

const updatePrivateChats = rooms => ({
  type: actionTypes.UPDATE_PRIVATE_CHATS,
  rooms,
});

const updateJoinedTribeChats = rooms => ({
  type: actionTypes.UPDATE_JOINED_TRIBE_CHATS,
  rooms,
});

export const updatePrivateChatsOn = () => {
  const { userId } = getCookies();
  return dispatch => {
    firebase
      .database()
      .ref(`Users/${userId}/friends`)
      .orderByChild('status')
      .equalTo('accepted')
      .on('value', snapshot => {
        const userFriends = snapshot.val();
        const privateChats = [];
        if (userFriends) {
          userFriends.forEach(friend => {
            privateChats.push({
              name: `${friend.firstname} ${friend.lastname}`,
              idRoom: friend.idRoom,
              isPrivateRoom: true,
              unreadMessages: 0,
            });
          });
          dispatch(updatePrivateChats(privateChats));
        } else {
          dispatch(updatePrivateChats([]));
        }
      });
  };
};

export const updateJoinedTribeChatsOn = () => {
  const { userId } = getCookies();
  return dispatch => {
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
                  unreadMessages: 0,
                });
              });
              dispatch(updateJoinedTribeChats(tribesJoinedChats));
            })
            .catch(error => {
              console.error('Failed get tribe info', error.message);
            });
        } else {
          dispatch(updateJoinedTribeChats([]));
        }
      });
  };
};

const fetchRoomsStart = () => ({
  type: actionTypes.FETCH_ROOMS_START,
});

const fetchRoomsSuccess = rooms => ({
  type: actionTypes.FETCH_ROOMS_SUCCESS,
  rooms,
});

const fetchRoomsFail = () => ({
  type: actionTypes.FETCH_ROOMS_FAIL,
});

const clearRooms = () => ({
  type: actionTypes.CLEAR_ROOMS,
});

export const fetchRooms = () => dispatch => {
  dispatch(fetchRoomsStart());
  dispatch(clearRooms());
  Promise.all([fetchPrivateChats(), fetchOwnTribeChat(), fetchJoinedTribeChats()])
    .then(rooms => {
      const flattedRooms = rooms.flat();
      dispatch(fetchRoomsSuccess(flattedRooms));
    })
    .catch(err => {
      dispatch(fetchRoomsFail());
    });
};

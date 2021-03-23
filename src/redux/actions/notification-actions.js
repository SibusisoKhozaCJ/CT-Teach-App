import { SET_NOTIFICATIONS, UPDATE_NOTIFICATIONS, DELETE_NOTIFICATIONS, SWITCH_NOTIFICATION_TYPE, SWITCH_DISPLAY_HEADER_NOTIFICATION } from "../constants/notification-types";
import { getCookies } from '../../shared/lib/authentication';
import { snapshotToArray}  from './chat-action';
import firebase from 'firebase';

export const fetchMessages = ({idRoom}) => {
    return new Promise (resolve => {
      firebase
        .database()
        .ref('messages/')
        .orderByChild('idRoom')
        .equalTo(idRoom)
        .once('value', snapshot => {
          resolve({idRoom, messages: snapshotToArray(snapshot)});
        });
    });
};

export const setNotifictation = () => (dispatch, getState) => {
    const { userId } = getCookies();
    const messagesByRooms = getState().chat.rooms.map(fetchMessages);
    Promise.all(messagesByRooms)
      .then(roomMessages => {
          const roomsNotifications = roomMessages.map( room => {
            const {idRoom, messages} = room;
            return {
              [idRoom]: messages.filter(message => message.notificationTo?.includes(userId)).length,
            }
          });
          let newObj = {};
          let sum = 0;
          for(let i = 0; i < roomsNotifications.length; i++){
            let [[key, value]] = Object.entries(roomsNotifications[i]);
            newObj[key]=value;
            sum+=value;
          }
          dispatch({type : SET_NOTIFICATIONS, payload: {
            notificationByRooms: newObj,
            sumNotifications: sum,
          }});
      });
}

export const updateNotification = () => (dispatch) => {
  const { userId } = getCookies();
  firebase
        .database()
        .ref('messages/')
        .orderByChild('createdAt')
        .startAt(Date.now())
        .on('child_added', function(snapshot) {
          if (snapshot.val().notificationTo?.includes(userId)){
            dispatch({type : UPDATE_NOTIFICATIONS, payload : snapshot.val().idRoom})
          }
       });
}

export const deleteNotification = (messages, idRoom) => (dispatch) => {
  const { userId } = getCookies();
  const update = messages.filter( elem => elem.notificationTo && elem.notificationTo?.includes(userId));

  if (update.length) {
  update.forEach(elem => {
    let index = elem.notificationTo.indexOf(userId);
    let key = elem.key;
    delete elem.key;
    elem.notificationTo.splice(index,1);
    firebase.database().ref(`messages/${key}`).update(elem)
  })

    dispatch({
    type: DELETE_NOTIFICATIONS,
    payload: idRoom,
  }
  )}
}

export const switchNotificationType = () => {
  return {
    type: SWITCH_NOTIFICATION_TYPE,
  }
}

export const switchHeaderNotification = () => {
  return {
    type: SWITCH_DISPLAY_HEADER_NOTIFICATION,
  }
}
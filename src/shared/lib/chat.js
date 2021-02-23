import firebase from 'firebase';
import { getCookies } from './authentication';

export const getTribeInfo = tribeCode =>
  firebase
    .database()
    .ref(`Tribes/${tribeCode}`)
    .once('value', snapshot => snapshot);

export const getTribeInfoAsync = tribeCode =>
  new Promise(res => {
    firebase
      .database()
      .ref(`Tribes/${tribeCode}`)
      .once('value', snapshot => res(snapshot.val()));
  });

export const sendMessage = chat => {
  const newMessage = firebase.database().ref('messages/').push();
  newMessage.set(chat);
};

export const fetchPrivateChats = () => {
  const { userId } = getCookies();
  return new Promise(resolve => {
    firebase
      .database()
      .ref(`Users/${userId}/friends`)
      .orderByChild('status')
      .equalTo('accepted')
      .once('value', snapshot => {
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
          resolve(privateChats);
        } else {
          resolve([]);
        }
      });
  });
};

export const fetchOwnTribeChat = () => {
  const { userId } = getCookies();
  return new Promise(resolve => {
    firebase
      .database()
      .ref(`Users/${userId}/tribe_code`)
      .once('value', async snapshot => {
        const userTribe = snapshot.val();
        const tribesChats = [];
        if (userTribe) {
          const tribe = (await getTribeInfo(userTribe)).val();
          tribesChats.push({
            name: tribe.name,
            idRoom: tribe.code,
            isPrivateRoom: false,
            unreadMessages: 0,
          });
          resolve(tribesChats);
        } else {
          resolve([]);
        }
      });
  });
};

export const fetchJoinedTribeChats = () => {
  const { userId } = getCookies();
  return new Promise(resolve => {
    firebase
      .database()
      .ref(`Users/${userId}/tribe_joined`)
      .once('value', snapshot => {
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
              resolve(tribesJoinedChats);
            })
            .catch(error => {
              console.error('Failed get tribe info', error.message);
            });
        } else {
          resolve([]);
        }
      });
  });
};

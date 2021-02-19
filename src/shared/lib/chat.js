import Moment from 'moment';
import firebase from 'firebase';
import * as actions from '../../redux/actions/chat-action';

const snapshotToArray = snapshot => {
  const returnArr = [];

  snapshot.forEach(childSnapshot => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};

const sendJoinMessage = (dispatch, firstname, idRoom, roomname) => {
  const chat = {
    idRoom: '',
    roomname: '',
    firstname: '',
    message: '',
    date: '',
    type: '',
    code: false,
  };
  chat.idRoom = idRoom;
  chat.roomname = roomname;
  chat.firstname = firstname;
  chat.date = Moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
  chat.message = `${firstname} enter the room`;
  chat.type = 'join';
  const newMessage = firebase.database().ref('chats/').push();
  newMessage.set(chat);
};

export const enterChatRoom = ({ dispatch, firstname, idRoom, roomname }) => {
  firebase
    .database()
    .ref('roomusers/')
    .orderByChild('idRoom')
    .equalTo(idRoom)
    .on('value', snapshot => {
      let roomuser = [];
      roomuser = snapshotToArray(snapshot);
      const user = roomuser.find(x => x.firstname === firstname);
      if (user) {
        const userRef = firebase.database().ref(`roomusers/${user.key}`);
        userRef.update({ status: 'online' });
      } else {
        sendJoinMessage(dispatch, firstname, idRoom, roomname);
        const newroomuser = { idRoom: '', roomname: '', firstname: '', status: '' };
        newroomuser.idRoom = idRoom;
        newroomuser.roomname = roomname;
        newroomuser.firstname = firstname;
        newroomuser.status = 'online';
        const newRoomUser = firebase.database().ref('roomusers/').push();
        newRoomUser.set(newroomuser);
      }
    });

  dispatch(actions.setChatRoom(idRoom));
  dispatch(actions.setCurrentRoomName(roomname));
};

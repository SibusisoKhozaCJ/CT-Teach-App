import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'moment';
import ScrollToBottom from 'react-scroll-to-bottom';
import firebase from "firebase";

import { setRoomLIst } from '../../../redux/actions/chat-action';
import { getCookies } from '../../../shared/lib/authentication';
import HeaderChat from './HeaderChatRoom';
import FooterChatRoom from './FooterChatRoom';

// import SendIcon from '@material-ui/icons/Send';

function ChatRoom() {
  const [chats, setChats] = useState([]);
  const [firstname, setFirstName] = useState('');
  const [roomname, setRoomname] = useState('');
  const [newchat, setNewchat] = useState({ roomname: '', firstname: '', message: '', date: '', type: '' });
  const dispatch = useDispatch();
  const room = useSelector(state => state.chat.room);
  const { userFirstName } = getCookies();

  useEffect(() => {
    const fetchData = async () => {
      setFirstName(userFirstName);
      setRoomname(room);
      firebase
        .database()
        .ref('chats/')
        .limitToLast(20)
        .orderByChild('roomname')
        .equalTo(roomname)
        .on('value', snapshot => {
          setChats([]);
          setChats(snapshotToArray(snapshot));
        });
    };

    fetchData();
  }, [room, roomname]);

  const snapshotToArray = snapshot => {
    const returnArr = [];

    snapshot.forEach(childSnapshot => {
      const item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
    });

    return returnArr;
  };

  const submitMessage = e => {
    e.preventDefault();
    const chat = newchat;
    chat.roomname = roomname;
    chat.firstname = firstname;
    chat.date = Moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
    chat.type = 'message';
    const newMessage = firebase.database().ref('chats/').push();
    newMessage.set(chat);
    setNewchat({ roomname: '', firstname: '', message: '', date: '', type: '' });
  };

  const onChange = e => {
    e.persist();
    setNewchat({ ...newchat, [e.target.name]: e.target.value });
  };

  const exitChat = e => {
    const chat = { roomname: '', firstname: '', message: '', date: '', type: '' };
    chat.roomname = roomname;
    chat.firstname = firstname;
    chat.date = Moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
    chat.message = `${firstname} leave the room`;
    chat.type = 'exit';
    const newMessage = firebase.database().ref('chats/').push();
    newMessage.set(chat);

    firebase
      .database()
      .ref('roomusers/')
      .orderByChild('roomname')
      .equalTo(roomname)
      .once('value', snapshot => {
        let roomuser = [];
        roomuser = snapshotToArray(snapshot);
        const user = roomuser.find(x => x.firstname === firstname);
        if (user !== undefined) {
          const userRef = firebase.database().ref('roomusers/' + user.key);
          userRef.update({ status: 'offline' });
        }
      });

    dispatch(setRoomLIst());
  };

  return (
    <>
      <HeaderChat exitChat={exitChat} />
      <ScrollToBottom className="ChatContent">
        {chats.map((item, idx) => (
          <div key={idx} className="MessageBox">
            {item.type === 'join' || item.type === 'exit' ? (
              <div className="ChatStatus">
                <span className="ChatDate">{item.date}</span>
                <span className="ChatContentCenter">{item.message}</span>
              </div>
            ) : (
              <div className="ChatMessage">
                <div className={`${item.firstname === firstname ? 'RightBubble' : 'LeftBubble'}`}>
                  {item.firstname === firstname ? (
                    <span className="MsgName">Me</span>
                  ) : (
                    <span className="MsgName">{item.firstname}</span>
                  )}
                  <span className="MsgDate"> at {item.date}</span>
                  <p>{item.message}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </ScrollToBottom>
      <FooterChatRoom submitMessage={submitMessage} onChange={onChange} value={newchat.message} />
    </>
  );
}

export default ChatRoom;

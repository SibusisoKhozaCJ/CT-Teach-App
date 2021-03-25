import { Types } from "../constants/friend-types";
import { firebaseUpdate } from "../../shared/lib/authorizedFetch";
import * as Auth from "../../shared/lib/authentication";
import randomize from "randomatic";
export function sendFriendRequest(friendEmail) {
  return async (dispatch, getState) => {
    try {
      dispatch({type: Types.SET_LOADING, payload: true})
      const { user } = getState();
      let isFriendExist = false;
      if (friendEmail !== user.user.email) {
        const friendData = await Auth.getUserWithEmail(friendEmail);
        if (friendData && friendData.length > 0) {
          let userData = user.user;
          const roomCode = `${randomize("A", 5)}${randomize("0", 5)}`;
          let friendObject = {
            friendId: friendData[0].uid,
            status: "pending",
            sender: user.userId,
            idRoom: roomCode,
            firstname:friendData[0].firstname,
            lastname:friendData[0].lastname
          };
          //Add friend to current user
          if (userData && userData.friends && userData.friends.length > 0) {
            const isFriendExit = userData.friends.find(
              (x) => x.friendId === friendData[0].uid
            );
            if (isFriendExit) {
              isFriendExist = true;
            } else {
              userData.friends.push(friendObject);
              await firebaseUpdate(`Users/${user.userId}`, userData);
            }
          } else {
            userData.friends = [friendObject];
            await firebaseUpdate(`Users/${user.userId}`, userData);
          }
          //Add friend to friend user data
          if (!isFriendExist) {
            friendObject.friendId = user.userId;
            friendObject.firstname = userData.firstname;
            friendObject.lastname = userData.lastname;
            if (
              friendData[0] &&
              friendData[0].friends &&
              friendData[0].friends.length > 0
            ) {
              friendData[0].friends.push(friendObject);
              await firebaseUpdate(`Users/${friendData[0].uid}`, friendData[0]);
            } else {
              friendData[0].friends = [friendObject];
              await firebaseUpdate(`Users/${friendData[0].uid}`, friendData[0]);
            }
            setUserFriends(userData);
            dispatch({type: Types.SET_REQUEST_SUCCESS, payload: true})
            dispatch({ type: Types.SEND_REQUEST_FAILURE, payload: "" });
          } else {
            dispatch({type: Types.SET_REQUEST_SUCCESS, payload: false})
            dispatch({
              type: Types.SEND_REQUEST_FAILURE,
              payload: "Friend already exist in list",
            });
          }
        } else {
          dispatch({type: Types.SET_REQUEST_SUCCESS, payload: false})
          dispatch({
            type: Types.SEND_REQUEST_FAILURE,
            payload: "User not found.",
          });
        }
      } else {
        dispatch({type: Types.SET_REQUEST_SUCCESS, payload: false})
        dispatch({
          type: Types.SEND_REQUEST_FAILURE,
          payload: "Cannot send request to your self",
        });
      }
    } catch (error) {
      console.warn("Error save user", error);
    }
    dispatch({type: Types.SET_LOADING, payload: false})
  };
}

async function getFriendInfo(users) {
  await Promise.all(
    users.map(async (user, index) => {
      const friendData = await Auth.getProfile(user.friendId);
      users[index].info = friendData;
    })
  );
  return users;
}

export function setUserFriends(user) {
  return async (dispatch, getState) => {
    try {
      const friendInfo = await getFriendInfo(user.friends);
      const pendingList = friendInfo.filter((x) => x.status === "pending");
      const friendsList = friendInfo.filter((x) => x.status === "accepted");
      dispatch({ type: Types.SAVE_FRIENDS_LIST, payload: friendsList });
      dispatch({ type: Types.SAVE_FRIENDS_PENDING_LIST, payload: pendingList });
    } catch (err) {}
  };
}

export function resetSuccessError(user) {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: Types.SEND_REQUEST_FAILURE, payload: "" });
    } catch (err) {}
  };
}

export function acceptRequest(friendID) {
  return async (dispatch, getState) => {
    try {
      const { user } = getState();
      const friendData = await Auth.getProfile(friendID);
      const userData = await Auth.getProfile();
      if (friendData) {
        let friendIndex = friendData.friends.findIndex(
          (x) => x.friendId === user.userId
        );
        let userFriendIndex = userData.friends.findIndex(
          (x) => x.friendId === friendID
        );
        userData.friends[userFriendIndex].status = "accepted";
        friendData.friends[friendIndex].status = "accepted";
        await firebaseUpdate(`Users/${friendData.uid}`, friendData);
        await firebaseUpdate(`Users/${userData.uid}`, userData);
        setUserFriends(userData);
      }
    } catch (err) {}
  };
}

export function removeFriend(friendID) {
  return async (dispatch, getState) => {
    try {
      const { user } = getState();
      const friendData = await Auth.getProfile(friendID);
      const userData = await Auth.getProfile();
      if (friendData) {
        let friendIndex = friendData.friends.findIndex(
          (x) => x.friendId === user.userId
        );
        let userFriendIndex = userData.friends.findIndex(
          (x) => x.friendId === friendID
        );
        userData.friends[userFriendIndex].status = "removed";
        friendData.friends[friendIndex].status = "removed";
        await firebaseUpdate(`Users/${friendData.uid}`, friendData);
        await firebaseUpdate(`Users/${userData.uid}`, userData);
        setUserFriends(userData);
      }
    } catch (err) {}
  };
}

export function deleteFriend(friendID) {
  return async (dispatch, getState) => {
    try {
      dispatch({type: Types.SET_LOADING, payload: true})

      const { user } = getState();
      const friendData = await Auth.getProfile(friendID);
      const userData = await Auth.getProfile();
      if (friendData) {
        let friendIndex = friendData.friends.findIndex(
          (x) => x.friendId === user.userId
        );
        let userFriendIndex = userData.friends.findIndex(
          (x) => x.friendId === friendID
        );
        console.log('userData.friends before',userData.friends);
           userData.friends.splice(userFriendIndex, 1);
         console.log('userData.friends after',userData.friends);
          friendData.friends.splice(friendIndex, 1);
        await firebaseUpdate(`Users/${friendData.uid}`, friendData);
        await firebaseUpdate(`Users/${userData.uid}`, userData);
        dispatch(setUserFriends(userData));
      }
    } catch (err) {}
    dispatch({type: Types.SET_LOADING, payload: false})

  };
}

export function resetFriendModal() {
  return {
    type: Types.REST_VALUES_TO_DEFAULT,
    payload: {},
  };
}

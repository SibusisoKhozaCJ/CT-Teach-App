import * as authFetch from "../../shared/lib/authorizedFetch";
import { textWithImg, textWithLinks } from "../../shared/lib/regExp";
import { Types } from "../constants/tribe-types";
import { firebaseUpdate, firebaseDelete } from "../../shared/lib/authorizedFetch";
import * as Auth from "../../shared/lib/authentication";
export function getUserTribes(user) {
  return async function (dispatch, getState) {
    const userTribes = user.tribe_code;
    if(userTribes){
      const tribeData = await authFetch.firebaseGet("Tribes/" + userTribes);
      if (tribeData) {
        if(tribeData.requests && tribeData.requests.length > 0){
          const usersInfo = await getusersInfo(tribeData.requests);
          dispatch({ type: Types.SAVE_TRIBES_REQUESTS, payload: usersInfo });
        }else{
          dispatch({ type: Types.SAVE_TRIBES_REQUESTS, payload: [] });
        }
        const data = [tribeData];
        dispatch({ type: Types.SAVE_USER_TRIBES, payload: data });
      }
    }
    
    
    if (user && user.tribe_joined && user.tribe_joined.length > 0) {
      const joinedTribes = await authFetch.firebaseGet(
        "Tribes/",
        user.tribe_joined
      );
      if (joinedTribes) {
        dispatch({
          type: Types.SAVE_USER_JOINED_TRIBES,
          payload: joinedTribes,
        });
      }
    }
  };
}

async function getusersInfo(users) {
  let usersInfo = []
  await Promise.all(
    users.map(async (user, index) => {
      const userData = await Auth.getProfile(user.sender);
      usersInfo.push(userData);
    })
  );
  return usersInfo;
}

export function tribeCodeToIframe(code) {
  return {
    type: Types.SET_TRIBE_CODE_IN_IFRAME,
    payload: code,
  };
}

export function tribeEmojiCode(code) {
  return {
    type: Types.SET_TRIBE_EMOJI_CODE,
    payload: code,
  };
}

export function openTribeModalAction() {
  return {
    type: Types.OPEN_TRIBE_MODAL,
  };
}

export function closeTribeModalAction() {
  return {
    type: Types.CLOSE_TRIBE_MODAL,
  };
}

export function closeTribeModalWarning() {
  return {
    type: Types.IS_FIND_TRIBE_LINK_OR_IMG,
    payload: 0,
  };
}

export function findLinkOrImg(text) {
  const matchAllLinks = Array.from(text.matchAll(textWithLinks));
  const matchAllImages = Array.from(text.matchAll(textWithImg));
  const matchAll = matchAllLinks.concat(matchAllImages);

  return {
    type: Types.IS_FIND_TRIBE_LINK_OR_IMG,
    payload: matchAll.length,
  };
}

export function updateTribeHeader(data, tribeCode) {
  return async (dispatch, getState) => {
    dispatch(findLinkOrImg(data.codeInIframe));
    const tribe = getState().tribe;
    if (!tribe.isFindLinkOrImg) {
      const dataUpdate = {
        codeInIframe: data.codeInIframe || tribe.codeInIframe,
        emojiCode: data.emojiCode || tribe.emojiCode,
      };
      try {
        await firebaseUpdate(`Tribes/${tribeCode}`, dataUpdate);
      } catch (error) {
        console.warn("Error update Tribe", error);
      }
      dispatch(tribeCodeToIframe(dataUpdate.codeInIframe));
      dispatch(tribeEmojiCode(dataUpdate.emojiCode));
      dispatch(closeTribeModalAction());
    }
  };
}

export function addUserToTribe(data, tribeData, userEntered) {
  return async (dispatch, getState) => {
    const user = getState().user;
    try {
      let userDetails = user.user || userEntered;
      if (userDetails.tribe_joined && userDetails.tribe_joined.length) {
        if (!userDetails.tribe_joined.includes(data)) {
          userDetails.tribe_joined.push(data);

          let tribeInfo = tribeData;
          tribeInfo.users.push(user.userId);

          await firebaseUpdate(`Users/${user.userId}`, userDetails);
          await firebaseUpdate(`Tribes/${tribeInfo.code}`, tribeInfo);
          const joinedTribes = await authFetch.firebaseGet(
            "Tribes/",
            userDetails.tribe_joined
          );
          if (joinedTribes) {
            dispatch({
              type: Types.SAVE_USER_JOINED_TRIBES,
              payload: joinedTribes,
            });
          }
        } else {
          console.log("User Already in Tribe");
        }
      } else {
        userDetails.tribe_joined = [data];
        let tribeInfo = tribeData;
        tribeInfo.users.push(user.userId);

        await firebaseUpdate(`Users/${user.userId}`, userDetails);
        await firebaseUpdate(`Tribes/${tribeInfo.code}`, tribeInfo);
        const joinedTribes = await authFetch.firebaseGet(
          "Tribes/",
          userDetails.tribe_joined
        );
        if (joinedTribes) {
          dispatch({
            type: Types.SAVE_USER_JOINED_TRIBES,
            payload: joinedTribes,
          });
        }
      }
    } catch (error) {
      console.warn("Error update user", error);
    }
  };
}

export function sendTribeJoinRequest(data, tribeData, userEntered) {
  return async (dispatch, getState) => {
    const user = getState().user;
    try {
      let userDetails = user.user || userEntered;
      const rerquestData = {
        "status": "pending",
        "sender": userDetails.uid
      }
      let tribeInfo = tribeData;
      if (tribeInfo && tribeInfo.requests) {
        const ifAlreadyRequested = tribeInfo.requests.find(x => x.sender === userDetails.uid);
        if (ifAlreadyRequested) {
          dispatch({
            type: Types.SET_ERROR_MESSAGE,
            payload: "You have already requested for to join this tribe!",
          });
        } else {
          tribeInfo.requests.push(rerquestData);
          await firebaseUpdate(`Tribes/${tribeInfo.code}`, tribeInfo);
          dispatch({
            type: Types.SET_SUCCESS_MESSAGE,
            payload: "",
          });
        }
      } else {
        tribeInfo.requests = [rerquestData];
        await firebaseUpdate(`Tribes/${tribeInfo.code}`, tribeInfo);
        dispatch({
          type: Types.SET_SUCCESS_MESSAGE,
          payload: "",
        });
      }
    } catch (error) {
      console.warn("Error update user", error);
    }
  };
}

export function rejectTribeJoinRequest(userTribes, userData) {
  return async (dispatch, getState) => {
    const user = getState().user;
    try {
      let tribeCode = userTribes[0].code;
      const tribeInfo = await authFetch.firebaseGet("Tribes/" + tribeCode);
      if (tribeInfo && tribeInfo.requests) {
        const filteredReq =  tribeInfo.requests.filter(function(item) {
          return item.sender !== userData.uid
        })
        tribeInfo.requests = filteredReq;
        await firebaseUpdate(`Tribes/${tribeCode}`, tribeInfo);
        if(tribeInfo.requests && tribeInfo.requests.length > 0){
          const usersInfo = await getusersInfo(tribeInfo.requests);
          dispatch({ type: Types.SAVE_TRIBES_REQUESTS, payload: usersInfo });
        }else{
          dispatch({ type: Types.SAVE_TRIBES_REQUESTS, payload: [] });
        }
        dispatch({
          type: Types.SET_SUCCESS_MESSAGE,
          payload: "",
        });
      } else {
        dispatch({
          type: Types.SET_SUCCESS_MESSAGE,
          payload: "",
        });
      }
    } catch (error) {
      console.warn("Error update user", error);
    }
  };
}

export function startEditPublicTribeInfo() {
  return {
    type: Types.EDIT_PUBLIC_TRIBE_INFO,
    payload: true,
  };
}

export function finishEditPublicTribeInfo() {
  return {
    type: Types.EDIT_PUBLIC_TRIBE_INFO,
    payload: false,
  };
}

export function startEditPrivateTribeInfo() {
  return {
    type: Types.EDIT_PRIVATE_TRIBE_INFO,
    payload: true,
  };
}

export function finishEditPrivateTribeInfo() {
  return {
    type: Types.EDIT_PRIVATE_TRIBE_INFO,
    payload: false,
  };
}

export function updateTribeInfo(data) {
  return async (dispatch, getState) => {
    let newData = {
      desc: data.aboutTribe || "",
      journey: data.ourJourney || "",
      joinMessage: data.joinTribe || "",
      question: data.question || "",
    };
    if (data.tribe !== undefined && data.tribe !== null && data.tribe !== "") {
      newData.name = data.tribe;
    }
    try {
      await firebaseUpdate(`Tribes/${data.code}`, newData);
    } catch (error) {
      console.warn("Error update user", error);
    }
    if (getState().tribe.editPublicTribeInfo) {
      dispatch(finishEditPublicTribeInfo());
    } else {
      dispatch(finishEditPrivateTribeInfo());
    }
  };
}


export function acceptTribeRequest(userTribes, userEntered) {
  return async (dispatch, getState) => {
    try {
      let userDetails = userEntered;
      let tribeCode = userTribes[0].code;
      let tribeData = userTribes[0];
      if(userDetails.tribe_joined){
        userDetails.tribe_joined.push(tribeCode);
      }else{
        userDetails.tribe_joined = [tribeCode]
      }
      let tribeInfo = tribeData;
      tribeInfo.users.push(userEntered.uid);
      const filteredReq =  tribeInfo.requests.filter(function(item) {
        return item.sender !== userEntered.uid
      })
      tribeInfo.requests = filteredReq;
      await firebaseUpdate(`Users/${userDetails.uid}`, userDetails);
      await firebaseUpdate(`Tribes/${tribeInfo.code}`, tribeInfo);
      dispatch({
        type: Types.SET_SUCCESS_MESSAGE,
        payload: "",
      });
    } catch (error) {
      console.warn("Error update user", error);
    }
  };
}

export function leaveTribeAction(tribeInfo,userDetails) {
  return async (dispatch, getState) => {
    try {
      let userTribes = userDetails.tribe_joined.filter(function (str) { return str !== tribeInfo.code; });
      let tribeUsers = tribeInfo.users.filter(function (str) { return str !== userDetails.uid; });
      tribeInfo.users = tribeUsers;
      userDetails.tribe_joined = userTribes
      await firebaseUpdate(`Users/${userDetails.uid}`, userDetails);
      await firebaseUpdate(`Tribes/${tribeInfo.code}`, tribeInfo);
      dispatch({
        type: Types.SET_SUCCESS_MESSAGE,
        payload: "",
      });
    } catch (error) {
      console.warn("Error update user", error);
    }
  };
}


export function deleteTribeAction(tribeInfo,user) {
  return async (dispatch, getState) => {
    try {
      let tribeUsers = tribeInfo.users;
      let userDetails = user;
      userDetails.tribe_code = null;
      const usersInfo = await updateUserTribes(tribeUsers,tribeInfo.code);
      await firebaseDelete(`Users`, `${userDetails.uid}/tribe_code/${tribeInfo.code}`);
      await firebaseDelete(`Tribes`, tribeInfo.code);
      dispatch({
        type: Types.SET_SUCCESS_MESSAGE,
        payload: "",
      });
      dispatch({ type: Types.SAVE_USER_TRIBES, payload: [] });
    } catch (error) {
      console.warn("Error update user", error);
    }
  };
}


async function updateUserTribes(users, tribeCode) {
  await Promise.all(
    users.map(async (user, index) => {
      try{
        let userDetails = await Auth.getProfile(user);
        let userTribes = userDetails.tribe_joined.filter(function (str) { return str !== tribeCode; });
        userDetails.tribe_joined = userTribes;
        await firebaseUpdate(`Users/${userDetails.uid}`, userDetails);
      }catch(err){

      }
    })
  );
  return users;
}

import * as authFetch from "../../shared/lib/authorizedFetch";
import { Types } from "../constants/tribe-types";
import {firebaseUpdate} from "../../shared/lib/authorizedFetch";
export function getUserTribes(user) {
  return async function(dispatch, getState) {
    const userTribes = user.tribe_code;
    const tribeData = await authFetch.firebaseGet('Tribes/' + userTribes);
    if(user && user.tribe_joined && user.tribe_joined.length > 0){
      const joinedTribes = await authFetch.firebaseGet('Tribes/',user.tribe_joined);
      if(joinedTribes){
        dispatch({ type: Types.SAVE_USER_JOINED_TRIBES, payload:joinedTribes });
      }
    }
    if(tribeData){
        const data = [tribeData];
        dispatch({ type: Types.SAVE_USER_TRIBES, payload:data });
    }
  };
}

export function addUserToTribe(data, tribeData) {
  return async (dispatch, getState) => {
    const user = getState().user;
    try {
      let userDetails = user.user;
      if(userDetails.tribe_joined && userDetails.tribe_joined.length){
        if(!userDetails.tribe_joined.includes(data)){
        userDetails.tribe_joined.push(data)
        
        let tribeInfo = tribeData;
        tribeInfo.users.push(user.userId);

        await firebaseUpdate(`Users/${user.userId}`, userDetails);
        await firebaseUpdate(`Tribes/${tribeInfo.code}`, tribeInfo);
        const joinedTribes = await authFetch.firebaseGet('Tribes/',userDetails.tribe_joined);
        if(joinedTribes){
          dispatch({ type: Types.SAVE_USER_JOINED_TRIBES, payload:joinedTribes });
        }
      }
      else{
        console.log("User Already in Tribe")
      }
      }
      else{
        userDetails.tribe_joined = [data]
        let tribeInfo = tribeData;
        tribeInfo.users.push(user.userId);

        await firebaseUpdate(`Users/${user.userId}`, userDetails);
        await firebaseUpdate(`Tribes/${tribeInfo.code}`, tribeInfo);
        const joinedTribes = await authFetch.firebaseGet('Tribes/',userDetails.tribe_joined);
        if(joinedTribes){
          dispatch({ type: Types.SAVE_USER_JOINED_TRIBES, payload:joinedTribes });
        }
      }
    } catch (error) {
      console.warn('Error update user', error)
    }
  }
}

export function startEditPublicTribeInfo() {
  return {
    type: Types.EDIT_PUBLIC_TRIBE_INFO,
    payload: true
  }
}

export function finishEditPublicTribeInfo() {
  return {
    type: Types.EDIT_PUBLIC_TRIBE_INFO,
    payload: false
  }
}

export function startEditPrivateTribeInfo() {
  return {
    type: Types.EDIT_PRIVATE_TRIBE_INFO,
    payload: true
  }
}

export function finishEditPrivateTribeInfo() {
  return {
    type: Types.EDIT_PRIVATE_TRIBE_INFO,
    payload: false
  }
}

export function updateTribeInfo(data) {
  return async (dispatch, getState) => {
    let newData={
       desc:data.aboutTribe || '',
       journey: data.ourJourney || '',
       joinMessage: data.joinTribe || '',
       question:data.question || '',  
    }
    try {
      await firebaseUpdate(`Tribes/${data.code}`, newData);
    } catch (error) {
      console.warn('Error update user', error)
    }
    if (getState().tribe.editPublicTribeInfo) {
      dispatch(finishEditPublicTribeInfo());
    } else {
      dispatch(finishEditPrivateTribeInfo());
    }

  }
}



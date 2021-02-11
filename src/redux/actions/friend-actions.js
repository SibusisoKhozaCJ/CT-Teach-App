import { Types } from "../constants/friend-types";
import { firebaseUpdate } from "../../shared/lib/authorizedFetch";
import * as Auth from "../../shared/lib/authentication";

export function getFriendList(userId) {
  return async (dispatch, getState) => {
    try {
      //const user = await Auth.getUserFriendList(userId);
    } catch (error) {
      console.warn("Error save user", error);
    }
  };
}

export function sendFriendRequest(friendEmail) {
  return async (dispatch, getState) => {
    try {
      //const user = await Auth.getUserFriendList(userId);
    } catch (error) {
      console.warn("Error save user", error);
    }
  };
}
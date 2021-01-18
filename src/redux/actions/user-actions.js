import { Types } from "../constants/user-types";
import {textWithImg, textWithLinks} from "../../shared/lib/regExp";
import {firebaseUpdate} from "../../shared/lib/authorizedFetch";
import * as Auth from "../../shared/lib/authentication";

export function saveUser() {
  return async (dispatch, getState) => {
    try {
      const user = await Auth.getProfile();
      dispatch(setUser(user));
      dispatch(setUserId());
      dispatch(codeToIframe(user.codeInIframe || getState().user.codeInIframe));
      dispatch(emojiCode(user.emojiCode || getState().user.emojiCode));
      dispatch(loadingHandler());
    } catch (error) {
      console.warn('Error save user', error)
    }
  };
}

export function setUser(user) {
  return {
    type: Types.SAVE_USER, payload: user
  }
}

export function setUserId() {
  return async dispatch => {
    const id = await Auth.currentUserId();
    dispatch({
      type: Types.SET_USER_ID,
      payload: id
    })
  }
}

export function loadingHandler() {
  return {
    type: Types.LOADING
  }
}

export function updateUserHeaderUserProfile(data) {
  return async (dispatch, getState) => {
    const user = getState().user;
    const dataUpdate = {
      codeInIframe: data.codeInIframe || getState().user.codeInIframe,
      emojiCode: data.emojiCode || getState().user.emojiCode,
    }
    try {
      await firebaseUpdate(`Teachers/${user.userId}`, dataUpdate);
    } catch (error) {
      console.warn('Error update user', error)
    }
    dispatch(codeToIframe(dataUpdate.codeInIframe));
    dispatch(emojiCode(dataUpdate.emojiCode));
    dispatch(closeModal());
  }
}

export function codeToIframe(code) {
  return {
    type: Types.SET_CODE_IN_IFRAME,
    payload: code
  }
}

export function emojiCode(code) {
  return {
    type: Types.SET_EMOJI_CODE,
    payload: code
  }
}

export function openModal() {
  return {
    type: Types.OPEN_MODAL
  }
}

export function closeModal() {
  return {
    type: Types.CLOSE_MODAL
  }
}

export function findLinkOrImg(text) {
  const matchAllLinks = Array.from(text.matchAll(textWithLinks));
  const matchAllImages = Array.from(text.matchAll(textWithImg));
  const matchAll = matchAllLinks.concat(matchAllImages);

  return {
    type: Types.IS_FIND_LINK_OR_IMG,
    payload: matchAll.length
  }
}

export function updatePublicUserInfo(data) {
  return async (dispatch, getState) => {
    const user = getState().user;
    try {
      await firebaseUpdate(`Teachers/${user.userId}`, data);
    } catch (error) {
      console.warn('Error update user', error)
    }
    dispatch(finishEditUserInfo());

  }
}

export function startEditUserInfo() {
  return {
    type: Types.EDIT_USER_INFO,
    payload: true
  }
}

export function finishEditUserInfo() {
  return {
    type: Types.EDIT_USER_INFO,
    payload: false
  }
}

export function logout() {

}

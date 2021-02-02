import { Types } from "../constants/user-types";
import { textWithImg, textWithLinks } from "../../shared/lib/regExp";
import { firebaseUpdate } from "../../shared/lib/authorizedFetch";
import * as Auth from "../../shared/lib/authentication";

export function saveUser(userId) {
  return async (dispatch, getState) => {
    dispatch(loadingHandler(true));
    try {
      const user = await Auth.getProfile(userId);
      if (!userId) {
        dispatch(setUserId());
      }
      dispatch(setUser(user));
      dispatch(codeToIframe(user.codeInIframe || getState().user.codeInIframe));
      dispatch(emojiCode(user.emojiCode || getState().user.emojiCode));
      dispatch(loadingHandler(false));
    } catch (error) {
      console.warn("Error save user", error);
    }
  };
}

export function setUser(user) {
  return {
    type: Types.SAVE_USER,
    payload: user,
  };
}

export function setUserId() {
  return async (dispatch) => {
    const id = await Auth.currentUserId();
    dispatch({
      type: Types.SET_USER_ID,
      payload: id,
    });
  };
}

export function loadingHandler(val) {
  return {
    type: Types.LOADING,
    payload: val,
  };
}

export function updateUserHeaderUserProfile(data) {
  return async (dispatch, getState) => {
    dispatch(findLinkOrImg(data.codeInIframe));
    const user = getState().user;
    if (!getState().user.isFindLinkOrImg) {
      const dataUpdate = {
        codeInIframe: data.codeInIframe || getState().user.codeInIframe,
        emojiCode: data.emojiCode || getState().user.emojiCode,
      };
      try {
        await firebaseUpdate(`Users/${user.userId}`, dataUpdate);
      } catch (error) {
        console.warn("Error update user", error);
      }
      dispatch(codeToIframe(dataUpdate.codeInIframe));
      dispatch(emojiCode(dataUpdate.emojiCode));
      dispatch(closeModal());
    }
  };
}

export function codeToIframe(code) {
  return {
    type: Types.SET_CODE_IN_IFRAME,
    payload: code,
  };
}

export function emojiCode(code) {
  return {
    type: Types.SET_EMOJI_CODE,
    payload: code,
  };
}

export function openModal() {
  return {
    type: Types.OPEN_MODAL,
  };
}

export function closeModal() {
  return {
    type: Types.CLOSE_MODAL,
  };
}

export function findLinkOrImg(text) {
  const matchAllLinks = Array.from(text.matchAll(textWithLinks));
  const matchAllImages = Array.from(text.matchAll(textWithImg));
  const matchAll = matchAllLinks.concat(matchAllImages);

  return {
    type: Types.IS_FIND_LINK_OR_IMG,
    payload: matchAll.length,
  };
}

export function closeModalWarning() {
  return {
    type: Types.IS_FIND_LINK_OR_IMG,
    payload: false,
  };
}

export function updateUserInfo(data) {
  return async (dispatch, getState) => {
    const user = getState().user;
    try {
      await firebaseUpdate(`Users/${user.userId}`, data);
    } catch (error) {
      console.warn("Error update user", error);
    }
    if (getState().user.editPublicUserInfo) {
      dispatch(finishEditPublicUserInfo());
    } else {
      dispatch(finishEditPrivateUserInfo());
    }
  };
}

export function startEditPublicUserInfo() {
  return {
    type: Types.START_EDIT_PUBLIC_USER_INFO,
    payload: true
  }
}

export function finishEditPublicUserInfo() {
  return {
    type: Types.FINISH_EDIT_PUBLIC_USER_INFO,
    payload: false
  }
}

export function startEditPrivateUserInfo() {
  return {
    type: Types.START_EDIT_PRIVATE_USER_INFO,
    payload: true
  }
}

export function finishEditPrivateUserInfo() {
  return {
    type: Types.FINISH_EDIT_PRIVATE_USER_INFO,
    payload: false
  }
}

export function isCurrentUser(userId, userIdFromUrl) {
  return {
    type: Types.IS_CURRENT_USER,
    payload: userId === userIdFromUrl,
  };
}

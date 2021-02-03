import * as authFetch from "../../shared/lib/authorizedFetch";
import { textWithImg, textWithLinks } from "../../shared/lib/regExp";
import { Types } from "../constants/tribe-types";
import { firebaseUpdate } from "../../shared/lib/authorizedFetch";
export function getUserTribes(user) {
  return async function (dispatch, getState) {
    const userTribes = user.tribe_code;
    const tribeData = await authFetch.firebaseGet("Tribes/" + userTribes);
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
    if (tribeData) {
      const data = [tribeData];
      dispatch({ type: Types.SAVE_USER_TRIBES, payload: data });
    }
  };
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

export function updateTribeHeader(data,tribeCode) {
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

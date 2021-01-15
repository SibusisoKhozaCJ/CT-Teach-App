import * as profileTypes from "../constants/profile-types";
import {textWithImg, textWithLinks} from "../../shared/lib/regExp";

export function handleCodeToIframe(code) {
  return {
    type: profileTypes.SET_CODE_IN_IFRAME,
    payload: code
  }
}

export function handleEmojiCode(code) {
  return {
    type: profileTypes.SET_EMOJI_CODE,
    payload: code
  }
}

export function handleOpenModal() {
  return {
    type: profileTypes.OPEN_MODAL
  }
}

export function handleCloseModal() {
  return {
    type: profileTypes.CLOSE_MODAL
  }
}

export function handleFindLinkOrImg(text) {
  const matchAllLinks = Array.from(text.matchAll(textWithLinks));
  const matchAllImages = Array.from(text.matchAll(textWithImg));
  const matchAll = matchAllLinks.concat(matchAllImages);

  return {
    type: profileTypes.IS_FIND_LINK_OR_IMG,
    payload: matchAll.length
  }
}

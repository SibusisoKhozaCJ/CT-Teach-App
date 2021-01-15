import * as profileTypes from "../constants/profile-types";

const initialState = {
  codeInIframe: '',
  emojiCode: '',
  isOpenModal: false,
  isFindLinkOrImg: false
};

export default function ProfileReducer(state = initialState, action) {
  switch (action.type) {
    case profileTypes.SET_CODE_IN_IFRAME:
      return { ...state, codeInIframe: action.payload };
    case profileTypes.SET_EMOJI_CODE:
      return { ...state, emojiCode: action.payload };
    case profileTypes.OPEN_MODAL:
      return { ...state, isOpenModal: true };
    case profileTypes.CLOSE_MODAL:
      return { ...state, isOpenModal: false };
    case profileTypes.IS_FIND_LINK_OR_IMG:
      if (action.payload > 0) {
        return { ...state, isFindLinkOrImg: true };
      } else {
        return { ...state, isFindLinkOrImg: false };
      }
    default:
      return state;
  }
}

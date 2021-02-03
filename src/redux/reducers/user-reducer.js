import { Types } from "../constants/user-types";
const initialState = {
  user: null,
  userId: null,
  loading: true,
  codeInIframe: "",
  emojiCode: "&#128512;",
  openModal: false,
  isFindLinkOrImg: false,
  editPublicUserInfo: false,
  editPrivateUserInfo: false,
  isCurrentUser: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SAVE_USER:
      return { ...state, user: action.payload };
    case Types.SET_USER_ID:
      return { ...state, userId: action.payload };
    case Types.LOADING:
      return { ...state, loading: action.payload };
    case Types.SET_CODE_IN_IFRAME:
      return { ...state, codeInIframe: action.payload };
    case Types.SET_EMOJI_CODE:
      return { ...state, emojiCode: action.payload };
    case Types.OPEN_MODAL:
      return { ...state, openModal: true };
    case Types.CLOSE_MODAL:
      return { ...state, openModal: false };
    case Types.IS_FIND_LINK_OR_IMG:
      if (action.payload > 0) {
        return { ...state, isFindLinkOrImg: true };
      } else {
        return { ...state, isFindLinkOrImg: false };
      }
    case Types.START_EDIT_PUBLIC_USER_INFO:
      return { ...state, editPublicUserInfo: action.payload };
    case Types.FINISH_EDIT_PUBLIC_USER_INFO:
      return { ...state, editPublicUserInfo: action.payload };
    case Types.START_EDIT_PRIVATE_USER_INFO:
      return { ...state, editPrivateUserInfo: action.payload };
    case Types.FINISH_EDIT_PRIVATE_USER_INFO:
      return { ...state, editPrivateUserInfo: action.payload };
    case Types.IS_CURRENT_USER:
      return { ...state, isCurrentUser: action.payload };
    default:
      return state;
  }
}

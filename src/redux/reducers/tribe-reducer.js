import { Types } from "../constants/tribe-types";
const initialState = {
    userTribes: [],
    userJoinedTribes:[],
    codeInIframe: "",
    emojiCode: "&#128512;",
    openModal: false,
    isFindLinkOrImg: false,
    editPublicTribeInfo: false,
    editPrivateTribeInfo: false,
};
export default function tribeReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SAVE_USER_TRIBES:
      return { ...state, userTribes: action.payload };
    case Types.SAVE_USER_JOINED_TRIBES:
      return { ...state, userJoinedTribes: action.payload };
    case Types.EDIT_PUBLIC_TRIBE_INFO:
      return { ...state, editPublicTribeInfo: action.payload };
    case Types.EDIT_PRIVATE_TRIBE_INFO:
      return { ...state, editPrivateTribeInfo: action.payload };
    
    case Types.SET_TRIBE_CODE_IN_IFRAME:
      return { ...state, codeInIframe: action.payload };
    case Types.SET_TRIBE_EMOJI_CODE:
      return { ...state, emojiCode: action.payload };
    case Types.OPEN_TRIBE_MODAL:
      return { ...state, openModal: true, isFindLinkOrImg: false };
    case Types.CLOSE_TRIBE_MODAL:
      return { ...state, openModal: false };
    case Types.IS_FIND_TRIBE_LINK_OR_IMG:
      if (action.payload > 0) {
          return { ...state, isFindLinkOrImg: true };
      } else {
          return { ...state, isFindLinkOrImg: false };
    }    
    default:
      return state;
  }
}

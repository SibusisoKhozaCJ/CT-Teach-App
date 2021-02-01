import { Types } from "../constants/tribe-types";
const initialState = {
    userTribes: [],
    userJoinedTribes:[],
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
    default:
      return state;
  }
}

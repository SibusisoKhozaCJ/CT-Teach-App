import { Types } from "../constants/friend-types";
const initialState = {
  friendList: [],
  pendingList:[],
  successErrorMessage: ""
};

export default function friendReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SAVE_FRIENDS_LIST:
      return { ...state, friendList: action.payload };
    case Types.SAVE_FRIENDS_PENDING_LIST:
      return { ...state, pendingList: action.payload };
    case Types.SEND_REQUEST_FAILURE:
      return { ...state, successErrorMessage: action.payload };
    default:
      return state;
  }
}

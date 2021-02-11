import { Types } from "../constants/friend-types";
const initialState = {
  friendList:[]
};

export default function friendReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SAVE_FRIENDS_LIST:
      return { ...state, friendList: action.payload };
    default:
      return state;
  }
}

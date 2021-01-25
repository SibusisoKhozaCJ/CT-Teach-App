import { Types } from "../constants/tribe-types";
const initialState = {
    userTribes: [],
    userJoinedTribes:[]
};
export default function tribeReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SAVE_USER_TRIBES:
      return { ...state, userTribes: action.payload };
    case Types.SAVE_USER_JOINED_TRIBES:
      return { ...state, userJoinedTribes: action.payload };
    default:
      return state;
  }
}

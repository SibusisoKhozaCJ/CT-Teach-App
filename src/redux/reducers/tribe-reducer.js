import { Types } from "../constants/tribe-types";
const initialState = {
    userTribes: []
};
export default function tribeReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SAVE_USER_TRIBES:
      return { ...state, userTribes: action.payload };
    default:
      return state;
  }
}

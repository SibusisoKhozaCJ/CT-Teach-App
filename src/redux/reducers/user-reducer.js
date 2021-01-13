import { Types } from "../constants/user-types";
const initialState = {
  user: false
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SAVE_USER:
      return { ...state, user: !state.sidebar };
    default:
      return state;
  }
}

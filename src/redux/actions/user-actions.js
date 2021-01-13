import { Types } from "../constants/user-types";

export function saveUser() {
  return async function(dispatch, getState) {
    dispatch({ type: Types.SAVE_USER, payload: {} });
  };
}

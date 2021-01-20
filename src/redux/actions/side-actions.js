import { Types } from "../constants/sidebar-types";

export function toggleSideBar() {
  return async function(dispatch, getState) {
    dispatch({ type: Types.TOGGLE_SIDEBAR });
  };
}

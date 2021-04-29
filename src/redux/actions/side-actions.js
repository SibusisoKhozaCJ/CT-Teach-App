import { Types } from "../constants/sidebar-types";

export function toggleSideBar() {
  return async function(dispatch, getState) {
    dispatch({ type: Types.TOGGLE_SIDEBAR });
  };
}

export function closeSidebar() {
  return async function(dispatch, getState) {
    dispatch({ type: Types.CLOSE_SIDEBAR });
  };
}
export function openSidebar() {
  return async function(dispatch, getState) {
    dispatch({ type: Types.OPEN_SIDEBAR });
  };
}
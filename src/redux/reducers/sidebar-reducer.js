import { Types } from "../constants/sidebar-types";
const initialState = {
    isSidebarOpened: false
};
export default function sideBarReducer(state = initialState, action) {
  switch (action.type) {
    case Types.TOGGLE_SIDEBAR:
      return { ...state, isSidebarOpened: !state.isSidebarOpened };
    case Types.CLOSE_SIDEBAR:
      return { ...state, isSidebarOpened: false};
      case Types.OPEN_SIDEBAR:
        return { ...state, isSidebarOpened: true};
    default:
      return state;
  }
}

import { Types } from "../constants/friend-types";
const initialState = {
  friendList: [],
  pendingList:[],
  successErrorMessage: "",
  showSuccessModal:false
};

export default function friendReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SAVE_FRIENDS_LIST:
      return { ...state, friendList: action.payload };
    case Types.SAVE_FRIENDS_PENDING_LIST:
      return { ...state, pendingList: action.payload };
    case Types.SEND_REQUEST_FAILURE:
      return { ...state, successErrorMessage: action.payload };
      case Types.SET_REQUEST_SUCCESS:
      return { ...state, showSuccessModal: action.payload };
      case Types.REST_VALUES_TO_DEFAULT:
        return { ...state, showSuccessModal: initialState.showSuccessModal, successErrorMessage:initialState.successErrorMessage };
    default:
      return state;
  }
}

import { Types } from "../constants/progress-types";
const initialState = {
    progressList: [],
    isLoading:true,
    projectList:[]
};
export default function progressReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SAVE_PROGRESS_LIST:
      return { ...state, progressList: action.payload };
  case Types.SET_LOADING:
    return { ...state, isLoading: action.payload };
    case Types.SAVE_PROJECTS_LIST:
    return { ...state, projectList: action.payload };
    default:
      return state;
  }
}

import { Types } from "../constants/projects-types";

const initialState = {
  isLoading: null,
  projectsList: [],
  isCurrentLoading: null,
  currentProject: {}
}

export default function projectsReducer(state = initialState, action) {
  switch (action.type) {
    case Types.PROJECTS_SET_LOADING:
      return { ...state, isLoading: action.payload };
    case Types.PROJECTS_SET_CURRENT_LOADING:
      return { ...state, isCurrentLoading: action.payload };
    case Types.PROJECTS_SET_LIST:
      return { ...state, projectsList: action.payload }
    case Types.PROJECTS_SET_CURRENT:
      return { ...state, currentProject: action.payload }
    default:
      return state;
  }
}

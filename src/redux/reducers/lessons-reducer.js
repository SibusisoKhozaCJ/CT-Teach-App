import { Types } from "../constants/lessons-types";

const initialState = {
  isLoading: null,
  lessonsList: []
}

export default function lessonsReducer(state = initialState, action) {
  switch (action.type) {
    case Types.LESSONS_SET_LOADING:
      return { ...state, isLoading: action.payload };
    case Types.LESSONS_SET_LIST:
      return { ...state, lessonsList: action.payload }
    default:
      return state;
  }
}

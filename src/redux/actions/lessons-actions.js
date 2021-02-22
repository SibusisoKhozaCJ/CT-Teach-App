import { Types } from "../constants/lessons-types";
import * as authFetch from "../../shared/lib/authorizedFetch";

export const lessonsListSetLoading = isLoading => ({
  type: Types.LESSONS_SET_LOADING,
  payload: isLoading
})

export const lessonsSetList = data => ({
  type: Types.LESSONS_SET_LIST,
  payload: data
})

export const lessonsGetList = (projectId) => {
  return async (dispatch) => {
    dispatch({
      type: Types.LESSONS_SET_LOADING,
      payload: true,
    });
    const data = await authFetch.firebaseGetByChild("Lessons", {
      key: "projectId",
      value: projectId
    });

    const lessons = Object.entries(data).map(item => ({ key: item[0], ...item[1] }))
    console.log("projectId", projectId)
    console.log(lessons)

    dispatch({
      type: Types.LESSONS_SET_LIST,
      payload: lessons,
    });

    dispatch({
      type: Types.LESSONS_SET_LOADING,
      payload: false,
    });
  }
}

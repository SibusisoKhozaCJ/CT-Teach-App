import { Types } from "../constants/projects-types";
import * as authFetch from "../../shared/lib/authorizedFetch";

export const projectsListSetLoading = isLoading => ({
  type: Types.PROJECTS_SET_LOADING,
  payload: isLoading
})

export const projectsCurrentSetLoading = isLoading => ({
  type: Types.PROJECTS_SET_CURRENT_LOADING,
  payload: isLoading
})

export const projectsSetCurrent = data => ({
  type: Types.PROJECTS_SET_CURRENT,
  payload: data
})

export const projectsSetList = data => ({
  type: Types.PROJECT_SET_LIST,
  payload: data
})

export const projectsGetList = () => {
  return async (dispatch) => {
    dispatch({
      type: Types.PROJECTS_SET_LOADING,
      payload: true,
    });
    const data = await authFetch.firebaseGet("Projects");

    const projectsList = Object.entries(data).map(item => ({ key: item[0], ...item[1] }))

    dispatch({
      type: Types.PROJECTS_SET_LIST,
      payload: projectsList,
    });

    dispatch({
      type: Types.PROJECTS_SET_LOADING,
      payload: false,
    });
  }
}

export const projectsGetById = id => {
  return async (dispatch) => {
    dispatch({
      type: Types.PROJECTS_SET_CURRENT_LOADING,
      payload: true
    })

    const data = await authFetch.firebaseGet(`Projects/${id}`);

    dispatch({
      type: Types.PROJECTS_SET_CURRENT,
      payload: data,
    });

    dispatch({
      type: Types.PROJECTS_SET_CURRENT_LOADING,
      payload: false
    })
  }
}

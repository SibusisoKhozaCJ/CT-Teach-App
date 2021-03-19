import * as authFetch from "../../shared/lib/authorizedFetch";
import { Types } from "../constants/progress-types";
export function getProgressListOfTribe(tribeCode) {
  return async function (dispatch, getState) {
    dispatch({ type: Types.SET_LOADING, payload: true });
      const tribeData = await authFetch.firebaseGet("Tribes/" + tribeCode);
      if(tribeData){
        const tribeUsers = tribeData.users;
        const progressData = await getAllUsersProgressLessions(tribeUsers);
        dispatch({ type: Types.SAVE_PROGRESS_LIST, payload: progressData });
      }
    dispatch({ type: Types.SET_LOADING, payload: false });
  };
}

async function getAllTribesInfo(userTribes) {
  let tribesInfoList = []
  await Promise.all(
    userTribes.map(async (tribe, index) => {
      const tribeData = await authFetch.firebaseGet("Tribes/" + tribe);
      tribesInfoList.push(tribeData);
    })
  );
  return tribesInfoList;
}


async function getAllUsersProgressLessions(progessUsers) {
  let progressList = []
  await Promise.all(
    progessUsers.map(async (user, index) => {
      const lessionData = await authFetch.firebaseGet("User_profile/" + user);
      const userData = await authFetch.firebaseGet("Users/" + user);
      const progressObject = {
        userInfo:userData,
        progressInfo:lessionData
      }
      progressList.push(progressObject);
    })
  );
  return progressList;
}

export function getAllCourses() {
  return async function (dispatch, getState) {
    dispatch({ type: Types.SET_LOADING, payload: true });
      const coursesData = await authFetch.firebaseGet("Courses/");
      if(coursesData){
        dispatch({ type: Types.SAVE_COURSES_LIST, payload: coursesData });
      }
      dispatch({ type: Types.SET_LOADING, payload: false });
  };
}

export function getCourseProjects(coursId) {
  return async function (dispatch, getState) {
    dispatch({ type: Types.SET_LOADING, payload: true });
      const projectsData = await authFetch.firebaseGet("Project/" + coursId);
      const TrainingDataData = await authFetch.firebaseGet("Training/" + coursId);
      if(projectsData){
        dispatch({ type: Types.SAVE_PROJECTS_LIST, payload: projectsData });
      }
      if(TrainingDataData){
        dispatch({ type: Types.SAVE_TRANING_LIST, payload: TrainingDataData });
      }
      dispatch({ type: Types.SET_LOADING, payload: false });
  };
}

export function getUserTribes() {
  return async function (dispatch, getState) {
    dispatch({ type: Types.SET_LOADING, payload: true });
    const user = getState();
    const userData = user.user.user;
    const userTribe = userData.tribe_code;
    let userJoinedTribes = userData.tribe_joined;
    let userAlltribes = []
    if(userJoinedTribes && userJoinedTribes.length > 0){
      userJoinedTribes.push(userTribe);
      userAlltribes = userJoinedTribes;
    }else{
      userAlltribes.push(userTribe)
    }
    if(userAlltribes && userAlltribes.length > 0){
      const tribesInfo = await getAllTribesInfo(userAlltribes);
      dispatch({ type: Types.USER_TRIBES_LIST, payload: tribesInfo });
    }
    dispatch({ type: Types.SET_LOADING, payload: false });
  };
}



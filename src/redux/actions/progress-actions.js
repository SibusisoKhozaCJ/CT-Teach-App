import * as authFetch from "../../shared/lib/authorizedFetch";
import { Types } from "../constants/progress-types";
export function getProgressListOfTribe(tribeCode) {
  return async function (dispatch, getState) {
    dispatch({ type: Types.SET_LOADING, payload: true });
    const user = getState();
    const userDate = user.user.user;
    const userTribe = userDate.tribe_code;
    let userJoinedTribes = userDate.tribe_joined;
    let userAlltribes = []
    if(userJoinedTribes && userJoinedTribes.length > 0){
      userJoinedTribes.push(userTribe);
      userAlltribes = userJoinedTribes;
    }else{
      userAlltribes.push(userTribe)
    }
    if(userTribe){
      const userTribeData = await authFetch.firebaseGet("Tribes/" + userTribe);
      if(userTribeData){
        const tribeUsers = userTribeData.users;
        const lessionProgressInfo = await getAllUsersProgressLessions(tribeUsers);
        const tribesInfo = await getAllTribesInfo(userAlltribes);
        const projectsData = await authFetch.firebaseGet("Projects/");
        let projectList = []
        if(projectsData){
          Object.entries(projectsData).forEach(([key, value]) => {
            const project = {
              name:key,
              data:value
            }
            projectList.push(project)
          })
        }
        dispatch({ type: Types.SAVE_PROGRESS_LIST, payload: lessionProgressInfo });
        dispatch({ type: Types.SAVE_PROJECTS_LIST, payload: projectList });
      }
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
      const lessionData = await authFetch.firebaseGet("user_profile/" + user);
      const userData = await authFetch.firebaseGet("Users/" + user);
      const progressObject = {
        userInfo:userData,
        progressInfo:lessionData ? lessionData.lesson_progress : {}
      }
      progressList.push(progressObject);
    })
  );
  return progressList;
}



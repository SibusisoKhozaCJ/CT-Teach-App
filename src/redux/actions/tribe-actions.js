import * as authFetch from "../../shared/lib/authorizedFetch";
import { Types } from "../constants/tribe-types";

export function getUserTribes(user) {
  return async function(dispatch, getState) {
    const userTribes = user.tribe_code;
    const tribeData = await authFetch.firebaseGet('Tribes/' + userTribes);
    if(tribeData){
        const data = [tribeData];
        dispatch({ type: Types.SAVE_USER_TRIBES, payload:data });
    }
    
  };
}





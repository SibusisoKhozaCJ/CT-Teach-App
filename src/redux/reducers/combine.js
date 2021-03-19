import { combineReducers } from 'redux';
import userReducer from "./user-reducer";
import sideBarReducer from "./sidebar-reducer";
import tribeReducer from "./tribe-reducer"
import chatReducer from './chat-reducer';
import friendReducer from './friend-reducer';
import codepanelReducer from './codepanel-reducer';
import projectsReducer from './projects-reducer';
import lessonsReducer from './lessons-reducer';
import notificationReducer from './notification-reducer';
import progressReducer from './progress-reducer';

import { Types } from "../constants/combine-types";

const appReducer = combineReducers({
    user:userReducer,
    sidebar:sideBarReducer,
    tribe:tribeReducer,
    chat:chatReducer,
    friend:friendReducer,
    codepanel: codepanelReducer,
    projects: projectsReducer,
    lessons: lessonsReducer,
    notification: notificationReducer,
    progress:progressReducer,

});

const initialState = appReducer({}, {})

const rootReducer = (state, action) => {   
    // Clear all data in redux store to initial.
    if(action.type === Types.DESTROY_SESSION)
       state = initialState;
       return appReducer(state, action);
 };

 export default rootReducer;
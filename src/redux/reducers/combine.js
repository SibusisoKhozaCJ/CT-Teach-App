import { combineReducers } from 'redux';
import userReducer from "./user-reducer";
import sideBarReducer from "./sidebar-reducer";
import tribeReducer from "./tribe-reducer"
import chatReducer from './chat-reducer';
import friendReducer from './friend-reducer';
import codepanelReducer from './codepanel-reducer';

const reducers = combineReducers({
    user:userReducer,
    sidebar:sideBarReducer,
    tribe:tribeReducer,
    chat:chatReducer,
    friend:friendReducer,
    codepanel: codepanelReducer
});

export default reducers;

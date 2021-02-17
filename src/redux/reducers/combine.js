import { combineReducers } from 'redux';
import userReducer from "./user-reducer";
import sideBarReducer from "./sidebar-reducer";
import tribeReducer from "./tribe-reducer"
import codepanelReducer from './codepanel-reducer';
import chatReducer from './chat-reducer';
import friendReducer from './friend-reducer';

const reducers = combineReducers({
    user:userReducer,
    sidebar:sideBarReducer,
    tribe:tribeReducer,
    codepanel: codepanelReducer,
    chat:chatReducer,
    friend:friendReducer
});

export default reducers;

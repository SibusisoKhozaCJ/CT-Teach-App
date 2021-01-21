import { combineReducers } from 'redux';
import userReducer from "./user-reducer";
import sideBarReducer from "./sidebar-reducer";
import tribeReducer from "./tribe-reducer"

const reducers = combineReducers({
    user:userReducer,
    sidebar:sideBarReducer,
    tribe:tribeReducer
});

export default reducers;

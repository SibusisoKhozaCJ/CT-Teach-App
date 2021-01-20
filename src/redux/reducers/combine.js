import { combineReducers } from 'redux';
import userReducer from "./user-reducer";
import sideBarReducer from "./sidebar-reducer"

const reducers = combineReducers({
    user:userReducer,
    sidebar:sideBarReducer
});

export default reducers;

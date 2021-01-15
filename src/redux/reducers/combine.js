import { combineReducers } from 'redux';
import userReducer from "./user-reducer";
import ProfileReducer from "./profile-reducer";

const reducers = combineReducers({
    user:userReducer,
    profile: ProfileReducer
});

export default reducers;

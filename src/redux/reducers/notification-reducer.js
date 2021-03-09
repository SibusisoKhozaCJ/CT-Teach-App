import { SET_NOTIFICATIONS, UPDATE_NOTIFICATIONS, DELETE_NOTIFICATIONS } from "../constants/notification-types";

const initialState = {
    notificationByRooms: {},
    sumNotifications: 0,
}

const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NOTIFICATIONS:
            return {
                notificationByRooms : action.payload.notificationByRooms,
                sumNotifications: action.payload.sumNotifications,
            }
        case UPDATE_NOTIFICATIONS:
            return {
                notificationByRooms: {...state.notificationByRooms, [action.payload]: state.notificationByRooms[action.payload] + 1},
                sumNotifications: state.sumNotifications + 1,
            }
        case DELETE_NOTIFICATIONS: 
            return {
                notificationByRooms: {...state.notificationByRooms, [action.payload]: 0},
                sumNotifications: state.sumNotifications - state.notificationByRooms[action.payload],
            }
        default:
            return state;
    }
}

export default notificationReducer;
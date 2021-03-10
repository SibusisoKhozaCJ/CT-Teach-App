import { SET_NOTIFICATIONS, UPDATE_NOTIFICATIONS, DELETE_NOTIFICATIONS, SWITCH_NOTIFICATION_TYPE } from "../constants/notification-types";

const initLocalStorage = () => localStorage.getItem("notificationType") === null ? 
                                    localStorage.setItem("notificationType", "withNumber") || true: 
                                    localStorage.getItem("notificationType") === "withNumber"

const initialState = {
    notificationByRooms: {},
    sumNotifications: 0,
    notificationWithNumber: initLocalStorage(),
}

const notificationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NOTIFICATIONS:
            return {
                ...state,
                notificationByRooms : action.payload.notificationByRooms,
                sumNotifications: action.payload.sumNotifications,
            }
        case UPDATE_NOTIFICATIONS:
            return {
                ...state,
                notificationByRooms: {...state.notificationByRooms, [action.payload]: state.notificationByRooms[action.payload] + 1},
                sumNotifications: state.sumNotifications + 1,
            }
        case DELETE_NOTIFICATIONS: 
            return {
                ...state,
                notificationByRooms: {...state.notificationByRooms, [action.payload]: 0},
                sumNotifications: state.sumNotifications - state.notificationByRooms[action.payload],
            }
        case SWITCH_NOTIFICATION_TYPE: 
            return {
                ...state,
                notificationWithNumber: !state.notificationWithNumber,
            }
        default:
            return state;
    }
}

export default notificationReducer;
import { SET_NOTIFICATIONS, UPDATE_NOTIFICATIONS, DELETE_NOTIFICATIONS, SWITCH_NOTIFICATION_TYPE, SWITCH_DISPLAY_HEADER_NOTIFICATION } from "../constants/notification-types";

const initNotificationType = () => localStorage.getItem("notificationType") === null ? 
                                    localStorage.setItem("notificationType", "withNumber") || true: 
                                    localStorage.getItem("notificationType") === "withNumber"
                                    
const initHeaderNotification = () => localStorage.getItem("headerNotification") === null ? 
                                    localStorage.setItem("headerNotification", "display") || true: 
                                    localStorage.getItem("headerNotification") === "display"

const initialState = {
    notificationByRooms: {},
    sumNotifications: 0,
    notificationWithNumber: initNotificationType(),
    headerNotification: initHeaderNotification(),
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
        case SWITCH_DISPLAY_HEADER_NOTIFICATION: 
            return {
                ...state,
                headerNotification: !state.headerNotification,
            }
        default:
            return state;
    }
}

export default notificationReducer;
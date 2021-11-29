import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    adminInfo: null,
    users: [],
    topDoctors: [],
    allDoctors: [],
    aDoctors: [],
    schedule: [],
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                adminInfo: action.adminInfo
            }
        case actionTypes.ADMIN_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        case actionTypes.GET_ALL_USERS_SUCCESS:
            state.users = action.users;
            return {
                ...state,
            }
        case actionTypes.GET_ALL_USERS_FAIL:
            state.users = [];
            return {
                ...state,
            }
        case actionTypes.GET_TOP_DOCTORS_SUCCESS:
            state.topDoctors = action.dataDoctors;
            return {
                ...state,
            }
        case actionTypes.GET_TOP_DOCTORS_FAIL:
            state.topDoctors = [];
            return {
                ...state,
            }
        case actionTypes.GET_ALL_DOCTORS_SUCCESS:
            state.allDoctors = action.allDoctors;
            // console.log(state.allDoctors)
            return {
                ...state,
            }
        case actionTypes.GET_ALL_DOCTORS_FAIL:
            state.allDoctors = [];
            return {
                ...state,
            }
        case actionTypes.GET_A_DOCTORS_SUCCESS:
            state.aDoctors = action.aDoctor;
            console.log(state.aDoctors)
            return {
                ...state,
            }
        case actionTypes.GET_A_DOCTORS_FAIL:
            state.aDoctors = [];
            return {
                ...state,
            }
        case actionTypes.GET_ALLCODE_HOUR_SUCCESS:
            state.schedule = action.scheduleData;
            // console.log(state.schedule)
            return {
                ...state,
            }
        case actionTypes.GET_ALLCODE_HOUR_FAIL:
            state.schedule = [];
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default appReducer;
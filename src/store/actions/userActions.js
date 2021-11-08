import actionTypes from './actionTypes';
import { createNewUser } from '../../services/userService'

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})

//login user success
export const userLoginSuccess = (userInfo) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfo: userInfo
})
export const userLoginFail = () => ({
    type: actionTypes.USER_LOGIN_FAIL,

})
export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT,

})

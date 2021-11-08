import actionTypes from './actionTypes';
import { createNewUserService } from '../../services/userService'

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})

//create user success 
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            console.log(res);
            if (res && res.maloi === 0) {
                dispatch(userCreateSuccess())
            } else {
                dispatch(userCreateFail())
            }
        } catch (e) {
            dispatch(userCreateFail())
            console.log('create user failed ' + e)
        }
    }
}
export const userCreateSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})
export const userCreateFail = () => ({
    type: actionTypes.CREATE_USER_FAIL,

})
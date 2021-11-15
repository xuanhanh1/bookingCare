import actionTypes from './actionTypes';
import {
    createNewUserService, getAllUsersService, deleteUserService,
    editUserService
} from '../../services/userService'

export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS
})

//create user success 
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            if (res && res.errCode === 0) {
                dispatch(userCreateSuccess())
                dispatch(getAllUsers());
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
//get all users 
export const getAllUsers = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsersService("ALL");
            if (res && res.errCode === 0) {
                dispatch(getAllUsersSuccess(res.users.reverse()))
            } else {
                dispatch(getAllUsersFail())
            }
        } catch (e) {
            dispatch(getAllUsersFail())
            console.log('create user failed ' + e)
        }
    }
}

export const getAllUsersSuccess = (data) => ({
    type: actionTypes.GET_ALL_USERS_SUCCESS,
    users: data
})
export const getAllUsersFail = () => ({
    type: actionTypes.GET_ALL_USERS_FAIL,

})

// delete user 
export const deleteUsers = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(data);
            if (res && res.errCode === 0) {
                alert('delete success')
                dispatch(deleteUserSuccess())
                dispatch(getAllUsers());
            } else {
                dispatch(deleteUserFail())
            }
        } catch (e) {
            dispatch(deleteUserFail())
            console.log('delete user failed ' + e)
        }
    }
}

export const deleteUserSuccess = (id) => ({
    type: actionTypes.DELETE_USER_SUCCESS,
    users: id
})
export const deleteUserFail = () => ({
    type: actionTypes.DELETE_USER_FAIL,

})

//edit user success 
export const editAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);
            if (res && res.errCode === 0) {
                dispatch(userEditSuccess())
                dispatch(getAllUsers());
            } else {
                dispatch(userEditFail())
            }
        } catch (e) {
            dispatch(userEditFail())
            console.log('create user failed ' + e)
        }
    }
}
export const userEditSuccess = (id) => ({
    type: actionTypes.EDIT_USER_SUCCESS,
    users: id
})
export const userEditFail = () => ({
    type: actionTypes.EDIT_USER_FAIL,

})
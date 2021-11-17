import axios from "../axios";
const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email: email, password: password });
}
const createNewUserService = (data) => {
    // console.log('check data server ' + data);
    alert('create new user success');
    return axios.post('/api/create-new-user', data);
}
const getAllUsersService = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
}
const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: { id: userId }
    });
}
const editUserService = (userId) => {
    return axios.put('/api/edit-user', userId);
}
const getTopDocterHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`);
}
export {
    handleLoginApi, createNewUserService, getAllUsersService,
    deleteUserService, editUserService, getTopDocterHomeService
}








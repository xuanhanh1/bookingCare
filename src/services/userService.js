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
const getAllDoctorService = (inputId) => {
    return axios.get(`/api/get-all-doctors?id=${inputId}`);
}
//get a informatiom of doctor by id
const getAInfoDoctorService = (inputId) => {
    return axios.get(`/api/get-all-info-detail-doctors?id=${inputId}`);
}

const createInfoDoctorService = (data) => {
    // console.log('check data server ' + data);
    alert('crate info doctor success');
    return axios.post('/api/save-info-doctors', data);
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`);
}
const saveBulkScheduleService = (data) => {
    return axios.post(`/api/bulk-create-schedule`, data);
}
const getScheduleDoctorByDate = (doctorId, date) => {
    return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`);
}

export {
    handleLoginApi, createNewUserService, getAllUsersService,
    deleteUserService, editUserService, getTopDocterHomeService,
    getAllDoctorService, createInfoDoctorService, getAInfoDoctorService,
    getAllCodeService, saveBulkScheduleService, getScheduleDoctorByDate
}








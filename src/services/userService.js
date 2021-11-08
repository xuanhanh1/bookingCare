import axios from "../axios";
const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email: email, password: password });
}
const createNewUserService = (data) => {
    console.log('check data server ' + data);
    return axios.post('/post-crud', data);
}
export { handleLoginApi, createNewUserService }








import axios from 'axios';
import { config } from '../config/config';

function getAccesstoken() {
    return localStorage.getItem('accessToken');
}

const axiosInstance = axios.create({
    baseURL: config.API_BASE_URL
});

axiosInstance.defaults.headers.post['responseType'] = 'json';
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axiosInstance;
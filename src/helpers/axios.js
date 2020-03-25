import axios from 'axios';

function getAccesstoken() {
    return localStorage.getItem('accessToken');
}

const axiosInstance = axios.create({
    baseURL: "http://localhost:4000/api/v1"
});

axiosInstance.defaults.headers.post['responseType'] = 'json';
axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default axiosInstance;
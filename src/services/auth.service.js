import axiosInstance from '../helpers/axios';
import loading from '../store/actions/handler-action';
import history from '../helpers/route-history';
import errorMessage from "../store/actions/error.action";
import { userActions } from "../store/actions/user.action";

export const authService = {
    loginUser,
    registerUser,
    logoutUser
};
function setAxiosHeadersAfterLogin(){
    axiosInstance.defaults.headers.post['responseType'] = 'json';
    axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
    axiosInstance.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
}
function loginUser({ email, password }) {
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            axiosInstance.post("/auth/login", {
                "email": email,
                "password": password
            }).then(
                (data) => {
                    dispatch(loading(false));
                    const { firstName, lastName, accessToken, _id } = data.data.data;
                    let name = firstName + " " + lastName;
                    if (accessToken) {
                        localStorage.setItem('accessToken', accessToken);
                        localStorage.setItem('user', JSON.stringify({ name: firstName + " " + lastName, userId: _id }));
                    }
                    history.push('/products');
                    setAxiosHeadersAfterLogin();
                    dispatch(userActions.login({ user: { name } }));
                }
            ).catch((error) => {
                dispatch(loading(false));
                dispatch(errorMessage(error.response.data.error.message,false))
            })
        } catch (err) {

            dispatch(loading(false));
        }
    };
};

function registerUser({ email, password, gender, firstName, lastName }) {
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            axiosInstance.post("/auth/register", {
                email,
                password,
                "role": 'Customer',
                gender,
                firstName,
                lastName
            }).then(
                (data) => {
                    dispatch(loading(false));
                    history.push('/login');
                }
            ).catch((error) => {
                dispatch(loading(false));
                dispatch(errorMessage(error.response.data.error.message,false))
            })
        } catch (err) {
            dispatch(loading(false));
        }
    };
};

function logoutUser() {
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            localStorage.removeItem('user');
            localStorage.removeItem('accessToken');
            dispatch(loading(false));
            dispatch(userActions.login({ user: null }));
            history.push('/')
        } catch (err) {
            dispatch(loading(false));
            return err
        }
    };
}

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
                    const { firstName, lastName, accessToken } = data.data.data;
                    let name = firstName + " " + lastName;
                    if (accessToken) {
                        localStorage.setItem('accessToken', accessToken);
                        localStorage.setItem('user', JSON.stringify({ name: firstName + " " + lastName }));
                    }
                    history.push('/products');
                    dispatch(userActions.login({ user: { name } }));
                }
            ).catch((error) => {
                dispatch(loading(false));
                dispatch(errorMessage(error.response.data.error.message))
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
                    alert("Account created successfully. Please Login");
                    history.push('/login');
                }
            ).catch((error) => {
                dispatch(loading(false));
                dispatch(errorMessage(error.response.data.error.message))
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

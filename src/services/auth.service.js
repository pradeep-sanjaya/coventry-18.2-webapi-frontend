import axiosInstance from '../helpers/axios';
import { userActions } from '../store/actions/user.action';
import loading from '../store/actions/handler-action';
import history from '../helpers/route-history';

export const authService = {
    loginUser,
    registerUser,
    logout
};

function loginUser({ email, password }) {
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            axiosInstance.post("http://localhost:4000/api/v1/auth/login", {
                "email": email,
                "password": password
            }).then(
                (data) => {
                    dispatch(loading(false));
                    const { firstName, lastName, accessToken } = data.data.data;
                    if (accessToken) {
                        localStorage.setItem('accessToken', accessToken);
                        localStorage.setItem('user', JSON.stringify({ name: firstName + " " + lastName }));
                    }
                    history.push('/products');
                    dispatch(userActions.login({ firstName }));
                }
            );
        } catch (err) {
            dispatch(loading(false));
            console.log(err)
        }
    };
};

function registerUser({ email, password, gender, firstName, lastName }) {
    console.log(email)
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            axiosInstance.post("http://localhost:4000/api/v1/auth/register", {
                email,
                password,
                "role": 'Customer',
                gender,
                firstName,
                lastName
            }).then(
                (data) => {
                    dispatch(loading(false));
                    const { status, message } = data.data.data;
                    dispatch(userActions.register({ status, message }));
                }
            );
        } catch (err) {
            dispatch(loading(false));
            console.log(err)
        }
    };
};

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
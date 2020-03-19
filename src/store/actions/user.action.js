import { authService } from '../../services';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const REGISTER_USER = 'REGISTER_USER';

export const userActions = {
    login,
    logout,
    register
};

function login({ firstName }) {
    return {
        type: LOGIN_USER,
        payload: {
            user: firstName
        }
    }
}

function logout() {
    authService.logout();
    return {
        type: LOGOUT_USER
    }
}

function register({ status, message }) {
    return {
        type: REGISTER_USER,
        payload: {
            status,
            message
        }
    }
}
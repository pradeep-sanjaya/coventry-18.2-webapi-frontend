export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export const userActions = {
    login,
    register
};

function login({user}) {
    return {
        type: LOGIN_USER,
        payload: {
            user
        }
    }
}
function register({status,message}) {
    return {
        type: REGISTER_USER,
        payload: {
            status,
            message
        }
    }
}
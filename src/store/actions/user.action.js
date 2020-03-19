export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

export  function loginUserAction({user}) {
    return {
        type: LOGIN_USER,
        payload: {
          user
        }
    }
}
export  function registerUserAction({status,message}) {
    return {
        type: REGISTER_USER,
        payload: {
           status,
           message
        }
    }
}
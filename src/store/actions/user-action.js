export const LOGIN_USER = 'LOGIN_USER';
export const REGISTER_USER = 'REGISTER_USER';

export  function loginUserAction({firstName}) {
    return {
        type: LOGIN_USER,
        payload: {
            user:firstName
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
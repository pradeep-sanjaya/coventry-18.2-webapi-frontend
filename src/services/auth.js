import axiosInstance from "../helpers/axios";
import {loginUserAction, registerUserAction} from "../store/actions/user.action";
import loading from "../store/actions/handler-action";
import history from '../helpers/route-history'
import errorMessage from "../store/actions/error.action";
export  function loginUser({email,password}) {
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            axiosInstance.post("http://localhost:4000/api/v1/auth/login",{
                "email":email,
                "password":password
            }).then(
                (data) => {
                    dispatch(loading(false));
                    const {firstName,lastName,accessToken} = data.data.data;
                    let name = firstName+" "+lastName;
                    if(accessToken) {
                        localStorage.setItem('accessToken',accessToken);
                        localStorage.setItem('user',JSON.stringify({name:firstName+" "+lastName}));
                    }
                    history.push('/products');
                    dispatch(loginUserAction({user:{name}}));
                }
            ).catch((error)=>{
                dispatch(loading(false));
                dispatch(errorMessage(error.response.data.error.message))
            })
        } catch (err) {

            dispatch(loading(false));
        }
    };
};

export  function registerUser({email,password,gender,firstName,lastName}) {
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            axiosInstance.post("http://localhost:4000/api/v1/auth/register",{
                email,
                password,
                "role":'Customer',
                gender,
                firstName,
                lastName
            }).then(
                (data) => {
                    dispatch(loading(false));
                    const {status,message} = data.data.data;
                    dispatch(registerUserAction({status,message}));
                }
            ).catch((error)=>{
                dispatch(loading(false));
                dispatch(errorMessage(error.response.data.error.message))
            })
        } catch (err) {
            dispatch(loading(false));
        }
    };
};
export function logoutUser() {
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            localStorage.removeItem('user');
            localStorage.removeItem('accessToken');
            dispatch(loading(false));
            dispatch(loginUserAction({user:null}));
            history.push('/')
        } catch (err) {
            dispatch(loading(false));
            return err
        }
    };
}

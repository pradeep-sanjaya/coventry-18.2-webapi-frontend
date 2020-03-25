import {LOGIN_USER, LOGOUT_USER, REGISTER_USER} from "../actions/user.action";

export default function userReducer(state = "", { type, payload }) {
    switch (type) {
        case LOGIN_USER:
            return payload.user;
        case REGISTER_USER:
            return payload.user;
        case LOGOUT_USER:
            return payload.message;

        default:
            return state;
    }
}
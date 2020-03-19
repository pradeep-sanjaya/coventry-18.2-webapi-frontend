import { LOGIN_USER } from "../actions/user.action";

export default function userReducer(state = "", { type, payload }) {
    switch (type) {
        case LOGIN_USER:
            return payload.user;
        case LOGIN_USER:
            return payload.user;

        default:
            return state;
    }
}
import {ERROR} from "../actions/error.action";

export default function errorReducer(state = null, { type, payload }) {
    switch (type) {
        case ERROR:
            return payload;
        default:
            return state;
    }
}
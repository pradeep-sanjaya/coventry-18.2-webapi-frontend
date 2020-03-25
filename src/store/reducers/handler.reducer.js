import {LOADING} from "../actions/handler-action";


export default function loadingReducer(state = false, { type, payload }) {
    switch (type) {
        case LOADING:
           return payload;
        default:
            return state;
    }
}
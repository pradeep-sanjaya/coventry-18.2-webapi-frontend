import {UPDATE_CART_TOTAL} from "../actions/carttotal.action";


export default function cartTotalReducer(state = 0.00, { type, payload }) {
    switch (type) {
        case UPDATE_CART_TOTAL:
            return payload.total;
        default:
            return state;
    }
}
import { ADD_TO_CART } from "../actions/cart.action";

export default function cartReducer(state = [], { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            return [...state, payload.item];

        default:
            return state;
    }
}
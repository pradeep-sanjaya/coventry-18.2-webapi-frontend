import { FETCH_PRODUCTS } from "../actions/product-action";

export default function productsReducer(state = [], { type, payload }) {
    switch (type) {
        case FETCH_PRODUCTS:
            return payload.products
        default:
            return state;
    }
}
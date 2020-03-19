import { FETCH_PRODUCTS } from "../actions/products.action";
import { FETCH_POPULAR_PRODUCTS } from "../actions/popularproducts.action";

export default function productsReducer(state = [], { type, payload = [] }) {
    switch (type) {

        case FETCH_PRODUCTS:
            return payload !== undefined && payload.products !== undefined ? payload.products : []

        case FETCH_POPULAR_PRODUCTS:
            return payload.products

        default:
            return state;
    }
}
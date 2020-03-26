import {FETCH_COUPONS} from "../actions/coupon.action";

export default function couponReducer(state = [], { type, payload }) {
    switch (type) {
        case FETCH_COUPONS:
            return payload.item;
        default:
            return state;
    }
}
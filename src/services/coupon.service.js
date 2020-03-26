import axiosInstance from "../helpers/axios";
import {fetchCoupons} from "../store/actions/coupon.action";

export const couponService = {
    getAll,
    applyCoupon
};

function getAll() {
    return async (dispatch) => {
        try {
            axiosInstance.get("/meta/discount-codes").then(
                (data) => {
                    if (data !== undefined) {
                        console.log(data.data.data);
                        dispatch(fetchCoupons(data.data.data));
                    } else {
                        dispatch(fetchCoupons([]));
                    }
                }
            );
        } catch (err) {
            dispatch(fetchCoupons([]));
        }
    };
};
function applyCoupon(code) {
    return async (dispatch) => {
        try {
            axiosInstance.get("/meta/discount-codes").then(
                (data) => {
                    if (data !== undefined) {
                        console.log(data.data.data);
                        dispatch(fetchCoupons(data.data.data));
                    } else {
                        dispatch(fetchCoupons([]));
                    }
                }
            );
        } catch (err) {
            dispatch(fetchCoupons([]));
        }
    };
}

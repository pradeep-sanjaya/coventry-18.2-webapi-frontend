import fetchProducts from "../store/actions/products.action";
import axiosInstance from "../helpers/axios";
import fetchPopularProducts from "../store/actions/popularproducts.action";

export function getProducts() {
    return async (dispatch) => {
        try {
            axiosInstance.get("http://localhost:4000/api/v1/products").then(
                (data) => {
                    if (data !== undefined) {
                        dispatch(fetchProducts(data.data.data));
                    } else {
                        dispatch(fetchProducts([]));
                    }
                }
            );
        } catch (err) {
            dispatch(fetchProducts([]));
        }
    };
};

export function getPopularProducts() {
    return async (dispatch) => {
        try {
            axiosInstance.get("https://products.free.beeceptor.com/my/api/path").then(
                (data) => {
                    dispatch(fetchPopularProducts(data.data.result));
                }
            );
        } catch (err) {

        }
    };
};
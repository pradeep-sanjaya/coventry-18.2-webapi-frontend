import axios from "axios";
import fetchProducts from "../store/actions/products.action";
import fetchPopularProducts from "../store/actions/popularproducts.action";

export function getProducts() {
    return async (dispatch) => {
        try {
            axios.get("https://products.free.beeceptor.com/my/api/path").then(
                (data) => {
                    if (data !== undefined) {
                        dispatch(fetchProducts(data.data.result));
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
            axios.get("https://products.free.beeceptor.com/my/api/path").then(
                (data) => {
                    dispatch(fetchPopularProducts(data.data.result));
                }
            );
        } catch (err) {

        }
    };
};
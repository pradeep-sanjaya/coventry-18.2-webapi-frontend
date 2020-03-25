import axiosInstance from "../helpers/axios";
import fetchProducts from "../store/actions/products.action";
import fetchPopularProducts from "../store/actions/popularproducts.action";

export const productService = {
    getAll,
    getPopular
};

function getAll() {
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

function getPopular() {
    return async (dispatch) => {
        try {
            axiosInstance.get("http://localhost:4000/api/v1/products").then(
                (data) => {
                    dispatch(fetchPopularProducts(data.data.data));
                }
            );
        } catch (err) {

        }
    };
};
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
            axiosInstance.get("/products").then(
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
            axiosInstance.get("/products").then(
                (data) => {
                    dispatch(fetchPopularProducts(data.data.data));
                }
            );
        } catch (err) {

        }
    };
};
import axios from "axios";
import fetchProducts from "../store/actions/products.action";
import fetchPopularProducts from "../store/actions/popularproducts.action";

export const productService = {
    getAll,
    getPopular
};

function getAll() {
    return async (dispatch) => {
        try {
            axios.get("http://localhost:4000/api/v1/products").then(
                (data) => {

                    console.log(data);

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

function getPopular() {
    return async (dispatch) => {
        try {
            axios.get("http://localhost:4000/api/v1/products").then(
                (data) => {
                    dispatch(fetchPopularProducts(data.data.result));
                }
            );
        } catch (err) {

        }
    };
};
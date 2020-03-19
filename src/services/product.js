import fetchProducts from "../store/actions/product-action";
import axiosInstance from "../helpers/axios";

export default function getProducts() {
    return async (dispatch) => {
        try {
            axiosInstance.get("http://localhost:4000/api/v1/products").then(
                (data) => {
                    console.log(data)
                    dispatch(fetchProducts(data.data.data));
                }
            );
        } catch (err) {}
    };
};
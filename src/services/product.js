import axios from "axios";
import fetchProducts from "../store/actions/product-action";

export default function getProducts() {
    return async (dispatch) => {
        try {
            axios.get("https://products.free.beeceptor.com/my/api/path").then(
                (data) => {
                    dispatch(fetchProducts(data.data.result));
                }
            );
        } catch (err) {}
    };
};
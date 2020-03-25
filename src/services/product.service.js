import axiosInstance from "../helpers/axios";
import fetchProducts from "../store/actions/products.action";
import fetchPopularProducts from "../store/actions/popularproducts.action";
import {addToCart} from "../store/actions/cart.action";

export const productService = {
    getAll,
    getPopular,
    addItemToCart,
    getUserCart,
    updateCart
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
                  //  dispatch(fetchPopularProducts(data.data.data));
                }
            );
        } catch (err) {

        }
    };
};
function addItemToCart(product) {
    return async (dispatch) => {
        try {
            axiosInstance.post("/cart/products",{
                "userId": JSON.parse(localStorage.getItem('user')).userId ?? null,
                "selected": [
                    {
                        "productId": product._id,
                        "selectedQty": 1
                    }
                ]
            }).then(
                (data) => {
                    if(data.data.data.selected){
                       product.selectedQty = data.data.data.selected[0].selectedQty
                        dispatch(addToCart(product));
                    }
                }
            );
        } catch (err) {

        }
    };
};
function updateCart(product,cart) {
    return async (dispatch) => {
        try {
            let itemsAdded = [];
            cart.forEach((item)=>{
              itemsAdded.push({
                  "productId": item._id,
                  "selectedQty": item.selectedQty
              });
            });
            itemsAdded.push({
                "productId": product._id,
                "selectedQty": 1
            });
            axiosInstance.put("/cart/products/"+JSON.parse(localStorage.getItem('user')).userId ?? null,{
                "userId": JSON.parse(localStorage.getItem('user')).userId ?? null,
                "selected": itemsAdded
            }).then(
                (data) => {

                    if(data.data.data.selected) {
                       let productItem = data.data.data.selected.filter((item)=>{
                          return item.productId === product._id;
                       });
                        product.selectedQty = productItem[0].selectedQty;
                        dispatch(addToCart(product));
                    }
                }
            );
        } catch (err) {
            console.log(err)
        }
    };
};
function getUserCart() {
    return async (dispatch) => {
        try {
            axiosInstance.get("/cart/products/"+JSON.parse(localStorage.getItem('user')).userId ?? null).then(
                (data) => {

                     if(data.data.data.products) {
                         data.data.data.products.forEach((item)=>{
                              dispatch(addToCart(item));
                         })
                     }
                }
            );
        } catch (err) {

        }
    };
};
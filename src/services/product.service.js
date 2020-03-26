import axiosInstance from "../helpers/axios";
import fetchProducts from "../store/actions/products.action";
import fetchPopularProducts from "../store/actions/popularproducts.action";
import {
    addToCart,
    deleteItemFromCart,
    descreaseCartItemQty,
    increaseCartItemQty,
    updateCartItems
} from "../store/actions/cart.action";
import history from "../history";

export const productService = {
    getAll,
    getPopular,
    addItemToCart,
    getUserCart,
    updateCart,
    deleteFromCart,
    increaseItemQtyCart,
    decreaseItemQtyCart,
    placeOrder
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
            axiosInstance.post("/cart/products", {
                "userId": JSON.parse(localStorage.getItem('user')).userId ?? null,
                "selected": [
                    {
                        "productId": product._id,
                        "selectedQty": 1
                    }
                ]
            }).then(
                (data) => {
                    if (data.data.data.selected) {
                        product.selectedQty = data.data.data.selected[0].selectedQty
                        dispatch(addToCart(product));
                    }
                }
            );
        } catch (err) {

        }
    };
};
function updateCart(product, cart) {
    return async (dispatch) => {
        try {
            let itemsAdded = [];
            cart.forEach((item) => {
                itemsAdded.push({
                    "productId": item._id,
                    "selectedQty": item.selectedQty
                });
            });
            itemsAdded.push({
                "productId": product._id,
                "selectedQty": 1
            });
            axiosInstance.put("/cart/products/" + JSON.parse(localStorage.getItem('user')).userId ?? null, {
                "userId": JSON.parse(localStorage.getItem('user')).userId ?? null,
                "selected": itemsAdded
            }).then(
                (data) => {

                    if (data.data.data.selected) {
                        let productItem = data.data.data.selected.filter((item) => {
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
function deleteFromCart(product,cart) {
    return async (dispatch) => {
        try {
            let deletedItem = {
              _id:product._id
            };
            let newCartAfterDelete = [];
            let newCartItems = cart.filter((item)=>{
               return item._id !== deletedItem._id
            });
            newCartItems.forEach((item) => {
                newCartAfterDelete.push({
                    "productId": item._id,
                    "selectedQty": item.selectedQty
                });
            });
            axiosInstance.put("/cart/products/" + JSON.parse(localStorage.getItem('user')).userId ?? null, {
                "userId": JSON.parse(localStorage.getItem('user')).userId ?? null,
                "selected": newCartAfterDelete
            }).then(
                (data) => {
                    console.log(data)
                    if (data.data.data.selected) {

                        dispatch(deleteItemFromCart(product));

                    }
                }
            );
        } catch (err) {
            console.log(err)
        }
    };
}
function increaseItemQtyCart(product,cart) {
    return async (dispatch) => {
        try {

            dispatch(increaseCartItemQty(product));

            let itemToBeIncreasedQty = cart.filter((item)=>{
                return item._id === product._id
            });


            let rest = cart.filter((item)=>{
                return item._id !== product._id
            });

            let newCart = [...rest,itemToBeIncreasedQty[0]];
            let newCartUpdate = [];
            newCart.forEach((item) => {
                newCartUpdate.push({
                    "productId": item._id,
                    "selectedQty": item.selectedQty
                });
            });
            axiosInstance.put("/cart/products/" + JSON.parse(localStorage.getItem('user')).userId ?? null, {
                "userId": JSON.parse(localStorage.getItem('user')).userId ?? null,
                "selected": newCartUpdate
            }).then(
                (data) => {
                    console.log(data)
                }
            );
        } catch (err) {
            console.log(err)
        }
    };
}
function decreaseItemQtyCart(product,cart) {
    return async (dispatch) => {
        try {
            dispatch(descreaseCartItemQty(product))

            let itemToBeIncreasedQty = cart.filter((item)=>{
                return item._id === product._id
            });


            let rest = cart.filter((item)=>{
                return item._id !== product._id
            });

            let newCart = [...rest,itemToBeIncreasedQty[0]];
            let newCartUpdate = [];
            newCart.forEach((item) => {
                newCartUpdate.push({
                    "productId": item._id,
                    "selectedQty": item.selectedQty
                });
            });
            axiosInstance.put("/cart/products/" + JSON.parse(localStorage.getItem('user')).userId ?? null, {
                "userId": JSON.parse(localStorage.getItem('user')).userId ?? null,
                "selected": newCartUpdate
            }).then(
                (data) => {
                    console.log(data)
                }
            );

        } catch (err) {
            console.log(err)
        }
    };
}
function getUserCart() {
    return async (dispatch) => {
        try {
            axiosInstance.get("/cart/products/" + JSON.parse(localStorage.getItem('user')).userId ?? null).then(
                (data) => {

                    if (data.data.data.products) {
                        data.data.data.products.forEach((item) => {
                            dispatch(addToCart(item));
                        })
                    }
                }
            );
        } catch (err) {

        }
    };
};
function placeOrder({paymentType,street,district,zipCode}) {
    return async (dispatch) => {
        try {
            axiosInstance.post("/orders",{
                "userId":JSON.parse(localStorage.getItem('user')).userId ?? null,
                paymentType,
                "deliveryAddress": {
                    street,
                    district,
                    zipCode
                }
            }).then(
                (data) => {
                    console.log(data)
                    if (data.data.data) {
                        window.location.href = "/"

                    }
                }
            );
        } catch (err) {

        }
    };
};
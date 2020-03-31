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
import loading from "../store/actions/handler-action";
import {updateCartTotal} from "../store/actions/carttotal.action";
import errorMessage from "../store/actions/error.action";

export const productService = {
    getAll,
    getPopular,
    addItemToCart,
    getUserCart,
    updateCart,
    deleteFromCart,
    increaseItemQtyCart,
    decreaseItemQtyCart,
    placeOrder,
    addDiscountToCart
};

function getAll() {
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            axiosInstance.get("/products").then(
                (data) => {
                    if (data !== undefined) {
                        dispatch(loading(false));
                        dispatch(fetchProducts(data.data.data));
                    } else {
                        dispatch(loading(false));
                        dispatch(fetchProducts([]));
                    }
                }
            );
        } catch (err) {
            dispatch(loading(false));
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
function addItemToCart(product,qty=1) {
    console.log(qty)
    return async (dispatch) => {
        try {
            axiosInstance.post("/cart/products", {
                "userId": JSON.parse(localStorage.getItem('user')).userId ?? null,
                "selected": [
                    {
                        "productId": product._id,
                        "selectedQty": qty
                    }
                ]
            }).then(
                (data) => {
                    if (data.data.data.selected) {

                        let {netTotalPrice} = data.data.data;

                        product.selectedQty = data.data.data.selected[0].selectedQty;

                        dispatch(updateCartTotal(netTotalPrice));
                        let productNew = {
                            productId:product._id,
                            selectedQty:product.selectedQty,
                            isAvailable:product.isAvailable,
                            name:product.name,
                            category:product.category,
                            qty:product.qty,
                            price:product.price,
                            imageUrl:product.imageUrl
                        };
                        dispatch(addToCart(productNew));

                    }
                }
            ).catch((error) => {
                dispatch(errorMessage(error.response.data.error.message,false))
            });
        } catch (err) {

        }
    };
};
function updateCart(product, cart,qty=1) {
    return async (dispatch) => {
        try {
            let itemsAdded = [];
            cart.forEach((item) => {
                itemsAdded.push({
                    "productId": item.productId,
                    "selectedQty": item.selectedQty
                });
            });
            itemsAdded.push({
                "productId": product._id,
                "selectedQty": qty
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

                        let {netTotalPrice} = data.data.data;

                        dispatch(updateCartTotal(netTotalPrice));
                        let productNew = {
                            productId:product._id,
                            selectedQty:product.selectedQty,
                            isAvailable:product.isAvailable,
                            name:product.name,
                            category:product.category,
                            qty:product.qty,
                            price:product.price,
                            imageUrl:product.imageUrl
                        };
                        dispatch(addToCart(productNew));
                    }
                }
            ).catch((error) => {
                dispatch(errorMessage(error.response.data.error.message,false))
            });
        } catch (err) {
            console.log(err)
        }
    };
};
function deleteFromCart(product,cart) {
    return async (dispatch) => {
        try {
            let deletedItem = {
              productId:product.productId
            };
            let newCartAfterDelete = [];
            let newCartItems = cart.filter((item)=>{
               return item.productId !== deletedItem.productId
            });
            newCartItems.forEach((item) => {
                newCartAfterDelete.push({
                    "productId": item.productId,
                    "selectedQty": item.selectedQty
                });
            });
            axiosInstance.delete("/cart/"+JSON.parse(localStorage.getItem('user')).userId+"?productId="+deletedItem.productId).then(
                (data) => {
                    let {netTotalPrice} = data.data.data;
                    dispatch(updateCartTotal(netTotalPrice));
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
                return item.productId === product.productId
            });

            let rest = cart.filter((item)=>{
                return item.productId !== product.productId
            });

            let newCart = [...rest,itemToBeIncreasedQty[0]];
            let newCartUpdate = [];

            newCart.forEach((item) => {
                newCartUpdate.push({
                    "productId": item.productId,
                    "selectedQty": item.selectedQty
                });
            });
            axiosInstance.put("/cart/products/" + JSON.parse(localStorage.getItem('user')).userId ?? null, {
                "userId": JSON.parse(localStorage.getItem('user')).userId ?? null,
                "selected": newCartUpdate
            }).then(
                (data) => {
                    let {netTotalPrice} = data.data.data;
                    dispatch(updateCartTotal(netTotalPrice));
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
            dispatch(descreaseCartItemQty(product));

            let itemToBeIncreasedQty = cart.filter((item)=>{
                return item.productId === product.productId
            });


            let rest = cart.filter((item)=>{
                return item.productId !== product.productId
            });

            let newCart = [...rest,itemToBeIncreasedQty[0]];
            let newCartUpdate = [];
            newCart.forEach((item) => {
                newCartUpdate.push({
                    "productId": item.productId,
                    "selectedQty": item.selectedQty
                });
            });
            axiosInstance.put("/cart/products/" + JSON.parse(localStorage.getItem('user')).userId ?? null, {
                "userId": JSON.parse(localStorage.getItem('user')).userId ?? null,
                "selected": newCartUpdate
            }).then(
                (data) => {
                    let {netTotalPrice} = data.data.data;
                    dispatch(updateCartTotal(netTotalPrice));
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
            dispatch(loading(true));
            axiosInstance.get("/cart/products/" + JSON.parse(localStorage.getItem('user')).userId ?? null).then(
                (data) => {
                    let {netTotalPrice} = data.data.data;
                    dispatch(updateCartTotal(netTotalPrice));

                    if (data.data.data.selected) {
                        data.data.data.selected.forEach((item) => {
                            dispatch(loading(false));
                            dispatch(addToCart(item));
                        })
                    }
                }
            )
        } catch (err) {
            dispatch(loading(false));
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
                    if (data.data.data) {

                        dispatch(updateCartTotal(0));

                        dispatch(errorMessage("Order placed successfully.",true));

                        window.location.href = "/"

                    }
                }
            ).catch((error) => {
                dispatch(loading(false));
                dispatch(errorMessage(error.response.data.error.message,false))
            });
        } catch (err) {

        }
    };
};
function addDiscountToCart(coupon){
    return async (dispatch) => {
        dispatch(loading(true));
        try {
            axiosInstance.post("/meta/discount-codes/validate", {
                "userId": JSON.parse(localStorage.getItem('user')).userId ?? null,
                "discountCode": coupon
            }).then(
                (data) => {

                    if (data.data.data.selected) {
                        let {netTotalPrice} = data.data.data;
                        dispatch(updateCartTotal(netTotalPrice));
                    }
                    dispatch(loading(false));
                    dispatch(errorMessage(`Coupon added. Rs.${parseFloat(data.data.data.discountsDeducted).toFixed(2)} deducted from your total value.`,true))
                }
            ).catch((error) => {
                dispatch(loading(false));
                dispatch(errorMessage(error.response.data.error.message,false))
            })
        } catch (err) {
            console.log(err)
            dispatch(loading(false));
        }
    };
};
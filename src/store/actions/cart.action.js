export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const INCREASE_QTY = 'INCREASE_QTY';
export const DECREASE_QTY = 'DECREASE_QTY';

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: {
            item: item
        }
    }
}
export function deleteItemFromCart(item) {
    return {
        type: DELETE_FROM_CART,
        payload: {
            item: item
        }
    }
}
export function updateCartItems(items) {
    return {
        type: UPDATE_CART,
        payload: {
            item: items
        }
    }
}
export function increaseCartItemQty(item) {

    return {
        type: INCREASE_QTY,
        payload: {
            item: item
        }
    }
}
export function descreaseCartItemQty(item) {

    return {
        type: DECREASE_QTY,
        payload: {
            item: item
        }
    }
}
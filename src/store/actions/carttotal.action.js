export const UPDATE_CART_TOTAL = 'UPDATE_CART_TOTAL';

export function updateCartTotal(total) {
    return {
        type: UPDATE_CART_TOTAL,
        payload: {
            total: total
        }
    }
}
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export default function fetchProducts(products) {
    return {
        type: FETCH_PRODUCTS,
        payload: {
            products: products
        }
    }
}
export const FETCH_POPULAR_PRODUCTS = 'FETCH_POPULAR_PRODUCTS';

export default function fetchPopularProducts(products) {
    return {
        type: FETCH_POPULAR_PRODUCTS,
        payload: {
            products: products
        }
    }
}
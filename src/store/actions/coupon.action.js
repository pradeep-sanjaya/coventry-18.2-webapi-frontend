export const FETCH_COUPONS = 'FETCH_COUPONS';
export function fetchCoupons(items) {
    return {
        type: FETCH_COUPONS,
        payload: {
            item: items
        }
    }
}
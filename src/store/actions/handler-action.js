export const LOADING = 'LOADING';

export default function loading(value) {
    return {
        type: LOADING,
        payload:value
    }
}
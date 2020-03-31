export const ERROR = 'ERROR';

export default function errorMessage(message,type) {
    return {
        type: ERROR,
        payload:{message,type}
    }
}
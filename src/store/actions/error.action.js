export const ERROR = 'ERROR';

export default function errorMessage(message) {
    return {
        type: ERROR,
        payload:message
    }
}
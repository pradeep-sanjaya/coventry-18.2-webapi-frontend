import errorMessage from "../store/actions/error.action";

export function resetError() {
    return async (dispatch) => {
        dispatch(errorMessage(null,false))
    };
}
export function setError(error) {
    return async (dispatch) => {
        dispatch(errorMessage(error,false))
    };
}
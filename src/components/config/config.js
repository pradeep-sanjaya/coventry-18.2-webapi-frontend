let getConfig = () => {
    if (process.env.NODE_ENV === 'development') {
        return {
            API_BASE_URL: "http://localhost:4000/api/v1"
        }
    } else {
        return {
            API_BASE_URL: "https://webapi-backend.herokuapp.com/api/v1"
        }
    }
}

export const config = getConfig();
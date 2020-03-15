import productsReducer from "./product_reducer";
import userReducer from "./user_reducer";
import {
    combineReducers
} from 'redux'
import cartReducer from "./cart-reducer";

export default combineReducers({
    products: productsReducer,
    user: userReducer,
    cart: cartReducer
});
import { combineReducers } from 'redux'
import productsReducer from "./product.reducer";
import userReducer from "./user.reducer";
import cartReducer from "./cart.reducer";

export default combineReducers({
    products: productsReducer,
    user: userReducer,
    cart: cartReducer
});
import { combineReducers } from 'redux'
import productsReducer from "./product.reducer";
import userReducer from "./user.reducer";
import cartReducer from "./cart.reducer";
import loadingReducer from "./handler.reducer";
import errorReducer from "./error.reducer";
import couponReducer from "./coupon.reducer";

export default combineReducers({
    products: productsReducer,
    user: userReducer,
    cart: cartReducer,
    loading:loadingReducer,
    error:errorReducer,
    coupons:couponReducer,
});
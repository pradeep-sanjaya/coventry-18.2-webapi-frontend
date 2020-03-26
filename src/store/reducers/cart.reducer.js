import {ADD_TO_CART, DECREASE_QTY, DELETE_FROM_CART, INCREASE_QTY, UPDATE_CART} from "../actions/cart.action";

export default function cartReducer(state = [], { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            return [...state, payload.item];
        case DELETE_FROM_CART:
          return state.filter((item) => {
               return item._id === payload.item._id
            });
        case INCREASE_QTY:
            return state.filter((item) => {
                if (item._id === payload.item._id ){
                    item.selectedQty = item.selectedQty+1;
                }
                return item;
            });
        case DECREASE_QTY:
            return state.filter((item) => {
                if (item._id === payload.item._id ){
                    item.selectedQty = item.selectedQty-1;
                }
                return item;
            });
        default:
            return state;
    }
}
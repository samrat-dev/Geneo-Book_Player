import CartActionTypes from "./cart.types";
import { Util_addItemToCart } from "./cart.utils";

const InitialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CartActionTypes.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: Util_addItemToCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;
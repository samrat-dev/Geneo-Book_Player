import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOOGLE_CART_HIDDEN
})

export const addToCart = item => ({
    type: CartActionTypes.ADD_TO_CART,
    payload: item
})


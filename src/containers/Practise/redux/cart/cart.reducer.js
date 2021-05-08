import CartActionTypes from "./cart.types";

const InitialState = {
    hidden: true
}

const cartReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CartActionTypes.TOOGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cartReducer;
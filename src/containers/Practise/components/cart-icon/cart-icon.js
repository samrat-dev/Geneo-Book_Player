import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import './cart-icon.scss';

const cartIcon = ({ toggleCart, itemCount }) => (
    <div className="cart-icon" onClick={toggleCart}>
        <Icon className="shooping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapstateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce((total, item) => {
        return total + item.quantity
    }, 0)
});
const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCartHidden())
});

export default connect(mapstateToProps, mapDispatchToProps)(cartIcon);


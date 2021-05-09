import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(item => <CartItem key={item.id} item={item} />)
            }
        </div>
        <CustomButton>Go to Checkout</CustomButton>
    </div>
)

const mapstateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapstateToProps)(CartDropdown);
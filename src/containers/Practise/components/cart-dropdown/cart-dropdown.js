import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.scss';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from './../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(item => <CartItem key={item.id} item={item} />) : <span>Cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/practise/checkout')
            dispatch(toggleCartHidden());
        }
        }>
            Go to Checkout
        </CustomButton>
    </div>
)

const mapstateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapstateToProps)(CartDropdown));
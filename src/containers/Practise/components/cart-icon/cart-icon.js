import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import './cart-icon.scss';

const cartIcon = ({ toggleCart }) => (
    <div className="cart-icon" onClick={toggleCart}>
        <Icon className="shooping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(cartIcon);


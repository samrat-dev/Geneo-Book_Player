import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import './cart-icon.scss';

const cartIcon = ({ toggleCart, itemCount }) => (
    <div className="cart-icon" onClick={toggleCart}>
        <Icon className="shooping-icon" />
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapstateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});
const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCartHidden())
});

export default connect(mapstateToProps, mapDispatchToProps)(cartIcon);


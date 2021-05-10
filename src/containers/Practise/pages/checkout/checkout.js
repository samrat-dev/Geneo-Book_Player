import { React } from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from './../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';

const CheckoutPage = ({ CartItems, CartTotal }) => {

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Desc</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                CartItems.map(item => <CheckoutItem item={item} />)
            }
            <div className="total">
                <span>Total: ${CartTotal}</span>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    CartItems: selectCartItems,
    CartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.scss';

const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  return (<div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt="item" />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <span className='remove-button'>&#10005;</span>
  </div>)
};

export default CheckoutItem;
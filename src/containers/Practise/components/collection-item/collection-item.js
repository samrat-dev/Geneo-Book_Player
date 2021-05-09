import React from 'react';
import { connect } from 'react-redux';

import './collection-item.scss';
import CustomButton from './../custom-button/custom-button';
import { addToCart } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addToCart }) => {
  const { name, price, imageUrl } = item;
  return (<div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={() => { addToCart(item) }}>Add To Cart</CustomButton>
  </div>)
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => dispatch(addToCart(item))
  }
}
export default connect(null, mapDispatchToProps)(CollectionItem);
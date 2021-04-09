import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';
import useHover from '../hooks/useHover';
import Icon from './icons/Icon';

const CartItem = ({ item }) => {
  const [isHovered, ref] = useHover();
  const { removeFromCart } = useContext(Context);

  return (
    <div className='cart-item-wrapper'>
      <div className='item_img-wrapper'>
        <img src={item.url} alt={item.id} />
      </div>
      <Icon
        name='trash'
        width='30'
        height='30'
        color={!isHovered ? '#000' : 'red'}
        className='trash-icon'
        onClick={() => removeFromCart(item.id)}
        ref={ref}
      />
      <p>$7.99</p>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
};

export default CartItem;

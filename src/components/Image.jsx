import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';
import useHover from '../hooks/useHover';

import Icon from './icons/Icon';

const Image = ({ img, className }) => {
  const [isHovered, ref] = useHover();
  const { toggleFavorite, cartItems, addToCart, removeFromCart } = useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <Icon
          name='heart'
          width='30'
          height='30'
          color='#fff'
          className='image_icon image_icon--heart image--active'
          onClick={() => {
            toggleFavorite(img.id);
          }}
        />
      );
    } else if (isHovered) {
      return (
        <Icon
          name='heart'
          width='30'
          height='30'
          color='#fff'
          className='image_icon image_icon--heart'
          onClick={() => {
            toggleFavorite(img.id);
          }}
        />
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <Icon
          name='plus'
          width='30'
          height='30'
          color='#fff'
          className='image_icon image_icon--plus image_icon--added'
          onClick={() => removeFromCart(img.id)}
        />
      );
    } else if (isHovered) {
      return (
        <Icon
          name='plus'
          width='30'
          height='30'
          color='#fff'
          className='image_icon image_icon--plus'
          onClick={() => addToCart(img)}
        />
      );
    }
  }

  return (
    <div
      className={
        img.isFavorite
          ? `image-container image--active ${className}`
          : `image-container ${className}`
      }
      ref={ref}
    >
      <img src={img.url} alt='' className='image-grid' loading='lazy' />
      <div className='image_icon-container'>
        {heartIcon()}
        {cartIcon()}
      </div>
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;

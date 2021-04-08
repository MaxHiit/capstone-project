import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';

import Icon from './icons/Icon';

const Image = ({ img, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { toggleFavorite, addToCart } = useContext(Context);

  const playHoverFunc = () => {
    setIsHovered(true);
  };

  const stopHoverFunc = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={
        img.isFavorite
          ? `image-container image--active ${className}`
          : `image-container ${className}`
      }
      onMouseEnter={playHoverFunc}
      onMouseLeave={stopHoverFunc}
    >
      <img src={img.url} alt='' className='image-grid' />
      <div className='image_icon-container'>
        {isHovered && (
          <>
            <Icon
              name='heart'
              width='30'
              height='30'
              color='#fff'
              className={!img.isFavorite ? 'image_icon' : 'image_icon image_icon--active'}
              onClick={() => {
                toggleFavorite(img.id);
              }}
            />
            <Icon
              name='plus'
              width='30'
              height='30'
              color='#fff'
              className='image_icon'
              onClick={() => addToCart(img)}
            />
          </>
        )}
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

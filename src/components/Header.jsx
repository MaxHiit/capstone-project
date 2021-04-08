import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

import Icon from './icons/Icon';

const Header = () => {
  const { countItem } = useContext(Context);

  return (
    <>
      <header>
        <div className='container'>
          <Link to='/'>
            <h1>Pic Some</h1>
          </Link>
          <Link to='/carts'>
            <Icon name='shop' width='30' height='30' color='#fff' className='count-icon' />
            <div
              className={
                countItem === 0
                  ? 'count-wrapper count-wrapper--hidden'
                  : 'count-wrapper count-wrapper--visible'
              }
            >
              <span className='count'>{countItem}</span>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;

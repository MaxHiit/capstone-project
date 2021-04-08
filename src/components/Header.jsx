import React from 'react';
import { Link } from 'react-router-dom';

import Icon from './icons/Icon';

const Header = () => {
  return (
    <>
      <header>
        <div className='container'>
          <Link to='/'>
            <h1>Pic Some</h1>
          </Link>
          <Link to='/carts'>
            <Icon name='shop' width='30' height='30' color='#fff' />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;

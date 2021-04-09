import React, { useState, useContext } from 'react';
import { Context } from '../Context';

import CartItem from '../components/CartItem';

const Carts = () => {
  const { cartItems, emptyCart } = useContext(Context);
  const [buttonText, setButtonText] = useState('Remove all order');

  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  // simulates a delay to show a loading when we delete our cart
  const setOrder = () => {
    setButtonText('Ordering...');
    setTimeout(() => {
      setButtonText('Remove all order');
      emptyCart();
    }, 3000);
  };

  return (
    <main className='container'>
      <div className='cart-page-container'>
        <h1>Cart Pages</h1>
        <div className='cart-item-container'>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <p className='total-cost'>Total: {totalCostDisplay} </p>
        {cartItems.length > 0 ? (
          <button className='order-button' onClick={setOrder}>
            {buttonText}
          </button>
        ) : (
          <p>You no items in your cart.</p>
        )}
      </div>
    </main>
  );
};

export default Carts;

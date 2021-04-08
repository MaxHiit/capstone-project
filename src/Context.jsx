import React, { useState, useEffect } from 'react';

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [countItem, setCountItem] = useState(0);

  const apiUrl =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

  useEffect(() => {
    // get data from the api
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  // update isFavorite params of the img object when i click on the favorite button
  const toggleFavorite = (id) => {
    const updateArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        console.log(id);
        console.log(!photo.isFavorite);
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(updateArr);
  };

  // add the image to the cart page
  const addToCart = (newItem) => {
    setCartItems((prevItem) => [...prevItem, newItem]);
    setCountItem(cartItems.length + 1);
  };

  // remove the image from the cart page
  const removeFromCart = (id) => {
    setCartItems((prevItem) => prevItem.filter((item) => item.id !== id));
    setCountItem((prevCount) => prevCount - 1);
  };

  return (
    <Context.Provider
      value={{ allPhotos, cartItems, countItem, toggleFavorite, addToCart, removeFromCart }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };

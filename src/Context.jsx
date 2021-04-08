import React, { useState, useEffect } from 'react';

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const apiUrl =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';

  useEffect(() => {
    // get data from the api
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  // update isFavorite params of the photo when i click on the favorite button
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

  // add an image to the cart
  const addToCart = (newItem) => {
    console.log(newItem);
    setCartItems((prevItem) => [...prevItem, newItem]);
  };

  return (
    <Context.Provider value={{ allPhotos, toggleFavorite, addToCart }}>{children}</Context.Provider>
  );
};

export { ContextProvider, Context };

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Photos from '../pages/Photos';
import Carts from '../pages/Carts';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Photos />
        </Route>
        <Route path='/carts'>
          <Carts />
        </Route>
      </Switch>
    </>
  );
};

export default App;

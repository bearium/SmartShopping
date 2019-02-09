import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import ShoppingCart from './components/ShoppingCart';
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="main">
        <Scene key="cart" component={ShoppingCart} title="Cart" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;

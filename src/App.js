import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

// Components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.componet'

// eslint-disable-next-line
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;

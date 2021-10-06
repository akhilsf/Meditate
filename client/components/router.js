import React from 'react';
import {NativeRouter, Route, Link} from 'react-router-native';
import HomePage from './HomePage/HomePage.jsx';

const Router = () => (
  <NativeRouter>
    <Route exact path='/' component={HomePage} />
  </NativeRouter>
);

export default Router;

import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import store from './store';
import Routes from './routes';
import { colors } from './styles';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor={colors.secundary} />
    <Routes />
  </Provider>
);

export default App;

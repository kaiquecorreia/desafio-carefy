import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';

import Routes from './routes';
import { colors } from './styles';

const App = () => (
  <Fragment>
    <StatusBar barStyle="light-content" backgroundColor={colors.secundary} />
    <Routes />
  </Fragment>
);

export default App;

import React, { Component, Fragment } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import store from './store';
import Routes from './routes';
import { setNavigator } from './services/navigation';
import { colors } from './styles';

/**
 * Conecta na store do redux e retorna as rotas e seus componentes
 */
const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.secundary} />
      <Routes ref={setNavigator} />
    </Provider>
  );
};

export default App;

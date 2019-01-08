import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from '../../redux/store/store';
import { Routes } from '../../routes/routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export { App };

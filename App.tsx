import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './src/navigation';
import configureStore from './src/store';

const store = configureStore();

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from 'components/App';

const { store, persistor } = configureStore();

const render = () =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>,
    document.getElementById('root'),
  );

render();
if (module.hot) module.hot.accept('./components/App', () => render());

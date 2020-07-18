import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from 'components/App';

const store = configureStore();

const render = () =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );

render();
if (module.hot) module.hot.accept('./components/App', () => render());

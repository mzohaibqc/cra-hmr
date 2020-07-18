import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'store';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from 'components/App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root"),
  );

render();
if (module.hot) module.hot.accept("./components/App", () => render());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

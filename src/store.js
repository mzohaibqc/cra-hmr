/*
 * store.js
 */

import { createStore } from 'redux';
import rootReducer from 'reducers'; // aka this is your rootReducer

// eslint-disable-next-line no-underscore-dangle
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
  const store = createStore(rootReducer, reduxDevTools);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};

export default configureStore;

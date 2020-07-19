import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import appReducer from './app.reducer';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
  app: appReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);

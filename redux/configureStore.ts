import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiMiddleware } from '../api/apiMiddleware';

const persistConfig = {
  key: 'ُTRULUX',
  version: 1,
  storage,
  whitelist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
//const reduxSagaMonitorOptions = {};
//const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, //TODO CHECK THIS
    }).concat(apiMiddleware),
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;

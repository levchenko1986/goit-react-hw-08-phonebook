import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import reducer from './contacts/contacts-reducers.js';
import AuthReducer from '../redux/authorization/auth-slice';
import storage from 'redux-persist/lib/storage';
const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};
export const store = configureStore({
  reducer: {
    contacts: reducer,
    auth: persistReducer(authPersistConfig, AuthReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

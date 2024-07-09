// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistedTodoReducer from './todoSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos'],
};

const persistedReducer = persistReducer(persistConfig, persistedTodoReducer);

const store = configureStore({
  reducer: {
    todos: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };

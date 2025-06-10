'use client'

import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './slices/cartSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const myPersistReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  reducer: {
    shoppingCart: myPersistReducer,
  },
})

export const persistore = persistStore(store)

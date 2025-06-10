'use client'

import { Provider } from 'react-redux'
import { persistore, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

export default function Providers({ children }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistore}>{children}</PersistGate>
      </Provider>
    </>
  )
}

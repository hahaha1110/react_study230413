import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rooReducer'
import { useMemo } from 'react'

const initializeStore = () => {
  const store = configureStore({ reducer: rootReducer, middleware: [] })
  return store
}

export function useStore() {
  const store = useMemo(() => initializeStore(), [])
  return store
}

// export const store = configureStore({ reducer: rootReducer, middleware: [] })

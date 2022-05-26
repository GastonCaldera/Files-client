import { configureStore } from '@reduxjs/toolkit'
import filesReducer from './files'

export const store = configureStore({
  reducer: filesReducer,
})
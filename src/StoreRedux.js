import { configureStore } from '@reduxjs/toolkit'
import ListReducer from './ListSlice'

export const store = configureStore({
  reducer: {
    lists:ListReducer
  },
})

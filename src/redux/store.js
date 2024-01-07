import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './admin/adminSlice'
import tokenSlice from './admin/tokenSlice'

export default configureStore({
  reducer: {
    adminReducer : adminSlice,
    tokenReducer: tokenSlice
  },
})
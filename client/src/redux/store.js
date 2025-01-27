import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productslice'

export default configureStore({
  reducer: {
    product:productSlice
  }
})
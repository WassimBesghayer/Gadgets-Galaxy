import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productslice'
import orderSlice  from './orderSlice'


export default configureStore({
  reducer: {
    product:productSlice,
    order:orderSlice
  
  }
})
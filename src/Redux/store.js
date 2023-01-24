import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../Redux/createSlice'

 
export const store = configureStore({
    reducer: {
    cart:cartSlice,
    
    },
})
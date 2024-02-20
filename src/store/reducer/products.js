import { createSlice } from '@reduxjs/toolkit'
import { sortByDate } from '../../helper/sortedByDate'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
   products: []
  }, 
  reducers: {
    setProducts: (state, action) => {
      state.products = sortByDate(action.payload)
    //   console.log(sortByDate(action.payload));
    },
    addProduct: (state, action) => {
      state.products = [action.payload, ...state.products] 
    },
    delProduct: (state, action) => {
      state.products = state.products.filter((item)=> item._id !== action.payload)
    },
    editProduct: (state, action) => {
      state.products = state.products.map((item)=> item._id === action.payload._id ? action.payload : item)
    }
  },
})

export const { setProducts, addProduct, delProduct, editProduct } = productsSlice.actions

export default productsSlice.reducer
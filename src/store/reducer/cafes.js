import { createSlice } from '@reduxjs/toolkit'
import { sortByDate } from '../../helper/sortedByDate'

export const cafesSlice = createSlice({
  name: 'cafes',
  initialState: {
    value: []
  },
  reducers: {
    setCafes: (state, action) => {
      state.value = sortByDate(action.payload)
    //   console.log(sortByDate(action.payload));
    },
    addCafe: (state, action) => {
      state.value = [action.payload, ...state.value] 
    },
    DelCafe: (state, action) => {
      state.value = state.value.filter((item)=> item.id !== action.payload)
    },
    editCafe: (state, action) => {
      state.value = state.value.map((item)=> item.id === action.payload.id ? action.payload : item)
    }
  },
})

export const { setCafes, addCafe, DelCafe, editCafe } = cafesSlice.actions

export default cafesSlice.reducer
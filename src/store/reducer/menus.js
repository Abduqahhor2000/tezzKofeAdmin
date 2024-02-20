import { createSlice } from '@reduxjs/toolkit'
import { sortByDate } from '../../helper/sortedByDate'

export const menusSlice = createSlice({
  name: 'menus',
  initialState: {
   menus: []
  },
  reducers: {
    setMenus: (state, action) => {
      state.menus = sortByDate(action.payload)
    //   console.log("dsfsdfsd",sortByDate(action.payload));
    },
    addMenu: (state, action) => {
      state.menus = [action.payload, ...state.menus] 
    },
    delMenu: (state, action) => {
      state.menus = state.menus.filter((item)=> item._id !== action.payload)
    },
    editMenu: (state, action) => {
      state.menus = state.menus.map((item)=> item._id === action.payload._id ? action.payload : item)
    }
  },
})

export const { setMenus, addMenu, delMenu, editMenu } = menusSlice.actions

export default menusSlice.reducer
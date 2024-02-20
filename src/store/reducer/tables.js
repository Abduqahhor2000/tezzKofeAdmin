import { createSlice } from '@reduxjs/toolkit'
import { sortByDate } from '../../helper/sortedByDate'

export const tablesSlice = createSlice({
  name: 'tables',
  initialState: {
    tables: []
  },
  reducers: {
    setTables: (state, action) => {
      state.tables = sortByDate(action.payload)
    //   console.log(sortByDate(action.payload));
    },
    addTable: (state, action) => {
      state.tables = [action.payload, ...state.tables] 
    },
    delTable: (state, action) => {
      state.tables = state.tables.filter((item)=> item._id !== action.payload)
    },
    editTable: (state, action) => {
      state.tables = state.tables.map((item)=> item._id === action.payload._id ? action.payload : item)
    }
  },
})

export const { setTables, addTable, delTable, editTable } = tablesSlice.actions

export default tablesSlice.reducer
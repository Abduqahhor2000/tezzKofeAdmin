import { createSlice } from '@reduxjs/toolkit'
import { sortByDate } from '../../helper/sortedByDate'

export const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: []
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = sortByDate(action.payload)
    //   console.log(sortByDate(action.payload));
    },
    addEmployee: (state, action) => {
      state.employees = [action.payload, ...state.employees] 
    },
    delEmployee: (state, action) => {
      state.employees = state.employees.filter((item)=> item.id !== action.payload)
    },
    editEmployee: (state, action) => {
      state.employees = state.employees.map((item)=> item.id === action.payload.id ? action.payload : item)
    }
  },
})

export const { setEmployees, addEmployee, delEmployee, editEmployee } = employeesSlice.actions

export default employeesSlice.reducer
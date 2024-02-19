import { createSlice } from '@reduxjs/toolkit'

export const roleSlice = createSlice({
  name: 'role',
  initialState: {
    role: "",
  },
  reducers: {
    putRole: (state, action) => {
      state.role = action.payload
    },
    removeRole: (state) => {
      state.role = ""
    },
  },
})

export const { putRole, removeRole } = roleSlice.actions

export default roleSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    admin: {},
  },
  reducers: {
    putAdmin: (state, action) => {
      state.admin = action.payload
    },
    removeAdmin: (state) => {
      state.admin = {}
    },
  },
})

export const { putAdmin, removeAdmin } = adminSlice.actions

export default adminSlice.reducer
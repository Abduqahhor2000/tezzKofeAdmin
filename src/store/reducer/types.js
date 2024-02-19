import { createSlice } from "@reduxjs/toolkit";

export const typesSlice = createSlice({
  name: "types",
  initialState: {
    types: [],
  },
  reducers: {
    setTypes: (state, action) => {
      state.types = action.payload
    },
    addType: (state, action) => {
      state.types = [action.payload, ...state.types];
    },
    delType: (state, action) => {
      state.types = state.types.filter((item) => item._id !== action.payload);
    },
    editType: (state, action) => {
      state.types = state.types.map((item) =>
        item._id === action.payload._id ? action.payload : item
      );
    },
  },
});

export const { setTypes, addType, delType, editType } = typesSlice.actions;

export default typesSlice.reducer;

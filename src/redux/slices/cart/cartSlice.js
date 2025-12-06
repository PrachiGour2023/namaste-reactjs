import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    items: [],
    error: null,
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
    clearItem: (state, action) => {
      state.items.length = [];
    },
  },
});

export const { addItems, removeItems, clearItem } = cartSlice.actions;
export default cartSlice.reducer;

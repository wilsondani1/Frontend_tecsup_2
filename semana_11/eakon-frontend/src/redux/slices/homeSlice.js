import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value++
    },
    decrement: (state) => {
      state.value--
    }
  }
});

export const { increment, decrement } = homeSlice.actions;

export default homeSlice.reducer;
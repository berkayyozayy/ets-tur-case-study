import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "card",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log("state increasing...");
    },
    decrement: (state) => {
      state.value -= 1;
      console.log("state decreasing...");
    },
  },
});

export const { increment, decrement } = cardSlice.actions;

export const selectScore = (state) => state.card.value;

export default cardSlice.reducer;

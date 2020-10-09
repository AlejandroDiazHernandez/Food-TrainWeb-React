import { createSlice } from "@reduxjs/toolkit";

export const userViewSliceName = "userView";
const userViewSlice = createSlice({
  name: userViewSliceName,
  initialState: {},
  reducers: {},
});

// Cada reducer se convierte en una acción y puedo exportarla
export const { doExample } = userViewSlice.actions;

export const selectexample = (state) => state[userViewSliceName].example;

export default userViewSlice.reducer;

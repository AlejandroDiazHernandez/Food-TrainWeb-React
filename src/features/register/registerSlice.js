import { createSlice } from "@reduxjs/toolkit";

export const registerSliceName = "register";
const registerSlice = createSlice({
  name: registerSliceName,
  initialState: {
    users: [],
    submitted: false,
  },
  reducers: {
    doCreateUser: (state, action) => {
      const newUser = action.payload;
      state.user.push(newUser);
    },
  },
});

// Cada reducer se convierte en una acción y puedo exportarla
export const { doCreateUser } = registerSlice.actions;

export const selectuser = (state) => state[registerSliceName].user;
export const selectsubmitted = (state) => state[registerSliceName].submitted;

export default registerSlice.reducer;

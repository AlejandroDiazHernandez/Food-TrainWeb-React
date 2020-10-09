import { createSlice } from "@reduxjs/toolkit";
import { getUserByUsernameAndPassword } from "../../sessionStorage";

export const loginSliceName = "login";
const loginSlice = createSlice({
  name: loginSliceName,
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    doLogin: (state, action) => {
      const { username, password } = action.payload;
      const user = getUserByUsernameAndPassword(username, password);

      if (user) {
        state.user = user;
        state.isAuthenticated = true;
      }
    },
  },
});

// Cada reducer se convierte en una acción y puedo exportarla
export const { doLogin } = loginSlice.actions;

export const selectUser = (state) => state[loginSliceName].user;
export const selectIsAuthenticated = (state) =>
  state[loginSliceName].isAuthenticated;

export default loginSlice.reducer;

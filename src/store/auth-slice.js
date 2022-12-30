import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem("id_token")
  ? localStorage.getItem("id_token")
  : null;

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: !!token, token: token },
  reducers: {
    login(state, action) {
      state.token = action.payload;
      state.isAuthenticated = true;
    },

    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
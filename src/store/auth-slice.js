import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false, token: null },
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
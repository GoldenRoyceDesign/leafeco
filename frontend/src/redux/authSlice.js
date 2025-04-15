import { createSlice } from "@reduxjs/toolkit";
import { loadCart } from "./cartSlice"; // Import loadCart action

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = authSlice.actions;

// ✅ Dispatch loadCart() when login happens
export const loginUser = (userData) => (dispatch) => {
  dispatch(login(userData));
  dispatch(loadCart(userData.user.id)); // Load cart from localStorage after login
};

export default authSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index.js";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  status: "idle",
  error: null,
};

export const register = createAsyncThunk(
  "/register, registerUser",
  async (newUser) => {
    try {
      return await api.registerUser(newUser);
    } catch (err) {
      return err.message;
    }
  }
);

export const login = createAsyncThunk("/login, userLogin", async (userData) => {
  try {
    return await api.userLogin(userData);
  } catch (err) {
    return err.message;
  }
});

export const signOut = createAsyncThunk("signOut, userSignOut", async () => {
  await api.userLogOut();
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => (state = initialState),
  },
  extraReducers(builder) {
    builder
      .addCase(register.pending, (state) => {
        state.status = "pending";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "new user created";
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(state.status);
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        console.log(state.status);
        state.error = action.error.message;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;

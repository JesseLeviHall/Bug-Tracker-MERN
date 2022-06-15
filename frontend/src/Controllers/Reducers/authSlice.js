import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index.js";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

const user = JSON.parse(localStorage.getItem("user"));

export const login = createAsyncThunk("login, userLogin", async (userData) => {
  try {
    return await api.userLogin(userData);
  } catch (err) {
    return err.message;
  }
});

export const signOut = createAsyncThunk(
  "signOut, userSignOut",
  async (user) => {
    try {
      return await api.userLogOut(user);
    } catch (err) {
      return err.message;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;

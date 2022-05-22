import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/index.js";

const getBugs = createAsyncThunk("bugs/getBugs", async (thunkAPI) => {
  try {
    const response = await api.fetchBugs();
  } catch (error) {
    console.log(error.message);
  }
});

const addBug = createAsyncThunk(
  "bugs/addBug",
  async (add, { rejectWithValue }) => {
    try {
      const response = await api.createBug();
    } catch (err) {
      return rejectWithValue("Opps there seems to be an error");
    }
  }
);

const bugSlice = createSlice({
  name: "bug",
  initialState: { entities: [], loading: false },
  reducers: {
    fetchBugs: (state) => {},
    createBug: (state, action) => {},
    updateBugs: (state, action) => {},
    markComplete: (state, action) => {},
    deleteBug: (state, action) => {},
  },
  extraReducers: {
    [getBugs.pending]: (state) => {
      state.loading = true;
    },
    [getBugs.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getBugs.rejected]: (state) => {
      state.loading = false;
    },
    [addBug.pending]: (state) => {
      state.loading = true;
    },
    [addBug.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [addBug.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const bugReducer = bugSlice.reducer;

export const { fetchBugs, createBug, updateBugs, markComplete, deleteBug } =
  bugSlice.actions;

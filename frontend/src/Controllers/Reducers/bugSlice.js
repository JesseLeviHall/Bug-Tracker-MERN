import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import * as api from "../../api/index.js";

const initialState = {
  bugs: [],
  status: "idle",
  error: null,
};

export const fetchBugs = createAsyncThunk("viewbugs/fetchBugs", async () => {
  try {
    const response = await api.fetchBugs();
    return [...response.data];
  } catch (err) {
    return err.message;
  }
});

const addBug = createAsyncThunk(
  "viewbugs/addBug",
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
    getAll(state, action) {},
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
    [addBug.pending]: (state, action) => {
      state.loading = true;
    },
    [addBug.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [addBug.rejected]: (state, action) => {
      state.loading = false;
      console.log(action.payload);
    },
  },
});

export const { getAll } = bugSlice.actions;
export default bugSlice.reducer;

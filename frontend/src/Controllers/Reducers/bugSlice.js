import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index.js";

const initialState = {
  bugs: [],
  status: "idle",
  error: null,
};

export const fetchBugs = createAsyncThunk("viewbugs/fetchBugs", async () => {
  try {
    const response = await api.fetchBugs();
    console.log(response.request.response);
    return response.request.response;
  } catch (err) {
    return err.message;
  }
});

export const addBug = createAsyncThunk(
  "viewbugs/addBug",
  async (initialPost) => {
    try {
      const response = await api.createBug(initialPost);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const bugSlice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    bugAdded: {
      reducer(state, action) {
        state.bugs.push(action.payload);
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBugs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBugs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bugs = action.payload;
      })
      .addCase(fetchBugs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllBugs = (state) => state.bugs.bugs;
export const getBugsStatus = (state) => state.bugs.status;
export const getBugsError = (state) => state.bugs.error;

export const { bugAdded } = bugSlice.actions;

export default bugSlice.reducer;

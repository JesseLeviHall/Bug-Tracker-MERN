import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/index.js";

const initialState = {
  bugs: [],
  status: "idle",
  error: null,
};

export const fetchBugs = createAsyncThunk("viewbugs/fetchBugs", async () => {
  try {
    return await api.fetchBugs();
  } catch (err) {
    return err.message;
  }
});

export const addBug = createAsyncThunk("viewbugs/addBug", async (newBug) => {
  try {
    return await api.createBug(newBug);
  } catch (err) {
    return err.message;
  }
});

export const deleteBug = createAsyncThunk("viewbugs/deleteBug", async (id) => {
  try {
    return await api.deleteBug(id);
  } catch (err) {
    return err.message;
  }
});

const bugSlice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      //get
      .addCase(fetchBugs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBugs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bugs = action.payload;
      })
      .addCase(fetchBugs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //create
      .addCase(addBug.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addBug.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.bugs.push(action.payload);
      })
      .addCase(addBug.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      //delete
      .addCase(deleteBug.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteBug.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bugs = state.bugs.filter((bug) => bug._id !== action.payload.id);
      })
      .addCase(deleteBug.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllBugs = (state) => state.bugs.bugs;
export const getBugsStatus = (state) => state.bugs.status;
export const getBugsError = (state) => state.bugs.error;

export const { reset } = bugSlice.actions;

export default bugSlice.reducer;

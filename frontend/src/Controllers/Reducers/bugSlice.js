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
    console.log(newBug);
    return await api.createBug(newBug);
  } catch (err) {
    return err.message;
  }
});

export const editBug = createAsyncThunk(
  "viewbugs/updateBug",
  async (updatedBug) => {
    try {
      console.log(updatedBug);
      return await api.updateBug(updatedBug);
    } catch (err) {
      return err.message;
    }
  }
);

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
      .addCase(addBug.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bugs.push(action.payload);
        console.log(action.payload);
      })

      //update
      .addCase(editBug.fulfilled, (state, action) => {
        if (!action.payload?._id) {
          console.log("Update could not be completed");
          console.log(action.payload);
          return;
        }
        state.status = "succeeded";
        console.log(state.status);
        console.log(action.payload);
      })

      //delete
      .addCase(deleteBug.fulfilled, (state, action) => {
        if (!action.payload?._id) {
          console.log("Could not delete");
          console.log(action.payload);
          return;
        }
        const { id } = action.payload;
        const bugs = state.bugs.filter((bug) => bug._id !== id);
        state.bugs = bugs;
      });
  },
});

export const selectAllBugs = (state) => state.bugs.bugs;
export const getBugsStatus = (state) => state.bugs.status;
export const getBugsError = (state) => state.bugs.error;
export const selectBugById = (state, bugId) =>
  state.bugs.bugs.find((bug) => bug._id === bugId);

export const { reset } = bugSlice.actions;

export default bugSlice.reducer;

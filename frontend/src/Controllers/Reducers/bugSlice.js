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

export const addBug = createAsyncThunk(
  "viewbugs/addBug",
  async (initialPost) => {
    try {
      const response = await api.createBug(initialPost);
      return response.data;
    } catch (err) {
      return rejectWithValue("Opps there seems to be an error");
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
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name,
            detail,
            steps,
            webpage,
            priority,
            assigned,
            creator,
            time,
          },
        };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBugs.pending, (state, action) => {
        state.status = "loading";
        state.bugs = state.bugs.concat(loadedBugs);
      })
      .addCase(fetchBugs.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(fetchBugs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addBug.fulfilled, (state, action) => {
        console.log(action.payload);
        state.bugs.push(action.payload);
      });
  },
});

export const selectAllBugs = (state) => state.bugs.bugs;
export const getBugsStatus = (state) => state.bugs.status;
export const getBugsError = (state) => state.bugs.error;

export const { bugAdded } = bugSlice.actions;

export default bugSlice.reducer;

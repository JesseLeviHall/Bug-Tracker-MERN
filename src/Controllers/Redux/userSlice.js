import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "jess man" });
      state.push({ name: "corts ferrar" });
    },
  },
});

export default slice.reducer;

export const { getUser } = slice.actions;

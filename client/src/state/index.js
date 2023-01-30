import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  // userId: "63701cc1f03239b7f700000e",
  userId: "63701d24f03239867500012b",

  // stdId: "161020750003",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
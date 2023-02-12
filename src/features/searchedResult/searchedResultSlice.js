import { createSlice } from "@reduxjs/toolkit";

export const searchedResultSlice = createSlice({
  name: "searchedResultSlice",
  initialState: { results: [] },
  reducers: {
    setResult: (state, action) => {
      state.results = [...action.payload];
    },
  },
});

export const { setResult } = searchedResultSlice.actions;

export default searchedResultSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  total: 0,
  fail: 0,
  gpa: 0,
  subjectCount: 0,
  cgpa: 0,
  subjInfo: [],
};

export const resultSlice = createSlice({
  name: "resultSlice",
  initialState,
  reducers: {
    upDateMarksheet: (state, action) => {
      state.total = state.total + action.payload.subMark;
      state.fail = state.fail + action.payload.fail;
      state.gpa = state.gpa + action.payload.gpa;
      state.subjInfo = [...state.subjInfo, action.payload.subjInfo];
      state.subjectCount = state.subjectCount + action.payload.subjectCount;
    },
    imptyMarksheet: (state, action) => {
      state.total = 0;
      state.fail = 0;
      state.gpa = 0;
      state.subjInfo = [...action.payload];
      state.subjectCount = 0;
    },
  },
});

export const { upDateMarksheet, imptyMarksheet } = resultSlice.actions;

export default resultSlice.reducer;

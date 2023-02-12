import { createSlice } from "@reduxjs/toolkit";

export const inputElmSlice = createSlice({
  name: "inputElmSlice",
  initialState: {
    inputSubjects: [
      {
        name: "Bangla",
        id: "Bangla",
        type: "main",
        max: 100,
        placeHolder: "1st,2nd",
      },
      {
        name: "English",
        id: "English",
        type: "main",
        max: 100,
        placeHolder: "1st,2nd",
      },
    ],
  },
  reducers: {
    addSubject: (state, action) => {
      state.inputSubjects = [...state.inputSubjects, action.payload];
    },

    removeSubject: (state, action) => {
      state.inputSubjects = state.inputSubjects.filter(
        (item) => item.name != action.payload
      );
    },
  },
});

export const { addSubject, removeSubject } = inputElmSlice.actions;

export default inputElmSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

import resultReducer from "../features/resultSheet/resulSlice";
import inputElementReducer from "../features/inputElement/inputElmSlice";
import searchedResultReducer from "../features/searchedResult/searchedResultSlice";
const store = configureStore({
  reducer: {
    resultSheet: resultReducer,
    inputElement: inputElementReducer,
    searchedResult: searchedResultReducer,
  },
});
export default store;

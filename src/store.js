import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import layoutReducer from "./redux/slice/layoutSlice";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
  middleware: [thunk],
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapsed: false,
  fullScreen: false,
  userBar: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    switchCollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
    switchUserBar: (state, action) => {
      state.userBar = action.payload;
    },
    setFullScreen: (state, action) => {
      state.fullScreen = action.payload;
    },
  },
});

export const { switchCollapsed, switchUserBar, setFullScreen } =
  layoutSlice.actions;

export default layoutSlice.reducer;

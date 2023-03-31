import { createSlice } from "@reduxjs/toolkit";

export interface DisplayState {
  darkMode: boolean;
  displayMode: boolean
}
const initialState: DisplayState = {
  darkMode: false,
  displayMode: false,
};

export const displayModeSlice = createSlice({
  name: "displayMode",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setDisplayMode: (state, action) => {
      state.displayMode = action.payload;
    },
  },
});

export const { setDarkMode, setDisplayMode } = displayModeSlice.actions;

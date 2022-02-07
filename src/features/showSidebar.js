import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = true;

export const showSideBarSlice = createSlice({
  name: "showSideBarState",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleSidebar } = showSideBarSlice.actions;

export default showSideBarSlice.reducer;

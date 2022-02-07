import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const searchInputSlice = createSlice({
  name: "searchInputState",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = searchInputSlice.actions;

export default searchInputSlice.reducer;

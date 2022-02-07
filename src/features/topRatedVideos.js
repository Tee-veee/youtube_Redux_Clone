import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTopRated = createAsyncThunk(
  "topRatedState/getTopRatedData",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=52&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API}`
      );

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const topRatedVideoSlice = createSlice({
  name: "topRatedState",
  initialState: {
    data: [],
    loading: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getTopRated.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getTopRated.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.message = "success";
    },
    [getTopRated.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
    },
  },
});

export default topRatedVideoSlice;

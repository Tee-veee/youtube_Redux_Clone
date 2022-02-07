import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSearchVideo = createAsyncThunk(
  "getSearchVideoState/getSearchVideoData",
  async (searchParam, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&statistics&maxResults=50&q=${searchParam}&type=video&key=${process.env.REACT_APP_YOUTUBE_API}`
      );

      const videoData = await response.json();

      return videoData;
    } catch (error) {
      console.log(error);
    }
  }
);

const getSearchVideoSlice = createSlice({
  name: "getSearchVideoState",
  initialState: {
    data: [],
    loading: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getSearchVideo.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getSearchVideo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.message = "success";
    },
    [getSearchVideo.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
    },
  },
});

export default getSearchVideoSlice;

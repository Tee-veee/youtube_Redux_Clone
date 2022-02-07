import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSimilarVideo = createAsyncThunk(
  "getSimilarVideoState/getSimilarVideoData",
  async (channelTitle, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&statistics&maxResults=25&q=${channelTitle}&type=video&key=${process.env.REACT_APP_YOUTUBE_API}`
      );

      const videoData = await response.json();
      console.log(videoData);
      return videoData;
    } catch (error) {
      console.log(error);
    }
  }
);

const getSimilarVideoSlice = createSlice({
  name: "getSimilarVideoState",
  initialState: {
    data: [],
    loading: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getSimilarVideo.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getSimilarVideo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.message = "success";
    },
    [getSimilarVideo.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
    },
  },
});

export default getSimilarVideoSlice;

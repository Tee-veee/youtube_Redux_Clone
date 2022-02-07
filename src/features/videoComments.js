import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getVideoComments = createAsyncThunk(
  "getVideoCommentsState/getVideoCommentsData",
  async (video_id, { rejectWithValue }) => {
    try {
      const videoCommentsResponse = await fetch(
        `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${video_id}&maxResults=50&key=${process.env.REACT_APP_YOUTUBE_API}`
      );
      const videoCommentsData = await videoCommentsResponse.json();

      return videoCommentsData;
    } catch (error) {
      console.log(error);
    }
  }
);

const getVideoCommentsSlice = createSlice({
  name: "getVideoCommentsState",
  initialState: {
    data: [],
    loading: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getVideoComments.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getVideoComments.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.message = "success";
    },
    [getVideoComments.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
    },
  },
});

export default getVideoCommentsSlice;

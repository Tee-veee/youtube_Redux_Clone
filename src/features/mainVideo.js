import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getMainVideo = createAsyncThunk(
  "getMainVideoState/getMainVideoData",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${process.env.REACT_APP_YOUTUBE_API}`
      );

      const videoData = await response.json();
      const finalVideoData = videoData.items[0];

      return finalVideoData;
    } catch (error) {
      console.log(error);
    }
  }
);

const getMainVideoSlice = createSlice({
  name: "getMainVideoState",
  initialState: {
    data: [],
    loading: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getMainVideo.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getMainVideo.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.message = "success";
    },
    [getMainVideo.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
    },
  },
});

export default getMainVideoSlice;

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// REDUX
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/user";
import sideBarReducer from "./features/showSidebar";
import searchInputReducer from "./features/searchInput";
import topRatedVideoSlice from "./features/topRatedVideos";
import getSimilarVideoSlice from "./features/similarVideos";
import getMainVideoSlice from "./features/mainVideo";
import getVideoCommentsSlice from "./features/videoComments";
import getSearchVideoSlice from "./features/searchVideos";

const store = configureStore({
  reducer: {
    user: userReducer,
    sideBar: sideBarReducer,
    searchInput: searchInputReducer,
    topRatedVideos: topRatedVideoSlice.reducer,
    similarVideos: getSimilarVideoSlice.reducer,
    searchVideos: getSearchVideoSlice.reducer,
    mainVideo: getMainVideoSlice.reducer,
    videoComments: getVideoCommentsSlice.reducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

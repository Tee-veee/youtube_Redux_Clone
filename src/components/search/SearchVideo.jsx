import React from "react";
import { useNavigate } from "react-router-dom";
// REDUX
import { useDispatch } from "react-redux";
import { getMainVideo } from "../../features/mainVideo";
import { getSimilarVideo } from "../../features/similarVideos";
import { getVideoComments } from "../../features/videoComments";

function SearchVideo({ searchVideo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(getSimilarVideo(searchVideo.snippet.channelTitle));
    dispatch(getMainVideo(searchVideo.id.videoId));
    dispatch(getVideoComments(searchVideo.id.videoId));
    navigate(`/video/${searchVideo.id.videoId}`);

    const sessionObj = {
      id: searchVideo.id.videoId,
      channelTitle: searchVideo.snippet.channelTitle,
    };

    if (window.sessionStorage.getItem("mainVideoStorage") === null) {
      window.sessionStorage.setItem(
        "mainVideoStorage",
        JSON.stringify(sessionObj)
      );
    } else {
      window.sessionStorage.clear();
      window.sessionStorage.setItem(
        "mainVideoStorage",
        JSON.stringify(sessionObj)
      );
    }
  };

  return (
    <div className="flex flex-col items-center md:items-stretch">
      <img
        src={
          searchVideo.snippet.thumbnails.high.url
            ? searchVideo.snippet.thumbnails.high.url
            : searchVideo.snippet.thumbnails.medium.url
            ? searchVideo.snippet.thumbnails.medium.url
            : searchVideo.snippet.thumbnails.default.url
        }
        alt="youtube-thumbnail"
        onClick={handleClick}
        className="max-w-[320px] sm:max-w-[500px] cursor-pointer hover:scale-105 hover:transition-all "
      />
      <h1 className="hidden lg:block truncate mt-2 text-white">
        {searchVideo.snippet.title}
      </h1>
    </div>
  );
}

export default SearchVideo;

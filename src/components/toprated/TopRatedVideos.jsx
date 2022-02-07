import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMainVideo } from "../../features/mainVideo";
import { getSimilarVideo } from "../../features/similarVideos";
import { getVideoComments } from "../../features/videoComments";

function TopRatedVideos({ video }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getSimilarVideo(video.snippet.channelTitle));
    dispatch(getMainVideo(video.id));
    dispatch(getVideoComments(video.id));
    navigate(`/video/${video.id}`);

    const sessionObj = {
      id: video.id,
      channelTitle: video.snippet.channelTitle,
    };

    if (window.sessionStorage.getItem("mainVideoStorage") === null) {
      window.sessionStorage.setItem(
        "mainVideoStorage",
        JSON.stringify(sessionObj)
      );
    } else {
      window.sessionStorage.clear("mainVideoStorage");
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
          video.snippet.thumbnails.high.url
            ? video.snippet.thumbnails.high.url
            : video.snippet.thumbnails.medium.url
            ? video.snippet.thumbnails.medium.url
            : video.snippet.thumbnails.default.url
        }
        alt="youtube-thumbnail"
        onClick={handleClick}
        className="max-w-[320px] sm:max-w-[500px] cursor-pointer hover:scale-105 hover:transition-all "
      />
      <h1 className="hidden lg:block truncate text-white mt-2">
        {video.snippet.title}
      </h1>
    </div>
  );
}

export default TopRatedVideos;

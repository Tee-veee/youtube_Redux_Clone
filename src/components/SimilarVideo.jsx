import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMainVideo } from "../features/mainVideo";
function SimilarVideo({ similarVideo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(getMainVideo(similarVideo.id.videoId));
    navigate(`/video/${similarVideo.id.videoId}`);

    const sessionObj = {
      id: similarVideo.id.videoId,
      channelTitle: similarVideo.snippet.channelTitle,
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
    <div
      className="flex hover:bg-stone-600 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={
          similarVideo.snippet.thumbnails.default.url
            ? similarVideo.snippet.thumbnails.default.url
            : similarVideo.snippet.thumbnails.medium.url
            ? similarVideo.snippet.thumbnails.medium.url
            : similarVideo.snippet.thumbnails.high.url
        }
        alt="thumbnail"
        className="w-[120px] h-full object-contain"
      />
      <div className="flex flex-col h-full items-center justify-center text-sm px-2 text-gray-400 hover:text-white">
        <p>{similarVideo.snippet.title}</p>
      </div>
    </div>
  );
}

export default SimilarVideo;

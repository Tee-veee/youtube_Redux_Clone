// ASSETS
import { useEffect } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { getMainVideo } from "../features/mainVideo";
import { getSimilarVideo } from "../features/similarVideos";
// COMPONENTS
import Header from "../components/Header";
import SimilarVideo from "../components/SimilarVideo";
import { getVideoComments } from "../features/videoComments";

function Video() {
  const dispatch = useDispatch();

  const similarVideos = useSelector((state) => state.similarVideos);
  const mainVideo = useSelector((state) => state.mainVideo);
  const videoComments = useSelector((state) => state.videoComments);
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    if (mainVideo.data.snippet === undefined) {
      const mainVideoData = JSON.parse(
        sessionStorage.getItem("mainVideoStorage")
      );
      dispatch(getMainVideo(mainVideoData.id));
      dispatch(getVideoComments(mainVideoData.id));
      dispatch(getSimilarVideo(mainVideoData.channelTitle));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="min-h-[93vh] h-fit mt-[7vh] bg-stone-800 ">
        <div className=" lg:mx-[12vw] flex h-fit">
          <div className="w-full flex flex-col lg:w-9/12 mt-4">
            <div>
              <iframe
                src={`https://www.youtube.com/embed/${mainVideo?.data?.id}?autoplay=1&controls=1`}
                className="w-full h-[1000px] xl:h-[800px]"
                allowFullScreen
                allow="autoplay"
                title="Banner Trailer"
              ></iframe>
            </div>
            {/* NOTES -- TITLE SECTION */}
            <div className="flex flex-col mt-4 text-white pb-4 border-b border-gray-600">
              <div className="flex items-center space-x-2 text-blue-400 flex-wrap">
                {mainVideo?.data?.snippet?.tags?.map((tag) => {
                  return <h1 className="text-sm">#{tag}</h1>;
                })}
              </div>
              <h1 className="text-2xl">{mainVideo?.data?.snippet?.title}</h1>
              <div className=" flex flex-row items-center space-x-2 text-sm text-gray-400 mt-1">
                <p>{mainVideo?.data?.statistics?.viewCount} views</p>
                <p>•</p>
                <p>{mainVideo?.data?.snippet?.publishedAt?.slice(0, 10)}</p>
              </div>
            </div>
            {/* NOTES -- CHANNEL TITLE SECTION */}
            <div className="flex items-center mt-4 border-b border-gray-600 pb-4">
              <img
                src={
                  mainVideo?.data?.snippet?.thumbnails?.default?.url
                    ? mainVideo?.data?.snippet?.thumbnails?.default?.url
                    : mainVideo?.data?.snippet?.thumbnails?.medium?.url
                    ? mainVideo?.data?.snippet?.thumbnails?.medium?.url
                    : mainVideo?.data?.snippet?.thumbnails?.high?.url
                }
                alt="video thumbnail"
                className="rounded-full h-[70px] w-[70px] object-cover"
              />
              <div className="flex justify-between items-center text-white p-2 pl-6  w-full">
                <div className="flex flex-col">
                  <p className="pr-4">
                    {mainVideo?.data?.snippet?.description
                      ? mainVideo?.data?.snippet?.description.substr(0, 400) +
                        "..."
                      : mainVideo?.data?.snippet?.title}
                  </p>
                </div>
                <div className="flex items-center space-x-6 text-md pl-2 pt-2 pb-2">
                  <button className="bg-stone-800 border border-blue-400 px-4 py-2">
                    JOIN
                  </button>
                  <button className="bg-red-500 px-4 py-2">SUBSCRIBE</button>
                </div>
              </div>
            </div>
            <div className="p-2 flex items-center space-x-4">
              <h1 className=" text-white font-regular text-lg">
                {mainVideo?.data?.statistics?.commentCount} comments
              </h1>
              <div className="flex items-center text-white space-x-2">
                <BiMenuAltLeft className="text-4xl" />
                <p>Sort By</p>
              </div>
            </div>
            {user.username && (
              <div className="flex w-full items-center space-x-2 ">
                <img
                  src={user.image}
                  className="w-[50px] rounded-full"
                  alt="user avatar"
                />
                <div className="flex flex-col w-full px-2">
                  <input
                    type="text"
                    className="border-b border-gray-600 outline-none w-full text-lg bg-transparent text-white focus:border-white"
                    placeholder="Add a public comment.."
                  />
                  <div className="flex items-center justify-end text-md space-x-2 mt-1 cursor-pointer">
                    <button className="px-4 py-2 text-gray-600 hover:text-white">
                      CANCEL
                    </button>
                    <button className="px-4 py-2 bg-gray-600 text-white">
                      COMMENT
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* ADD FIREBASE COMMENTS */}

            {videoComments?.data?.items?.map((comment) => {
              return (
                <div className="flex items-center mb-2 mt-2 h-full">
                  <div className="flex flex-col p-2 w-full h-10/12 justify-between py-1">
                    <p className="text-white text-lg">
                      {
                        comment?.snippet?.topLevelComment?.snippet
                          ?.authorDisplayName
                      }
                    </p>
                    <p className="text-white text-gray-400">
                      {comment?.snippet?.topLevelComment?.snippet?.textDisplay.substr(
                        0,
                        200
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* NOTES -- RIGHT HAND SIDE OF SCREEN */}
          <div className="hidden lg:flex flex-col lg:w-3/12 p-4 space-y-2">
            {/* similarVideos?.data?.items?.map PRODUCTION */}
            {similarVideos?.data?.items?.map((similarVideo) => {
              return (
                <SimilarVideo
                  key={similarVideo.id.videoId}
                  similarVideo={similarVideo}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;

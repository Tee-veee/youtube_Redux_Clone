// REDUX
import { useSelector } from "react-redux";
import SearchVideo from "./SearchVideo";

function Search() {
  // REDUX
  const searchVideos = useSelector((state) => state.searchVideos);
  const showSideBar = useSelector((state) => state.sideBar.value);

  return (
    <div
      className={`pr-4 pl-4 pb-4 bg-stone-800 flex flex-col mt-[7vh] min-h-[93vh] h-fit w-full ${
        showSideBar
          ? "sm:w-[90vw] sm:ml-[10vw] lg:w-[88vw] lg:ml-[12vw]"
          : "sm:w-[90vw] sm:ml-[10vw] lg:w-[96vw] lg:ml-[4vw]"
      }`}
    >
      <div className="pt-6">
        <div className="h-fit grid grid-col-1 xl:grid-cols-5 md:grid-cols-3 xl:grid-rows-4 gap-6 pl-12 lg:pl-2  ">
          {searchVideos?.data?.items?.map((searchVideo) => {
            return (
              <SearchVideo
                key={searchVideo.id.videoId}
                searchVideo={searchVideo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;

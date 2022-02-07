// REACT
import React, { useEffect } from "react";
// COMPONENTS
import TopRatedVideos from "./TopRatedVideos";
// REDUX
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTopRated } from "../../features/topRatedVideos";

function TopRated() {
  // FUNCTIONS
  const dispatch = useDispatch();
  // REDUX
  const showSideBar = useSelector((state) => state.sideBar.value);
  const topRatedVideos = useSelector((state) => state.topRatedVideos);

  // NOTES -- CALLS TOP RATED MOVIES ON LOAD
  useEffect(() => {
    dispatch(getTopRated());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`pr-4 pl-4 pb-4 bg-stone-800 flex flex-col mt-[7vh] min-h-[93vh] h-fit w-full ${
        showSideBar
          ? "sm:w-[90vw] sm:ml-[10vw] lg:w-[88vw] lg:ml-[12vw]"
          : "sm:w-[90vw] sm:ml-[10vw] lg:w-[96vw] lg:ml-[4vw]"
      }`}
    >
      <div>
        <div className="h-fit grid grid-col-1 pl-12  pt-4 lg:mt-6 md:grid-cols-3 xl:grid-cols-5 xl:grid-rows-4 gap-6 md:p-2">
          {topRatedVideos?.data?.items?.map((video) => {
            return <TopRatedVideos key={video.id} video={video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TopRated;

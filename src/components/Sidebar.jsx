import React from "react";
// ASSETS
import { FaCompass, FaHome, FaWifi, FaRegFlag } from "react-icons/fa";
import { BsQuestionCircle, BsExclamationSquare } from "react-icons/bs";
import {
  MdSubscriptions,
  MdOutlineVideoLibrary,
  MdHistory,
  MdLocalMovies,
  MdLightbulbOutline,
  MdSettings,
} from "react-icons/md";
import {
  AiFillPlaySquare,
  AiOutlineClockCircle,
  AiOutlineYoutube,
  AiOutlineTrophy,
} from "react-icons/ai";
import { SiYoutubegaming } from "react-icons/si";
import { GiClothes } from "react-icons/gi";
// REDUX
import { useSelector } from "react-redux";

function SideBar({ gridPage, videoPage }) {
  const showSideBar = useSelector((state) => state.sideBar.value);
  return (
    gridPage && (
      <div
        className={`fixed h-[93vh] mt-[7vh] bg-stone-900 text-white overflow-y-scroll ${
          showSideBar ? "sm:w-[10vw] lg:w-[12vw]" : "sm:w-[10vw] lg:w-[4vw]"
        }  `}
        id="youtube-sidebar"
      >
        <div className="flex flex-col items-center md:items-start p-1 md:p-4 text-2xl">
          <div className="space-y-2 w-full">
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer  flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              <FaHome />
              {showSideBar && (
                <p className="hidden lg:block text-sm ml-4">Home</p>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              <FaCompass />
              {showSideBar && (
                <p className="hidden lg:block text-sm ml-4">Explore</p>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              <MdOutlineVideoLibrary />
              {showSideBar && (
                <p className="hidden lg:block text-sm ml-4">Subscriptions</p>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              <AiFillPlaySquare />
              {showSideBar && (
                <p className="hidden lg:block text-sm ml-4">Library</p>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              <MdHistory />
              {showSideBar && (
                <p className="hidden lg:block text-sm ml-4">History</p>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              <MdSubscriptions />
              {showSideBar && (
                <p className="hidden lg:block text-sm ml-4">Your Videos</p>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full   ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              <AiOutlineClockCircle />
              {showSideBar && (
                <p className="hidden lg:block text-sm ml-4">Watch Later</p>
              )}
            </div>
            {showSideBar && <div className="border-b border-gray-500 "></div>}
            <div
              className={`p-2 flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <p className="hidden lg:block text-lg font-semibold text-gray-400">
                  SUBSCRIPTIONS
                </p>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <div className="flex items-center space-x-4">
                  <div className="w-[30px] h-[30px] bg-white rounded-full"></div>

                  <p className="hidden lg:block text-sm">Channel</p>
                </div>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <div className="flex items-center space-x-4">
                  <div className="w-[30px] h-[30px] bg-white rounded-full"></div>

                  <p className="hidden lg:block text-sm">Channel</p>
                </div>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <div className="flex items-center space-x-4">
                  <div className="w-[30px] h-[30px] bg-white rounded-full"></div>

                  <p className="hidden lg:block text-sm">Channel</p>
                </div>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <div className="flex items-center space-x-4">
                  <div className="w-[30px] h-[30px] bg-white rounded-full"></div>

                  <p className="hidden lg:block text-sm">Channel</p>
                </div>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <div className="flex items-center space-x-4">
                  <div className="w-[30px] h-[30px] bg-white rounded-full"></div>

                  <p className="hidden lg:block text-sm">Channel</p>
                </div>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <div className="flex items-center space-x-4">
                  <div className="w-[30px] h-[30px] bg-white rounded-full"></div>

                  <p className="hidden lg:block text-sm">Channel</p>
                </div>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full   ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <div className="flex items-center space-x-4">
                  <div className="w-[30px] h-[30px] bg-white rounded-full "></div>

                  <p className="hidden lg:block text-sm">Channel</p>
                </div>
              )}
            </div>
            {showSideBar && <div className="border-b border-gray-500 "></div>}
            <div
              className={`p-2 flex w-full ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <p className="hidden lg:block text-lg font-semibold text-gray-400">
                  MORE FROM YOUTUBE
                </p>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full   ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <>
                  <AiOutlineYoutube />
                  <p className="hidden lg:block text-sm ml-4">
                    Youtube Premium
                  </p>
                </>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full   ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <>
                  <MdLocalMovies />
                  <p className="hidden lg:block text-sm ml-4">
                    Movies and Shows
                  </p>
                </>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full   ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <>
                  <SiYoutubegaming />
                  <p className="hidden lg:block text-sm ml-4">Gaming</p>
                </>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full   ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <>
                  <FaWifi className="text-white" />
                  <p className="hidden lg:block text-sm ml-4">Live</p>
                </>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full   ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <>
                  <GiClothes />
                  <p className="hidden lg:block text-sm ml-4">
                    Fashion and Beauty
                  </p>
                </>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full   ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <>
                  <MdLightbulbOutline />
                  <p className="hidden lg:block text-sm ml-4">Learning</p>
                </>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full   ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <>
                  <AiOutlineTrophy />
                  <p className="hidden lg:block text-sm ml-4">Sports</p>
                </>
              )}
            </div>
            {showSideBar && <div className="border-b border-gray-500 "></div>}
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full   ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <>
                  <MdSettings />
                  <p className="hidden lg:block text-sm ml-4">Settings</p>
                </>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full   ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <>
                  <FaRegFlag />
                  <p className="hidden lg:block text-sm ml-4">Report history</p>
                </>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full   ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <>
                  <BsQuestionCircle />
                  <p className="hidden lg:block text-sm ml-4">Help</p>
                </>
              )}
            </div>
            <div
              className={`p-2 hover:bg-stone-600 hover:transition-all cursor-pointer flex w-full   ${
                showSideBar ? "" : "justify-center"
              }`}
            >
              {showSideBar && (
                <>
                  <BsExclamationSquare />
                  <p className="hidden lg:block text-sm ml-4">Send Feedback</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default SideBar;

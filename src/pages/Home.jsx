// REACT
import React, { useEffect } from "react";
// REDUX
import { useDispatch } from "react-redux";
import { login } from "../features/user";
// FIREBASE

// COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TopRated from "../components/toprated/TopRated";
function TopRatedVideos() {
  // FUNCTIONS
  const dispatch = useDispatch();
  // REDUX

  useEffect(() => {
    if (window.sessionStorage.getItem("user") !== null) {
      const sessionUser = window.sessionStorage.getItem("user");
      const parsedSessionUser = JSON.parse(sessionUser);
      dispatch(
        login({
          username: parsedSessionUser.username,
          email: parsedSessionUser.email,
          uid: parsedSessionUser.uid,
          image: parsedSessionUser.image,
        })
      );
    } else {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar gridPage />
        <TopRated />
      </div>
    </div>
  );
}

export default TopRatedVideos;

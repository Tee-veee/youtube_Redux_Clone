// REACT DOM
import { useNavigate } from "react-router-dom";
// REDUX
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../features/user";
import { setValue } from "../features/searchInput";

// ASSETS
import { AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import YoutubeLogo from "../assets/youtubeLogo.svg";
import { FaSearch } from "react-icons/fa";
// FIREBASE
import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";
import { toggleSidebar } from "../features/showSidebar";
import { getSearchVideo } from "../features/searchVideos";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const showSideBar = useSelector((state) => state.sideBar.value);
  const searchInput = useSelector((state) => state.searchInput.value);

  const toggleSidebarClick = () => {
    if (showSideBar === true) {
      dispatch(toggleSidebar(false));
    } else {
      dispatch(toggleSidebar(true));
    }
  };

  const handleSearch = () => {
    if (searchInput === "") {
      console.log("No Search Input");
    } else {
      dispatch(getSearchVideo(searchInput));
      navigate(`/search/${searchInput}`);
    }
  };

  const onLogout = () => {
    signOut(auth);
    dispatch(logout());
    window.sessionStorage.removeItem("user");
  };

  return (
    <div className="fixed w-screen h-[7vh] flex items-center bg-stone-900 justify-between p-2 md:p-4 z-10 ">
      <div className="flex items-center space-x-4 ">
        <div className="p-2 hover:bg-stone-600 hover:transition-all rounded-full cursor-pointer hidden md:flex">
          <AiOutlineMenu
            className=" text-xl md:text-2xl text-white"
            onClick={toggleSidebarClick}
          />
        </div>
        <img
          src={YoutubeLogo}
          alt="Youtube Logo"
          className=" h-[45px] w-[45px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h1 className="hidden md:block text-lg text-white">Youtube</h1>
      </div>
      <div className="flex w-7/12 md:w-5/12 relative h-[40px] ">
        <input
          type="text"
          className="flex w-full p-1 h-[40px] outline-none "
          onChange={(e) => dispatch(setValue(e.target.value))}
        />
        <div className="absolute flex items-center justify-center right-0 top-0 bg-stone-600 w-[50px] h-[40px] ">
          <FaSearch
            className="text-xl text-white hover:scale-95 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>
      {user.username && (
        <img
          src={user?.image}
          onClick={onLogout}
          disabled={user.username !== undefined}
          className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full mr-8"
          alt="user avatar"
        />
      )}
      {!user.username && (
        <button
          onClick={() => navigate("/signin")}
          disabled={user.username !== undefined}
          className="flex items-center p-1 py-2 md:px-3 mr-8 bg-stone-800 border border-blue-400"
        >
          <BiUserCircle className="mr-2 text-xl md:text-3xl text-blue-400" />
          <p className="text-blue-400 font-semibold text-sm  ">SIGN IN</p>
        </button>
      )}
    </div>
  );
}

export default Header;

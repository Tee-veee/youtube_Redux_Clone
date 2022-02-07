// FIREBASE
import youtubeLogo from "../assets/youtubeLogo.svg";
import { auth } from "../firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// REACT ROUTER
import { useNavigate } from "react-router-dom";
// REDUX
import { useDispatch } from "react-redux";
import { login } from "../features/user";
function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // GETS PROVDIER HANDLES SIGN IN DEFINES CURRENT USER THEN SENDS THOSE VALUES TO SESSION STORAGE AND REDUX STORE
  const authWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const currentUser = {
      username: user.displayName,
      email: user.email,
      uid: user.uid,
      image: user.photoURL,
    };

    dispatch(
      login({
        username: user.displayName,
        email: user.email,
        uid: user.uid,
        image: user.photoURL,
      })
    );

    // ADD USER REDUX STATE HERE
    sessionStorage.setItem("user", JSON.stringify(currentUser));
    navigate("/");
  };
  return (
    <div className="w-full h-screen bg-stone-800 flex items-center justify-center">
      <div className="h-[300px] w-[450px] bg-white flex flex-col items-center justify-center">
        <img src={youtubeLogo} className="w-[200px]" alt="youtube logo" />
        <button
          className="p-2 text-lg bg-red-500 rounded-lg hover:shadow-lg hover:transition-all text-white"
          onClick={authWithGoogle}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default SignIn;

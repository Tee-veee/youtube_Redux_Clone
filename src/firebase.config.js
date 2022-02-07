import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeflb8TDb5lCku-wN7Y5s377b-qo42zfM",
  authDomain: "clone-8552a.firebaseapp.com",
  projectId: "clone-8552a",
  storageBucket: "clone-8552a.appspot.com",
  messagingSenderId: "722881505406",
  appId: "1:722881505406:web:460a0efa186275cda8902f",
  measurementId: "G-MK4K46TPXQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

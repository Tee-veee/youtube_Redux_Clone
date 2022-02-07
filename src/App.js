import "./index.css";
// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Video from "./pages/Video";
import SearchResults from "./pages/searchResults";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/video/:videoid" element={<Video />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

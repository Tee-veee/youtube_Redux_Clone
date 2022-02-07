import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Search from "../components/search/Search";

function SearchResults() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar gridPage />
        <Search />
      </div>
    </div>
  );
}

export default SearchResults;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { menuToggle, setInputClearer } from "../reduxStore/appSlice";
import { setSearchContent, setShowSuggestion } from "../reduxStore/searchSlice";
import SuggestionList from "./suggestions/SuggestionList";
import { Menu, Search, Mic, Upload, Bell, Circle, Play } from "lucide-react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchContent = useSelector((store) => store.search.searchContent);
  const [searchQuery, setSearchQuery] = useState("");
  const showSuggestion = useSelector((store) => store.search.showSuggestion);
  const showInputClearer = useSelector((store) => store.app.showInputClearer);

  useEffect(() => {
    if (searchContent !== null) {
      setSearchQuery(searchContent);
    }
  }, [searchContent]);

  const showSidebarHandler = () => {
    dispatch(menuToggle());
  };

  const searchHandler = (search_query) => {
    if (search_query.length > 0) {
      navigate(`/results?search_query=${search_query}`);
      dispatch(setSearchContent(search_query));
      dispatch(setShowSuggestion(false));
      localStorage.setItem("searchContent", search_query);
    }
  };

  useEffect(() => {
    dispatch(setInputClearer(searchQuery.length > 0));
  }, [searchQuery]);

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
    e.stopPropagation();
  };

  const clearSearchContentHandler = () => {
    setSearchQuery("");
    localStorage.removeItem("searchContent");
  };

  // Custom Logo Component with Gradient Text
  const StreamLogo = () => (
    <button className="flex items-center gap-1">
      {/* Gradient Play Icon */}
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 5V19L19 12L8 5Z" fill="url(#logo-gradient)" />
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" /> {/* blue-500 */}
            <stop offset="100%" stopColor="#8B5CF6" /> {/* purple-500 */}
          </linearGradient>
        </defs>
      </svg>

      {/* Gradient Text */}
      <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        StreamVerse
      </span>
    </button>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md bg-slate-900/95 border-b border-slate-700/50">
      <div className="grid grid-flow-col w-full px-4 py-2">
        {/* Left Section */}
        <div className="col-span-1 flex items-center gap-4 ">
          <button
            onClick={showSidebarHandler}
            className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-slate-300" />
          </button>
          <Link to="/" className="flex items-center">
            <StreamLogo />
          </Link>
        </div>

        {/* Middle Section - Search */}
        <div className="flex justify-center items-center">
          <div className="flex items-center max-w-2xl w-full">
            <div className="flex flex-1 items-center">
              <div className="relative flex-1 flex items-center">
                <input
                  className="w-full h-10 px-4 bg-slate-800/50 text-slate-200 placeholder-slate-400 
                    border border-slate-700 rounded-l-full focus:outline-none focus:border-blue-500
                    transition-colors"
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={onChangeHandler}
                  onFocus={() => dispatch(setShowSuggestion(true))}
                />
                {showInputClearer && (
                  <button
                    onClick={clearSearchContentHandler}
                    className="absolute right-2 p-1 hover:bg-slate-700/50 rounded-full"
                  >
                    <Circle className="w-5 h-5 text-slate-400" />
                  </button>
                )}
              </div>
              <button
                onClick={() => searchHandler(searchQuery)}
                className="h-10 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 
                  border border-slate-700 rounded-r-full transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
            <button
              className="ml-4 p-2 bg-slate-800/50 hover:bg-slate-700 text-slate-300 
              rounded-full transition-colors"
            >
              <Mic className="w-5 h-5" />
            </button>
          </div>
          {/* Suggestions */}
          <div className="absolute top-full w-[40%] mt-1">
            <SuggestionList searchQuery={searchQuery} />
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-1 flex items-center justify-end gap-2">
          <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
            <Upload className="w-6 h-6 text-slate-300" />
          </button>
          <button className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors">
            <Bell className="w-6 h-6 text-slate-300" />
          </button>
          <button
            className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 
            flex items-center justify-center hover:bg-blue-500/30 transition-colors"
          >
            <span className="text-sm font-medium">AV</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

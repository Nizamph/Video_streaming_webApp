import React, { useState } from "react";
import SideBar from "./UI/SideBar";
import VideoContainer from "./videos/VideoContainer";
import ButtonList from "./UI/ButtonList";
import { useSelector, useDispatch } from "react-redux";
import { menuToggle, setInputClearer } from "../reduxStore/appSlice";
import { Outlet } from "react-router-dom";
import {
  setShowSuggestion,
  setShowSuggestionException,
} from "../reduxStore/searchSlice";

const Body = () => {
  const showSidebar = useSelector((store) => store.app.isMenuOpen);
  const suggestionException = useSelector(
    (store) => store.search.suggestionException
  );
  const dispatch = useDispatch();

  const handleOnShowException = () => {
    dispatch(setShowSuggestion(false));
  };

  const showSidebarHandler = () => {
    dispatch(menuToggle());
  };

  return (
    <div
      className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-800"
      onClick={handleOnShowException}
    >
      {/* Sidebar with Glass Morphism Effect */}
      <div
        className={`fixed inset-y-0 z-20 transform transition-transform duration-300 ease-in-out ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SideBar isMenuOpen={showSidebar} setIsMenuOpen={showSidebarHandler} />
      </div>

      {/* Main Content Area */}
      <div
        className={`flex-1 ml-0 transition-all duration-300 ease-in-out ${
          showSidebar ? "md:ml-64" : "md:ml-0"
        }`}
      >
        {/* Overlay for Sidebar Toggle (Mobile View) */}
        {showSidebar && (
          <div
            className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
            onClick={showSidebarHandler}
          ></div>
        )}

        {/* Outlet for Dynamic Content */}
        <div className="w-full mt-14 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addVideoApi,
  removeAllVideos,
  setClickCount,
  setPageToken,
} from "../../reduxStore/videoSlice";
import { Menu } from "lucide-react";
import {
  GET_CATEGORY_VIDEOS,
  GET_MOST_POPULAR_VIDEOS,
} from "../../utils/constants";
import { sideBarMenus } from "../../utils/constants";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clickVal = useSelector((store) => store.video.clickCount);
  const [activeId, setActiveId] = useState(localStorage.getItem("currentMenu"));

  const handleMenuClick = (menu) => {
    navigate("/");
    dispatch(removeAllVideos());

    if (menu.name === "Home") {
      dispatch(addVideoApi(GET_MOST_POPULAR_VIDEOS));
      localStorage.setItem("currentVideoApi", GET_MOST_POPULAR_VIDEOS);
    } else {
      dispatch(addVideoApi(`${GET_CATEGORY_VIDEOS}&q=${menu.name}&type=video`));
    }

    localStorage.setItem("currentMenu", menu.id);
    localStorage.removeItem("currentButton");
    setActiveId(menu.id);
    dispatch(setPageToken(""));
    dispatch(setClickCount({ clickCount: clickVal + 1 }));
  };

  return (
    <div
      className={`fixed left-0 top-[50px] h-[93vh] transition-all duration-300 ease-in-out
        ${isMenuOpen ? "w-52" : "w-16"} 
        bg-gradient-to-b from-slate-900 to-slate-800
        backdrop-blur-lg bg-opacity-95
        border-r border-slate-700/50
        z-50`}
    >
      <div className="flex flex-col h-full py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
        {sideBarMenus.map((menu) => (
          <div key={menu.id} className="px-2 mb-2">
            {menu.name === "Explore" ? (
              <div
                className={`font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-xs font-medium px-3 py-2 
                ${!isMenuOpen && "hidden"}`}
              >
                {menu.name}
              </div>
            ) : (
              <button
                onClick={() => handleMenuClick(menu)}
                className={`w-full group flex items-center rounded-lg p-2
                  ${
                    activeId === menu.id
                      ? "bg-blue-500/20 text-blue-400"
                      : "hover:bg-slate-700/50"
                  }`}
              >
                <div className="relative flex items-center justify-center min-w-[20px]">
                  <img
                    src={menu.url}
                    alt={menu.name}
                    className={`w-5 h-5 
                      ${
                        activeId === menu.id
                          ? "filter invert brightness-0 saturate-100 sepia-0 hue-rotate-180"
                          : "filter invert brightness-100 opacity-80"
                      }
                      ${!isMenuOpen ? "mx-auto" : ""}`}
                  />
                  {!isMenuOpen && activeId === menu.id && (
                    <div className="absolute -right-1 w-1 h-1 bg-blue-400 rounded-full" />
                  )}
                </div>

                {isMenuOpen && (
                  <span
                    className={`ml-3 text-sm font-medium whitespace-nowrap
                    ${
                      activeId === menu.id
                        ? " font-bold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
                        : "text-slate-300 group-hover:text-slate-200"
                    }`}
                  >
                    {menu.name}
                  </span>
                )}

                {!isMenuOpen && (
                  <div
                    className={`absolute left-16 px-2 py-1 bg-slate-800 text-slate-200
                    rounded-md opacity-0 group-hover:opacity-100 pointer-events-none
                    transition-opacity duration-200 text-sm whitespace-nowrap z-50
                    border border-blue-500/20`}
                  >
                    {menu.name}
                  </div>
                )}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

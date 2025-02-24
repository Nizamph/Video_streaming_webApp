import React from "react";
import demoProfile from "../../youtubeIcons/blank-profile-picture-gec5b7f001_1280.png";

const Chat = ({ name, message, image }) => {
  return (
    <div className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
      <div className="flex items-center gap-3">
        {/* Profile Picture */}
        <img
          src={image || demoProfile}
          alt="profile"
          className="w-8 h-8 rounded-full border-2 border-blue-500"
        />

        {/* Chat Content */}
        <div className="flex flex-col">
          <span className="font-semibold text-white">{name}</span>
          <span className="text-sm text-gray-300">{message}</span>
        </div>
      </div>
    </div>
  );
};

export default Chat;

import React, { useState } from "react";
import ChatList from "./ChatList";
import { useDispatch } from "react-redux";
import { addMessages } from "../../reduxStore/chatSlice";
import proPic from "../../youtubeIcons/propicRandom.png";
import imogi from "../../youtubeIcons/imogi.png";
import superChat from "../../youtubeIcons/superchat.png";
import send from "../../youtubeIcons/send.png";

const LiveChat = () => {
  const [liveMessages, setLiveMessages] = useState("");
  const [showLiveChat, setShowLiveChat] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (liveMessages.trim()) {
      dispatch(
        addMessages({
          name: "User",
          message: liveMessages,
          image: proPic,
        })
      );
      setLiveMessages("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-start w-full lg:96 md:w-92">
      {/* Live Chat Header */}
      <div className="w-full md:w-11/12 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-t-lg">
        <h2 className="font-semibold text-white">Live Chat</h2>
      </div>

      {/* Chat Messages */}
      <div
        className={`w-full md:w-11/12 bg-gray-800 border border-gray-700 ${
          showLiveChat ? "h-[330px] max-h-[515px]" : "h-0"
        } overflow-y-scroll transition-all duration-300`}
      >
        {showLiveChat && <ChatList />}
      </div>

      {/* Chat Input Section */}
      <form
        className={`w-full md:w-11/12 bg-gray-800 border border-gray-700 rounded-b-lg p-4 ${
          showLiveChat ? "block" : "hidden"
        }`}
        onSubmit={handleSubmit}
      >
        <div className="flex items-center gap-3">
          <img
            src={proPic}
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-blue-500"
          />
          <input
            type="text"
            value={liveMessages}
            onChange={(e) => setLiveMessages(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 bg-gray-700 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            maxLength={200}
          />
        </div>

        {/* Chat Actions */}
        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-3">
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <img
                src={imogi}
                alt="Emoji"
                className="w-5 filter invert brightness-0 saturate-100 sepia-0 hue-rotate-180"
              />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
              <img
                src={superChat}
                alt="Super Chat"
                className="w-6 filter invert brightness-0 saturate-100 sepia-0 hue-rotate-180"
              />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400">
              {liveMessages.length}/200
            </span>
            <button
              type="submit"
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            >
              <img
                src={send}
                alt="Send"
                className="w-5 filter invert brightness-0 saturate-100 sepia-0 hue-rotate-180"
              />
            </button>
          </div>
        </div>
      </form>

      {/* Toggle Chat Button */}
      <button
        className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity"
        onClick={() => setShowLiveChat((prevState) => !prevState)}
      >
        {showLiveChat ? "Hide Chat" : "Show Chat"}
      </button>
    </div>
  );
};

export default LiveChat;

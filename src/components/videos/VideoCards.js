import { useTimeAgo } from "../../utils/useTimeAgo";
import dummyDp from "../../youtubeIcons/blank-profile-picture-gec5b7f001_1280.png";
import { useDispatch, useSelector } from "react-redux";
import useCountAbbrevation from "../../utils/useCountAbbrevation";
import useGetChannelDetails from "../../utils/useGetChannelDetails";
import useGetVideoDetails from "../../utils/useGetVideoDetails";
import { useEffect, useState } from "react";
import { setImageUrlCache } from "../../reduxStore/videoSlice";

const VideoCards = ({ videos }) => {
  const apiDate = videos?.snippet?.publishedAt;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();
  const timeAbbrevation = useTimeAgo(apiDate);
  const { channelId } = videos?.snippet;
  const { channelDp } = useGetChannelDetails(channelId);

  let currentVideoId = null;
  if (videos?.id?.videoId) {
    currentVideoId = videos?.id?.videoId;
  }
  const videoDetails = useGetVideoDetails(currentVideoId);
  let viewCountFromApi = 0;
  let viewCountAbbrevation = 0;

  if (videos?.statistics?.viewCount) {
    viewCountFromApi = videos?.statistics?.viewCount;
  } else {
    viewCountFromApi = videoDetails[0]?.statistics?.viewCount;
  }

  viewCountAbbrevation = useCountAbbrevation(viewCountFromApi);

  return (
    <div
      className={`group relative mt-2 pt-4 w-60 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl hover:shadow-neon hover:scale-105 transition-all duration-300 ease-in-out overflow-hidden`}
    >
      {/* Video Thumbnail with Hover Effect */}
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={videos?.snippet?.thumbnails?.medium?.url}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
          alt="Video thumbnail"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 ease-in-out"></div>
      </div>

      {/* Video Details */}
      <div className="flex justify-start p-4">
        {/* Channel Profile Picture */}
        {channelDp ? (
          <img
            src={channelDp}
            className="rounded-full w-10 h-10 object-cover border-2 border-white shadow-md"
            alt="Profile"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-white shadow-md"></div>
        )}

        {/* Video Title and Metadata */}
        <div className="flex flex-col ml-3 justify-center w-full items-start">
          <p className="text-md font-semibold text-white line-clamp-2 hover:text-blue-400 transition-colors duration-200">
            {videos?.snippet?.title}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            {videos?.snippet?.channelTitle}
          </p>
          <div className="text-sm text-gray-400 flex mt-1">
            <div>{viewCountAbbrevation} views</div>
            <div className="w-1 h-1 mt-2 mx-2 bg-gray-400 rounded-full"></div>
            <div>{timeAbbrevation}</div>
          </div>
        </div>
      </div>

      {/* Futuristic Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out"></div>
    </div>
  );
};

export default VideoCards;

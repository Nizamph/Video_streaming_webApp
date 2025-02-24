import React from "react";
import { useTimeAgo } from "../../utils/useTimeAgo";
import useCountAbbrevation from "../../utils/useCountAbbrevation";
import useGetChannelDetails from "../../utils/useGetChannelDetails";
import useGetVideoDetails from "../../utils/useGetVideoDetails";

const SearchCard = ({ searchContent }) => {
  const { channelDp } = useGetChannelDetails(searchContent?.snippet?.channelId);
  const apiDate = searchContent?.snippet?.publishedAt;
  const timeAbbrevation = useTimeAgo(apiDate);
  let videoDetails = useGetVideoDetails(searchContent?.id?.videoId);
  const viewCount = videoDetails[0]?.statistics?.viewCount;
  const viewCountAbbrevation = useCountAbbrevation(viewCount);

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-3 hover:bg-gray-700 rounded-lg transition-colors">
      {/* Thumbnail */}
      <div className="w-full sm:w-96 flex-shrink-0">
        <img
          className="w-full h-48 sm:h-40 object-cover rounded-lg"
          src={searchContent?.snippet?.thumbnails?.medium?.url}
          alt="thumbnail"
        />
      </div>

      {/* Video Details */}
      <div className="flex flex-col justify-start flex-1">
        <h2 className="font-semibold text-lg text-white">
          {searchContent?.snippet?.title.replace(/&#39;/g, '"')}
        </h2>
        <div className="flex items-center gap-1 mt-1">
          <p className="text-xs text-gray-400">{viewCountAbbrevation} views</p>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <p className="text-xs text-gray-400">{timeAbbrevation}</p>
        </div>

        {/* Channel Details */}
        <div className="flex items-center gap-2 mt-3">
          <img alt="profile" src={channelDp} className="w-6 h-6 rounded-full" />
          <p className="text-sm text-gray-400">
            {searchContent?.snippet?.channelTitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 mt-2">
          {searchContent?.snippet?.description}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;

import React from "react";
import dp from "../../youtubeIcons/blank-profile-picture-gec5b7f001_1280.png";
import { useTimeAgo } from "../../utils/useTimeAgo";
import useCountAbbrevation from "../../utils/useCountAbbrevation";

const RelatedVideo = ({
  title,
  thumbnail,
  videoTitle,
  timeStamp,
  viewCount,
}) => {
  const editedTitle = videoTitle.split("").slice(0, 50).join("") + "...";
  const timeData = useTimeAgo(timeStamp);
  const totalViews = useCountAbbrevation(viewCount);

  return (
    <div className="flex gap-4 p-3 hover:bg-gray-700 rounded-lg transition-colors">
      {/* Thumbnail */}
      <div className="w-36 flex-shrink-0">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-full h-24 object-cover rounded-lg"
        />
      </div>

      {/* Video Details */}
      <div className="flex flex-col justify-start flex-1">
        <h2 className="font-semibold text-sm text-white">{editedTitle}</h2>
        <p className="text-xs text-gray-400 mt-1">{title}</p>
        <div className="flex items-center gap-1 mt-1">
          <p className="text-xs text-gray-400">{totalViews} views</p>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <p className="text-xs text-gray-400">{timeData}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedVideo;

import React from "react";
import RelatedVideo from "./RelatedVideo";
import { Link } from "react-router-dom";

const RelatedVideoList = ({ relatedVideos }) => {
  return (
    <div className="space-y-3">
      {relatedVideos?.map((video) => (
        <Link
          key={video?.id}
          to={`/watch?v=${video?.id}`}
          className="block hover:bg-gray-700 rounded-lg transition-colors"
        >
          <RelatedVideo
            videoTitle={video?.snippet?.localized?.title}
            title={video?.snippet?.channelTitle}
            thumbnail={video?.snippet?.thumbnails?.maxres?.url}
            timeStamp={video?.snippet?.publishedAt}
            viewCount={video?.statistics?.viewCount}
          />
        </Link>
      ))}
    </div>
  );
};

export default RelatedVideoList;

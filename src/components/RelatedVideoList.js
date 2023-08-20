import React from 'react';
import RelatedVideo from './RelatedVideo';
import { Link } from 'react-router-dom';

const RelatedVideoList = ({ relatedVideos }) => {
  console.log('relatedVideos', relatedVideos);
  return (
    <>
      {relatedVideos?.map((video) => (
        <Link
          key={video?.id}
          to={`/watch?v=${video?.id}`}
          className='flex gap-3 mt-2 h-24 w-10/12'>
          <RelatedVideo
            videoTitle={video?.snippet?.localized?.title}
            title={video?.snippet?.channelTitle}
            thumbnail={video?.snippet?.thumbnails?.maxres?.url}
            timeStamp={video?.snippet?.publishedAt}
            viewCount={video?.statistics?.viewCount}
          />
        </Link>
      ))}
    </>
  );
};

export default RelatedVideoList;

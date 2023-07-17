import React from 'react';
import RelatedVideo from './RelatedVideo';
import { Link } from 'react-router-dom';

const RelatedVideoList = ({ relatedVideos }) => {
  return (
    <>
      {relatedVideos.map((video) => (
        <Link
          key={video?.id?.videoId}
          to={`/watch?v=${video?.id?.videoId}`}
          className='flex gap-3 mt-2 h-24 w-10/12'>
          <RelatedVideo
            videoTitle={video?.snippet?.title}
            title={video?.snippet?.channelTitle}
            thumbnail={video?.snippet?.thumbnails?.maxres?.url}
          />
        </Link>
      ))}
    </>
  );
};

export default RelatedVideoList;

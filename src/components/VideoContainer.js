import React from 'react';
import VideoCards from './VideoCards';
import VideoList from './VideoList';
const VideoContainer = () => {
  return (
    <div className='m-2 ml-10 flex max- flex-wrap items-center gap-3 max-h-[80vh] overflow-y-scroll scrollbar-none hover:scrollbar-thin scrollbar-thumb-gray-300'>
      <VideoList />
    </div>
  );
};

export default VideoContainer;

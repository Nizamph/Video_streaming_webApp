import React from 'react';
import dp from '../youtubeIcons/blank-profile-picture-gec5b7f001_1280.png';
const RelatedVideo = ({ title, thumbnail, videoTitle }) => {
  return (
    <>
      <div className='w-36'>
        <img
          className='w-full rounded-lg'
          src={thumbnail}
        />
      </div>
      <div className='flex-col justify-start w-52'>
        <h2 className=' font-semibold text-sm '>{videoTitle}</h2>
        <p className='text-xs text-gray-700'>{title}</p>
        <div className='flex gap-1 items-center '>
          <p className='text-xs text-gray-700'>4.2M views</p>
          <div className='w-[3px] h-[3px] bg-black rounded-full text-black'></div>
          <p className='text-xs text-gray-700'>2 years ago</p>
        </div>
        <div className='flex items-center pt-4 pb-4 justify-start gap-3'>
          {/* <p className='text-base'>{searchContent?.snippet?.channelTitle}</p> */}
        </div>
      </div>
    </>
  );
};

export default RelatedVideo;

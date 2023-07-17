import React from 'react';
import Profile from '../youtubeIcons/profile-dp.jpg';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GOOGLE_API_KEY } from '../utils/constants';
import { useSearchParams } from 'react-router-dom';
import useGetChannelDetails from '../utils/useGetChannelDetails';

const SearchCard = ({ searchContent }) => {
  const { channelDp } = useGetChannelDetails(searchContent?.snippet?.channelId);

  return (
    <div className='flex gap-3 mt-2'>
      <div className='w-5/12'>
        <img
          className='w-full rounded-lg'
          src={searchContent?.snippet?.thumbnails?.medium?.url}
        />
      </div>
      <div className='flex-col justify-start'>
        <h2 className=' font-semibold text-xl '>
          {searchContent?.snippet?.title.replace(/&#39;/g, '"')}
        </h2>
        <div className='flex gap-1 items-center'>
          <p className='text-xs text-gray-700'>4.2M views</p>
          <div className='w-[3px] h-[3px] bg-black rounded-full text-black'></div>
          <p className='text-xs text-gray-700'>2 years ago</p>
        </div>
        <div className='flex items-center pt-4 pb-4 justify-start gap-3'>
          <img
            alt='profile image'
            src={channelDp}
            className='w-6 rounded-full'
          />
          <p>{searchContent?.snippet?.channelTitle}</p>
        </div>
        <div>{searchContent?.snippet?.description}</div>
      </div>
    </div>
  );
};

export default SearchCard;

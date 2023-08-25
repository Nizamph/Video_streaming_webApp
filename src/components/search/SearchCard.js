import React from 'react';
import Profile from '../../youtubeIcons/profile-dp.jpg';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GOOGLE_API_KEY } from '../../utils/constants';
import { useSearchParams } from 'react-router-dom';
import useGetChannelDetails from '../../utils/useGetChannelDetails';
import useCountAbbrevation from '../../utils/useCountAbbrevation';
import { useTimeAgo } from '../../utils/useTimeAgo';
import useGetVideoDetails from '../../utils/useGetVideoDetails';
const SearchCard = ({ searchContent }) => {
  const { channelDp } = useGetChannelDetails(searchContent?.snippet?.channelId);
  // const { viewCount } = searchContent?.statistics;
  console.log('searchContent from fucking card', searchContent);

  const apiDate = searchContent?.snippet?.publishedAt;
  console.log('my lovely api date', apiDate);
  const timeAbbrevation = useTimeAgo(apiDate);
  let videoDetails = useGetVideoDetails(searchContent?.id?.videoId);

  console.log('videoDetails seperate', videoDetails[0]);
  console.log(
    'videoDetails of statisics from searchCard',
    videoDetails[0]?.statistics
  );
  const viewCount = videoDetails[0]?.statistics?.viewCount;
  // console.log('myViewCount', viewCount);
  const viewCountAbbrevation = useCountAbbrevation(viewCount);
  return (
    <div className='flex flex-col sm:flex-row gap-3 mt-2'>
      <img
        className='w-full sm:w-96 rounded-lg'
        src={searchContent?.snippet?.thumbnails?.medium?.url}
      />

      <div className='flex-col justify-start'>
        <h2 className=' font-semibold text-xl '>
          {searchContent?.snippet?.title.replace(/&#39;/g, '"')}
        </h2>
        <div className='flex gap-1 items-center'>
          <p className='flex gap-1 items-center text-xs text-gray-700'>
            {viewCountAbbrevation} views
          </p>
          <div className='w-[3px] h-[3px] bg-black rounded-full text-black'></div>
          <p className='text-xs text-gray-700'>{timeAbbrevation}</p>
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

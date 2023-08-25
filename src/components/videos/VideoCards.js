import { useTimeAgo } from '../../utils/useTimeAgo';
import dummyDp from '../../youtubeIcons/blank-profile-picture-gec5b7f001_1280.png';
import { useDispatch, useSelector } from 'react-redux';
import useCountAbbrevation from '../../utils/useCountAbbrevation';
import useGetChannelDetails from '../../utils/useGetChannelDetails';
import useGetVideoDetails from '../../utils/useGetVideoDetails';
import { useEffect, useState } from 'react';
import { setImageUrlCache } from '../../reduxStore/videoSlice';
const VideoCards = ({ videos }) => {
  // console.log('vidoe Details',videos)
  const apiDate = videos?.snippet?.publishedAt;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // const { viewCount } = videos?.statistics;
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

  // console.log('videoDetails from cards', videoDetails);
  return (
    <div
      className={` mt-2 pt-4
     w-72
        flex flex-col  justify-start`}>
      <img
        src={videos?.snippet?.thumbnails?.medium?.url}
        className=' rounded-lg w-full'
        alt='Video thumbnail'
      />
      <div className='flex justify-start '>
        {channelDp ? (
          <img
            src={channelDp}
            className='rounded-full w-10 h-10 object-cover  mt-3'
            alt='Profile'
          />
        ) : (
          <div className='w-10 h-10 mt-2 rounded-full bg-gray-300'></div>
        )}
        <div className='flex flex-col ml-3 justify-center w-full items-start'>
          <p className='text-md font-bold m-2 max-w-[220px]  line-clamp-2'>
            {videos?.snippet?.title}
          </p>
          <p className='text-sm  ml-2'>{videos?.snippet?.channelTitle}</p>
          <div className='text-sm flex ml-2 '>
            <div>{viewCountAbbrevation}</div>
            <div className='w-1 h-1 mt-2 m-1 bg-slate-900 rounded-full'></div>
            <div>{timeAbbrevation}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;

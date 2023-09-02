import React from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenu } from '../../reduxStore/appSlice';
import CommentContainer from '../comments/CommentContainer';
import LiveChat from '../liveChat/LiveChat';
import {
  RELATED_VIDEOS,
  SINGLE_VIDEO_DETAILS,
  REGION_CODE,
} from '../../utils/constants';
import { GOOGLE_API_KEY } from '../../utils/constants';
import displayPic from '../../youtubeIcons/blank-profile-picture-gec5b7f001_1280.png';
import Like from '../../youtubeIcons/like.png';
import dislike from '../../youtubeIcons/dislike.png';
import shareIcon from '../../youtubeIcons/shareIcon.png';
import downloadIcon from '../../youtubeIcons/downloadIcon.png';
import RelatedVideoList from '../videos/RelatedVideoList';
import useGetChannelDetails from '../../utils/useGetChannelDetails';
import useCountAbbrevation from '../../utils/useCountAbbrevation';
const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get('v');
  const [showDescription, setShowDesription] = useState(false);
  const [singleVideoDetails, setSingleVideoDetails] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideoDetails();
  }, [videoId]);

  const getVideoDetails = async () => {
    let res = await fetch(SINGLE_VIDEO_DETAILS + videoId + GOOGLE_API_KEY);
    let videoDetails = await res.json();
    console.log('details', videoDetails);
    setSingleVideoDetails(videoDetails.items);
  };

  console.log('single video details', singleVideoDetails);

  // let { likeCount } = singleVideoDetails[0]?.statistics;

  const abbrevatedLikeCount = useCountAbbrevation(
    singleVideoDetails[0]?.statistics?.likeCount
  );

  let filteredDescription = singleVideoDetails[0]?.snippet?.description
    .split(' ')
    .slice(0, 30);

  useEffect(() => {
    try {
      relatedVideosList();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const relatedVideosList = async () => {
    let res = await fetch(RELATED_VIDEOS + 10 + REGION_CODE + GOOGLE_API_KEY);
    const relatedVideos = await res.json();
    console.log('relatedVideos ', relatedVideos);
    setRelatedVideos(relatedVideos.items);
  };

  const { channelDp, subscriberCount } = useGetChannelDetails(
    singleVideoDetails[0]?.snippet?.channelId
  );

  const abbrevatedSubscribeCount = useCountAbbrevation(subscriberCount);

  console.log('singleVideoDetails', singleVideoDetails);
  return (
    <div className='flex flex-col md:flex-row  gap-12 m-4'>
      <div className='flex flex-col justify-center w-[62%]'>
        <div
          className='relative overflow-hidden rounded-lg'
          style={{ paddingTop: '56.25%' }}>
          <iframe
            className='absolute top-0 left-0 w-full h-full'
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen></iframe>
        </div>
        <div className='pl-5 w-full'>
          <p className='text-2xl font-semibold w-full pt-3'>
            {singleVideoDetails[0]?.snippet?.localized?.title}
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-2 justify-between pl-5 w-full items-center'>
          <div className='flex gap-3 items-center w-full'>
            <img
              src={channelDp}
              alt='dp'
              className='w-9 rounded-full'
            />
            <div className='flex flex-col gap-1 p-1 justify-between'>
              <p className='font-semibold '>
                {singleVideoDetails[0]?.snippet?.channelTitle}
              </p>
              <p className='text-sm text-gray-500'>
                {abbrevatedSubscribeCount ? abbrevatedSubscribeCount : ''}{' '}
                subscribers
              </p>
            </div>
            <div>
              <button className=' p-2 px-3 bg-black text-white rounded-full'>
                Subscribe
              </button>
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='flex items-center bg-gray-300 gap-2 rounded-full p-1 px-3'>
              <button className='w-5'>
                <img
                  src={Like}
                  className='w-full'
                />
              </button>
              {abbrevatedLikeCount ? (
                <span className='text-sm'>{abbrevatedLikeCount}</span>
              ) : (
                ''
              )}
              <span className='w-[2px] h-7 bg-gray-400'></span>
              <button className='w-5'>
                <img
                  src={dislike}
                  className='w-full'
                />
              </button>
            </div>
            <div>
              <button className='p-1 px-2 rounded-full   border border-gray-500 flex justify-center items-center'>
                <img
                  src={shareIcon}
                  className='w-3 '
                  alt='shareIcon'
                />
                <p className='font-semibold p-1 text-sm'>Share</p>
              </button>
            </div>
            <div>
              <button className='p-1 px-3 rounded-full  border border-gray-500 flex justify-center items-center'>
                <img
                  src={downloadIcon}
                  className='w-3 '
                  alt='shareIcon'
                />
                <p className='font-semibold text-sm p-1'>Download</p>
              </button>
            </div>
          </div>
        </div>
        <div className='bg-gray-200 ml-3 p-2 m-2  rounded-lg w-full'>
          <p>{filteredDescription?.join(' ')}</p>
          {showDescription && (
            <p>{singleVideoDetails[0]?.snippet?.description}</p>
          )}
          <button
            className='border border-none font-semibold'
            onClick={() => setShowDesription((prevState) => !prevState)}>
            {showDescription ? 'show less' : 'show more'}
          </button>
        </div>
        <CommentContainer />
      </div>
      <div className='flex flex-col items-center'>
        <LiveChat />
        <div className='flex justify-start w-10/12 p-1'>
          <p className='font-semibold '>Recommended Videos</p>
        </div>
        <RelatedVideoList relatedVideos={relatedVideos} />
      </div>
    </div>
  );
};

export default Watch;

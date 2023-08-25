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

  // console.log('single video snippet', singleVideoDetails[0]?.snippet);

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
    <div className='flex-col sm:flex-row items-start sm:justify-between ml-7'>
      <div className='flex justify-between items-start'>
        <div className='w-full xl:h-[540px] lg:h-[350px] md:h-80 sm:h-96  sm:w-2/3'>
          <div className='flex justify-stretch h-full w-full'>
            <div className='m-3 mb-0 w-full pb-0 p-3 relative'>
              <iframe
                width='100%'
                height='100%'
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen></iframe>
            </div>
          </div>
          <div className='pl-5 w-full'>
            <p className='text-2xl font-semibold w-full pt-3'>
              {singleVideoDetails[0]?.snippet?.localized?.title}
            </p>
          </div>
          <div className='flex gap-2 sm: justify-between pl-5 w-full items-center'>
            <div className='flex gap-3 items-center w-full'>
              {channelDp ? (
                <img
                  src={channelDp}
                  alt='dp'
                  className='w-9 rounded-full'
                />
              ) : (
                <div className='w-10 h-10 mt-2 rounded-full bg-gray-300'></div>
              )}
              {singleVideoDetails[0]?.snippet?.channelTitle.length > 0 ? (
                <div className='flex flex-col gap-1 p-1 justify-between'>
                  <p className='font-semibold '>
                    {singleVideoDetails[0]?.snippet?.channelTitle}
                  </p>
                  <p className='text-sm text-gray-500'>
                    {abbrevatedSubscribeCount} subscribers
                  </p>
                </div>
              ) : (
                <div className='w-24  bg-gray-300 rounded-xl'></div>
              )}
              <div>
                <button className=' p-2 px-3 bg-black text-white rounded-full'>
                  Subscribe
                </button>
              </div>
            </div>
            <div className='flex items-center gap-2'>
              <div className='flex  rounded-xl pr-2'>
                <button className='p-2'>
                  <img
                    src={Like}
                    className='w-36'
                  />
                </button>
                <button className='p-2'>
                  <img
                    src={dislike}
                    className='w-40'
                  />
                </button>
              </div>
              <div>
                <button className='p-2 px-5 rounded-full m-2 border border-gray-500 flex gap-2 justify-center items-center'>
                  <img
                    src={shareIcon}
                    className='w-3'
                    alt='shareIcon'
                  />
                  <p className='font-semibold '>Share</p>
                </button>
              </div>
              <div className='pl-2'>
                <button className='p-1 px-4 rounded-full gap-1 border border-gray-500 flex justify-center items-center'>
                  <img
                    src={downloadIcon}
                    className='w-3 '
                    alt='shareIcon'
                  />
                  <p className='font-semibold p-1'>Download</p>
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
          <div className='w-full'>
            <CommentContainer />
          </div>
        </div>
        <div className='w-full mt-4 sm:w-96'>
          <LiveChat />
        </div>
      </div>
      <div className='flex flex-col items-end '>
        <div className='w-full sm:w-96 mt-4 sm:mt-0'>
          <p className='font-semibold '>Recommended Videos</p>
        </div>
        <RelatedVideoList relatedVideos={relatedVideos} />
      </div>
    </div>
  );
};

export default Watch;

import React from 'react';
import { useEffect } from 'react';
import {
  GET_MOST_POPULAR_VIDEOS,
  REGION_CODE,
  GOOGLE_API_KEY,
} from '../../utils/constants';
import VideoCards from './VideoCards';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdCard from '../UI/AdCard';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos } from '../../reduxStore/videoSlice';
import ShimmerList from '../UI/ShimmerList';
import Spinner from '../UI/Spinner';
import useInfiniteLoad from '../../utils/useInfiniteLoad';
import useCountAbbrevation from '../../utils/useCountAbbrevation';
const VideoList = () => {
  // const [videoList, setVideoList] = useState([]);
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.video.videoList);
  const menuOpen = useSelector((store) => store.app.isMenuOpen);
  let getVideoApi = useSelector((store) => store.video.videoTypeApi);
  if (localStorage.getItem('currentVideoApi') !== null) {
    getVideoApi = localStorage.getItem('currentVideoApi');
  }
  console.log('video Api from videoList', getVideoApi);
  const { infiniteLoading, shimmerLoading } = useInfiniteLoad(
    getVideoApi,
    addVideos
  );

  console.log('shimmer loading', shimmerLoading);
  console.log('infinite loading ', infiniteLoading);

  return (
    <>
      {shimmerLoading ? (
        <div className='flex flex-wrap gap-1'>{ShimmerList(10)}</div>
      ) : infiniteLoading ? (
        <>
          {videoList?.map((video) =>
            video?.id?.videoId ? (
              <Link
                to={`/watch?v=${video?.id?.videoId}`}
                key={video?.id?.videoId}>
                <VideoCards videos={video} />
              </Link>
            ) : (
              <Link
                to={`/watch?v=${video?.id}`}
                key={video?.id}>
                <VideoCards videos={video} />
              </Link>
            )
          )}
          <div className='flex flex-wrap justify-start gap-1'>
            {ShimmerList(10)}
          </div>
        </>
      ) : (
        videoList?.map((video) =>
          video?.id?.videoId ? (
            <Link
              to={`/watch?v=${video?.id?.videoId}`}
              key={video?.id?.videoId}>
              <VideoCards videos={video} />
            </Link>
          ) : (
            <Link
              to={`/watch?v=${video?.id}`}
              key={video?.id}>
              <VideoCards videos={video} />
            </Link>
          )
        )
      )}
    </>
  );
};

export default VideoList;

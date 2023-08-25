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
  const getVideoApi = useSelector((store) => store.video.videoTypeApi);

  console.log('video Api from videoList', getVideoApi);
  const { infiniteLoading, shimmerLoading } = useInfiniteLoad(
    getVideoApi,
    addVideos
  );

  return (
    <>
      {shimmerLoading ? (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-1'>
          {ShimmerList(10)}
        </div>
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
          {ShimmerList(6)}
          <Spinner />
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

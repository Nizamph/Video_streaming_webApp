import React from 'react';
import { useEffect } from 'react';
import {
  GET_MOST_POPULAR_VIDEOS,
  REGION_CODE,
  GOOGLE_API_KEY,
} from '../utils/constants';
import VideoCards from './VideoCards';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdCard from './AdCard';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos } from '../reduxStore/videoSlice';
import ShimmerList from './ShimmerList';
import Spinner from './Spinner';
import useInfiniteLoad from '../utils/useInfiniteLoad';
const VideoList = () => {
  // const [videoList, setVideoList] = useState([]);
  const [pageToken, setPageToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [infiniteContentLoading, setInfiniteContentLoading] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.video.videoList);
  const menuOpen = useSelector((store) => store.app.isMenuOpen);

  let infiniteApi = GET_MOST_POPULAR_VIDEOS + 10;

  const { infiniteLoading, shimmerLoading } = useInfiniteLoad(
    infiniteApi,
    addVideos
  );

  return (
    <>
      {shimmerLoading ? (
        <div
          className={`grid ${
            menuOpen ? 'grid-cols-3 gap-2' : 'grid-cols-4 gap-1'
          }`}>
          {ShimmerList(10)}
        </div>
      ) : infiniteLoading ? (
        <>
          {videoList?.map((video) => (
            <Link
              to={`/watch?v=${video?.id}`}
              key={video?.id}>
              <VideoCards videos={video} />
            </Link>
          ))}
          {ShimmerList(6)}
          <Spinner />
        </>
      ) : (
        videoList?.map((video) => (
          <Link
            to={`/watch?v=${video?.id}`}
            key={video?.id}>
            <VideoCards videos={video} />
          </Link>
        ))
      )}
    </>
  );
};

export default VideoList;

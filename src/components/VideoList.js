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
const VideoList = () => {
  // const [videoList, setVideoList] = useState([]);
  const [pageToken, setPageToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [infiniteContentLoading, setInfiniteContentLoading] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.video.videoList);
  const menuOpen = useSelector((store) => store.app.isMenuOpen);
  const fetchMoreVideos = async () => {
    if (pageToken) {
      setInfiniteContentLoading(true);
      const res = await fetch(
        GET_MOST_POPULAR_VIDEOS + 10 + pageToken + REGION_CODE + GOOGLE_API_KEY
      );
      const data = await res.json();
      // console.log('dataItems from moreVideos', data.items);
      setInfiniteContentLoading(false);
      const { nextPageToken } = data;

      console.log('nextVideoKeys', nextPageToken);
      // setVideoList((prevList) => [...prevList, ...data.items]);
      dispatch(addVideos(data.items));
      setPageToken(`&pageToken=${nextPageToken}`);
    }
  };
  console.log('ultimateVideoList', videoList);
  useEffect(() => {
    try {
      fetchMoreVideos();
    } catch (err) {
      console.log(err);
    }
  }, [page]);

  const fetchPopularVideos = async () => {
    setLoading(true);
    const res = await fetch(
      GET_MOST_POPULAR_VIDEOS + 11 + REGION_CODE + GOOGLE_API_KEY
    );
    const data = await res.json();
    setLoading(false);
    const { nextPageToken } = data;

    setPageToken(`&pageToken=${nextPageToken}`);
    // setVideoList(data.items);
    dispatch(addVideos(data.items));
  };

  useEffect(() => {
    console.log('running');
    try {
      fetchPopularVideos();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // console.log('innerHeight', window.innerHeight);
  // console.log('scrollTop', document.documentElement.scrollTop);
  // console.log('scroll Height', document.documentElement.scrollHeight);

  const handleScrollEventHandler = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEventHandler);

    return () => {
      window.removeEventListener('scroll', handleScrollEventHandler);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div
          className={`grid ${
            menuOpen ? 'grid-cols-3 gap-2' : 'grid-cols-4 gap-1'
          }`}>
          {ShimmerList(10)}
        </div>
      ) : infiniteContentLoading ? (
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

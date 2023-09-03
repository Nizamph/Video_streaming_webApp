import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GOOGLE_API_KEY,
  GET_MOST_POPULAR_VIDEOS,
  REGION_CODE,
} from './constants';
import { setPageToken } from '../reduxStore/videoSlice';
const useInfiniteLoad = (infinteApi, addVideos) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState([]);
  const [shimmerLoading, setShimmerLoading] = useState(false);
  // const [newPageToken, setNewPageToken] = useState('');
  const [infiniteContentLoading, setInfiniteContentLoading] = useState(false);
  const newPageToken = useSelector((store) => store.video.pageToken);
  const clickCount = useSelector((store) => store.video.clickCount);
  useEffect(() => {
    setPage(0);
  }, [infinteApi]);
  const fetchMoreVideos = async () => {
    if (page < 5) {
      if (newPageToken) {
        setInfiniteContentLoading(true);
        const res = await fetch(
          infinteApi + newPageToken + REGION_CODE + GOOGLE_API_KEY
        );
        const data = await res.json();
        setInfiniteContentLoading(false);
        const { nextPageToken } = data;

        dispatch(addVideos(data.items));
        if (nextPageToken) {
          dispatch(setPageToken(`&pageToken=${nextPageToken}`));
        }
      } else {
        setShimmerLoading(true);

        const res = await fetch(infinteApi + REGION_CODE + GOOGLE_API_KEY);
        const data = await res.json();

        setShimmerLoading(false);
        const { nextPageToken } = data;
        dispatch(addVideos(data.items));
        // setNewPageToken(`&pageToken=${nextPageToken}`);
        if (nextPageToken) {
          dispatch(setPageToken(`&pageToken=${nextPageToken}`));
        }
      }
    }
  };
  useEffect(() => {
    try {
      fetchMoreVideos();
    } catch (err) {
      console.log(err);
    }
  }, [page, infinteApi, clickCount]);

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

  return {
    infiniteLoading: infiniteContentLoading,
    shimmerLoading: shimmerLoading,
  };
};

export default useInfiniteLoad;

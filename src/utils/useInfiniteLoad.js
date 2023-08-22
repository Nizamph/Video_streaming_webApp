import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  GOOGLE_API_KEY,
  GET_MOST_POPULAR_VIDEOS,
  REGION_CODE,
} from './constants';
const useInfiniteLoad = (infinteApi, addVideos) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState([]);
  const [shimmerLoading, setShimmerLoading] = useState(false);
  const [newPageToken, setNewPageToken] = useState('');
  const [infiniteContentLoading, setInfiniteContentLoading] = useState(false);
  const fetchMoreVideos = async () => {
    if (newPageToken.length > 0) {
      setInfiniteContentLoading(true);
      const res = await fetch(
        infinteApi + newPageToken + REGION_CODE + GOOGLE_API_KEY
      );
      const data = await res.json();
      console.log('data from useInfinite scroll', data);
      setInfiniteContentLoading(false);
      const { nextPageToken } = data;

      console.log('nextVideoKeys', nextPageToken);

      dispatch(addVideos(data.items));
      setNewPageToken(`&pageToken=${nextPageToken}`);
    } else {
      setShimmerLoading(true);
      const res = await fetch(infinteApi + REGION_CODE + GOOGLE_API_KEY);
      const data = await res.json();

      setShimmerLoading(false);
      const { nextPageToken } = data;

      dispatch(addVideos(data.items));
      setNewPageToken(`&pageToken=${nextPageToken}`);
    }
  };
  useEffect(() => {
    try {
      fetchMoreVideos();
    } catch (err) {
      console.log(err);
    }
  }, [page, infinteApi]);

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

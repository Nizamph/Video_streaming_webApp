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
const VideoList = () => {
  const [videoList, setVideoList] = useState([]);
  const [page, setPage] = useState(40);
  useEffect(() => {
    console.log('running');
    try {
      fetchPopularVideos();
    } catch (err) {
      console.log(err);
    }
  }, [page]);

  // const handleScrollEventHandler = () => {
  //   console.log('event triggering');
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     setPage((prevState) => prevState + 20);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScrollEventHandler);
  // }, []);

  const fetchPopularVideos = async () => {
    const res = await fetch(
      GET_MOST_POPULAR_VIDEOS + page + REGION_CODE + GOOGLE_API_KEY
    );
    const data = await res.json();
    console.log('dataIshere', data);
    setVideoList((prevData) => [...prevData, ...data.items]);
  };

  return (
    <>
      {videoList?.map((video) => (
        <Link
          to={`/watch?v=${video?.id}`}
          key={video?.id}>
          <VideoCards videos={video} />
        </Link>
      ))}
    </>
  );
};

export default VideoList;

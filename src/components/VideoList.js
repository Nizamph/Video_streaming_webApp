import React from 'react';
import { useEffect } from 'react';
import { GET_MOST_POPULAR_VIDEOS } from '../utils/constants';
import VideoCards from './VideoCards';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const VideoList = () => {
  const [videoList, setVideoList] = useState([]);
  console.log('videolist rendering');
  useEffect(() => {
    console.log('running');
    try {
      fetchPopularVideos();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const fetchPopularVideos = async () => {
    const res = await fetch(GET_MOST_POPULAR_VIDEOS);
    const data = await res.json();
    console.log('data is here', data);
    console.log(data.items);
    setVideoList(data.items);
  };

  console.log('videoList', videoList);
  return (
    <>
      {videoList.map((video) => (
        <Link
          to={`/watch?v=${video.id}`}
          key={video.id}>
          <VideoCards videos={video} />
        </Link>
      ))}
    </>
  );
};

export default VideoList;

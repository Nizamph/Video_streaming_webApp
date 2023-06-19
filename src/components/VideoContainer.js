import React from 'react';
import VideoList from './VideoList';
import { useDispatch } from 'react-redux';
import { openMenu } from '../reduxStore/appSlice';
import { useEffect } from 'react';
const VideoContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, []);
  return (
    <div className=' ml-16 w-full flex max- flex-wrap items-center gap-3 max-h-[80vh] overflow-y-scroll scrollbar-none '>
      <VideoList />
    </div>
  );
};

export default VideoContainer;

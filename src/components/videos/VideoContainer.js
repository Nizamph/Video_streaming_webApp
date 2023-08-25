import React from 'react';
import VideoList from './VideoList';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../reduxStore/appSlice';
import { useEffect } from 'react';
const VideoContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className=' ml-16 flex  flex-wrap gap-3 h-full '>
      <VideoList />
    </div>
  );
};

export default VideoContainer;

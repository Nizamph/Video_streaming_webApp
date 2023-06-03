import React from 'react';
import SideBar from './SideBar';
import VideoContainer from './VideoContainer';
import ButtonList from './ButtonList';
const Body = () => {
  return (
    <div className='flex w-100% m-2'>
      <SideBar />
      <div className=''>
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default Body;

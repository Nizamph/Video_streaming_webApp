import React from 'react';
import SideBar from './SideBar';
import VideoContainer from './VideoContainer';
import ButtonList from './ButtonList';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
const Body = () => {
  const showSidebar = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className='flex m-2 w-100% overflow-x-hidden'>
      {showSidebar && <SideBar />}
      <div className='w-11/12'>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;

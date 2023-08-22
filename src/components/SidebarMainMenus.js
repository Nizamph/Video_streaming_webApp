import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVideoApi, removeAllVideos } from '../reduxStore/videoSlice';
import { useNavigate } from 'react-router-dom';
import { GET_CATEGORY_VIDEOS } from '../utils/constants';
const SidebarMainMenus = ({ name, url }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [loadMenuItemOnHomePage,setLoadMenuItemOnHomePage] = useState()
  const loadMenuItemOnHomePageHandler = () => {
    dispatch(removeAllVideos());
    navigate('/');
    dispatch(addVideoApi(`${GET_CATEGORY_VIDEOS}&q=${name}&type=video`));
  };

  return (
    <>
      {name === 'Explore' ? (
        <div className=' font-semibold text-base p-1 ml-2'>Explore</div>
      ) : (
        <button
          key={new Date().getUTCMilliseconds()}
          onClick={loadMenuItemOnHomePageHandler}>
          <div
            className='w-44 mr-24 h-9 flex items-center cursor-pointer rounded-md hover:bg-gray-100'
            onClick={() => navigate('/')}>
            <img
              className='h-[1.4rem] ml-3 '
              src={url}
              alt='Home Icon'
            />
            <p className='font-semibold ml-5 text-sm  '>{name}</p>
          </div>
        </button>
      )}
    </>
  );
};

export default SidebarMainMenus;

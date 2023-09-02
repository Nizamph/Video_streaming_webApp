import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addVideoApi,
  removeAllVideos,
  setClickCount,
} from '../../reduxStore/videoSlice';
import { useNavigate } from 'react-router-dom';
import {
  GET_CATEGORY_VIDEOS,
  GET_MOST_POPULAR_VIDEOS,
} from '../../utils/constants';

const SidebarMainMenus = ({
  name,
  url,
  index,
  setCurrentId,
  id,
  currentId,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickVal = useSelector((store) => store.video.clickCount);
  const loadMenuItemOnHomePageHandler = (id, index) => {
    navigate('/');

    if (name == 'Home') {
      // navigate('/');
      // console.log('api called from sidebar');

      dispatch(removeAllVideos());

      dispatch(addVideoApi(GET_MOST_POPULAR_VIDEOS));
      localStorage.setItem('currentVideoApi', GET_MOST_POPULAR_VIDEOS);
      dispatch(setClickCount({ clickCount: clickVal + 1 }));
    } else {
      navigate('/');

      dispatch(removeAllVideos());
      localStorage.setItem(
        'currentVideoApi',
        `${GET_CATEGORY_VIDEOS}&q=${name}&type=video`
      );
      dispatch(addVideoApi(`${GET_CATEGORY_VIDEOS}&q=${name}&type=video`));
      dispatch(setClickCount({ clickCount: clickVal + 1 }));
    }
    localStorage.setItem('currentMenu', id);
    localStorage.removeItem('currentButton');
    setCurrentId(id);
    // localStorage.setItem('currentMenu',id)
  };

  return (
    <>
      {name === 'Explore' ? (
        <div className=' font-semibold text-base p-1 ml-2'>Explore</div>
      ) : (
        <button
          key={new Date().getUTCMilliseconds()}
          onClick={() => loadMenuItemOnHomePageHandler(id, index)}>
          <div
            className={`w-44 mr-24 h-9 flex items-center ${
              currentId == index + 1 ? 'bg-gray-300 hover:bg-gray-200' : ''
            } cursor-pointer rounded-md hover:bg-gray-100`}
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

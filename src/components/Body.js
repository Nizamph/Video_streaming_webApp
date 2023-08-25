import React from 'react';
import SideBar from './UI/SideBar';
import VideoContainer from './videos/VideoContainer';
import ButtonList from './UI/ButtonList';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {
  setShowSuggestion,
  setShowSuggestionException,
} from '../reduxStore/searchSlice';
const Body = () => {
  const showSidebar = useSelector((store) => store.app.isMenuOpen);
  const suggestionException = useSelector(
    (store) => store.search.suggestionException
  );
  const dispatch = useDispatch();

  const handleOnShowException = () => {
    console.log('calling div from the app');
    // dispatch(setShowSuggestion(false));
    dispatch(setShowSuggestion(false));
  };

  console.log('exception is here inside the body', suggestionException);
  return (
    <div
      className='flex mx-2 '
      onClick={handleOnShowException}>
      {showSidebar && <SideBar />}
      <div className='w-full mt-14'>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;

import React from 'react';
import SideBar from './SideBar';
import VideoContainer from './VideoContainer';
import ButtonList from './ButtonList';
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
      className='flex m-2 w-100% overflow-x-hidden'
      onClick={handleOnShowException}>
      {showSidebar && <SideBar />}
      <div className='w-11/12'>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;

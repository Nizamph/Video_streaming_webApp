import hamburgerManu from '../youtubeIcons/hamburger-menu.svg';
import Youtube from '../youtubeIcons/youtube-logo.svg';
import Create from '../youtubeIcons/upload.svg';
import notification from '../youtubeIcons/notifications.svg';
import Profile from '../youtubeIcons/profile-dp.jpg';
import VoiceIcon from '../youtubeIcons/voice-search-icon.svg';
import Search from '../youtubeIcons/search.svg';
import { useDispatch, useSelector } from 'react-redux';
import { menuToggle, setInputClearer } from '../reduxStore/appSlice';
import { useEffect, useState } from 'react';
import { setSearchContent } from '../reduxStore/searchSlice';
import SuggestionList from './suggestions/SuggestionList';
import crossIcon from '../youtubeIcons/crossIcon.png';
import {
  setShowSuggestion,
  setShowSuggestionException,
} from '../reduxStore/searchSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchContent = useSelector((store) => store.search.searchContent);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCrossBtn, setShowCrossBtn] = useState(false);
  const valueForSearch = useSelector((store) => store.search.valueForSearch);
  const showSuggestion = useSelector((store) => store.search.showSuggestion);
  const showInputClearer = useSelector((store) => store.app.showInputClearer);
  // const [showSuggestion, setShowSuggestion] = useState(false);
  useEffect(() => {
    if (searchContent !== null) {
      setSearchQuery(searchContent);
    }
  }, [searchContent]);

  const showSidebarHandler = () => {
    dispatch(menuToggle());
  };

  const onBlurHandler = (e) => {
    setShowSuggestion(true);
    e.stopPropagation();
  };

  const searchHandler = (search_query) => {
    if (search_query.length > 0) {
      navigate(`/results?search_query=${search_query}`);
      dispatch(setSearchContent(search_query));
      dispatch(setShowSuggestion(false));
      localStorage.setItem('searchContent', search_query);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      dispatch(setInputClearer(true));
    } else {
      dispatch(setInputClearer(false));
    }
  }, [searchQuery]);

  console.log('inputClearer', showInputClearer);
  console.log('searchQuery', searchQuery);
  // console.log('search query', searchQuery);
  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
    e.stopPropagation();
  };

  const onFocusHandler = (e) => {
    dispatch(setShowSuggestion(true));
    e.stopPropagation();
  };

  const handleOnShowException = (e) => {
    console.log('calling div from the header ');
    dispatch(setShowSuggestion(false));
  };

  const clearSearchContentHandler = () => {
    setSearchQuery('');
    localStorage.removeItem('searchContent');
  };

  return (
    <div
      className='py-2 grid grid-flow-col w-full  shadow-md px-4 fixed z-20 bg-white'
      onClick={(e) => handleOnShowException(e)}>
      <div className='col-span-1 flex items-center'>
        <button onClick={showSidebarHandler}>
          <img
            src={hamburgerManu}
            className='h-6'
            alt='humberger Menu'
          />
        </button>
        <img
          src={Youtube}
          className='h-5 ml-5'
          alt='youtube'
        />
      </div>
      <div>
        <div
          className='flex col-span-8 justify-center items-center mr-7'
          onClick={(e) => e.stopPropagation()}>
          <input
            className='w-4/5 h-9 border-l border-t border-b pl-3 p-2 border-gray-300 rounded-l-full'
            type='text'
            placeholder='Search..'
            value={searchQuery}
            onChange={onChangeHandler}
            onFocus={(e) => onFocusHandler(e)}
            onBlur={(e) => onBlurHandler(e)}
          />
          {showInputClearer && (
            <button
              className='border-y border-gray-300'
              onClick={clearSearchContentHandler}>
              <img
                src={crossIcon}
                className='w-[37px]'
              />
            </button>
          )}
          <button
            className='p-[0.30rem] px-4 border border-gray-200 mr-2 rounded-r-full '
            onClick={() => searchHandler(searchQuery)}>
            <img
              src={Search}
              className='h-6'
            />
          </button>
          <button className='p-2 bg-gray-100 rounded-full hover:bg-gray-200 mr-7'>
            <img
              src={VoiceIcon}
              className='h-5'
            />
          </button>
        </div>
        <div>
          <SuggestionList searchQuery={searchQuery} />
        </div>
      </div>
      <div className='col-span-1 flex justify-evenly'>
        <img
          src={Create}
          className='h-7'
          alt='create video'
        />
        <img
          src={notification}
          className='h-7'
          alt='notification'
        />
        <img
          src={Profile}
          className='h-7 rounded-full'
          alt='dp'
        />
      </div>
    </div>
  );
};

export default Header;

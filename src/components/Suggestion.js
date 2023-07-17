import React from 'react';
import Search from '../youtubeIcons/search.svg';
import { setSearchContent } from '../reduxStore/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import {
  setShowSuggestion,
  setShowSuggestionException,
} from '../reduxStore/searchSlice';
const Suggestion = ({ suggestion }) => {
  const excludedAreaRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const showSuggestion = useSelector((store) => store.search.showSuggestion);

  const searchHandler = () => {
    localStorage.setItem('searchContent', suggestion);
    dispatch(setSearchContent(suggestion));
    navigate(`/results?search_query=${suggestion}`);
  };

  const handleExcludedArea = () => {
    console.log('clicking');
    dispatch(setShowSuggestionException(true));
  };

  return (
    <div
      onClick={handleExcludedArea}
      className='items-center flex my-1 gap-2'
      value='suggestion'>
      <img
        src={Search}
        className='h-5'
      />
      <button
        onClick={searchHandler}
        className='font-semibold'>
        {suggestion}
      </button>
    </div>
  );
};

export default Suggestion;

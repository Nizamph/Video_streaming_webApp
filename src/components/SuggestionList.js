import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCache } from '../reduxStore/searchSlice';
import { GET_SUGGESTION_LIST } from '../utils/constants';
import Suggestion from './Suggestion';
const SuggestionList = ({ searchQuery }) => {
  const [suggestionList, setSuggestionList] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search.cache);

  const showSuggestion = useSelector((store) => store.search.showSuggestion);
  const showSuggestionExcpetion = useSelector(
    (store) => store.search.suggestionException
  );
  // console.log('searchCache', searchCache);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (searchCache[searchQuery] !== undefined) {
          // console.log('cached data', searchCache[searchQuery]);
          let cachedData = searchCache[searchQuery];
          setSuggestionList(cachedData);
          // console.log('suggestionlist inside if', suggestionList);
        } else {
          searchSuggestions();
        }
      } catch (err) {
        console.log(err);
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchSuggestions = async () => {
    const data = await fetch(`${GET_SUGGESTION_LIST}=${searchQuery}`);
    const searchSuggestions = await data.json();
    setSuggestionList(searchSuggestions[1]);
    dispatch(addCache({ [searchQuery]: searchSuggestions[1] }));
  };
  return (
    <>
      {showSuggestion && suggestionList?.length > 0 && (
        <div className=' flex-col items-center absolute bg-white m-2 p-2 px-3 w-[32.55%] rounded-lg'>
          {suggestionList?.map((suggestion) => {
            return (
              <Suggestion
                key={Math.random()}
                suggestion={suggestion}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default SuggestionList;

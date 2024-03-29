import React from 'react';
import SearchPage from './SearchPage';
import SearchCardList from './SearchCardList';

const SearchPageContainer = () => {
  return (
    <div className='w-full flex flex-col p-2'>
      <SearchCardList />
    </div>
  );
};

export default SearchPageContainer;

import React from 'react';
import Search from '../youtubeIcons/search.svg';
const Suggestion = ({ suggestion }) => {
  return (
    <div className='items-center flex my-1 gap-2'>
      <img
        src={Search}
        className='h-5'
      />
      <p className='font-semibold'>{suggestion}</p>
    </div>
  );
};

export default Suggestion;

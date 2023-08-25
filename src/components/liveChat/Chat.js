import React from 'react';
import demoProfile from '../../youtubeIcons/blank-profile-picture-gec5b7f001_1280.png';
const Chat = ({ name, message, image }) => {
  return (
    <div className='p-1 px-2'>
      <div className='flex w-full items-center'>
        <img
          src={image}
          alt='profile'
          className='w-8  rounded-full'
        />
        <div className='font-semibold px-3'>{name}</div>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default Chat;

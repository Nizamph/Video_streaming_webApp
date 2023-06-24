import React from 'react';
import VideoCards from './VideoCards';
const AdCard = ({ video }) => {
  return (
    <div className='border border-black p-1 m-1'>
      <VideoCards videos={video} />
    </div>
  );
};

export default AdCard;

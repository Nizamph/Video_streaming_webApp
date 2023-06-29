import React from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../reduxStore/appSlice';
import CommentContainer from './CommentContainer';
const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get('v');

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className='m-3 p-3'>
      <iframe
        width='760'
        height='415'
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen></iframe>
      <CommentContainer />
    </div>
  );
};

export default Watch;

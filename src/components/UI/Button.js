import React from 'react';
import {
  GET_CATEGORY_VIDEOS,
  GET_MOST_POPULAR_VIDEOS,
} from '../../utils/constants';
import {
  addVideoApi,
  addVideos,
  removeAllVideos,
} from '../../reduxStore/videoSlice';
import { useDispatch } from 'react-redux';
const Button = ({ type, name, className }) => {
  const dispatch = useDispatch();
  const categorySelectHandler = () => {
    console.log('clicking category button');
    if (name === 'All') {
      dispatch(removeAllVideos());
      dispatch(addVideoApi(GET_MOST_POPULAR_VIDEOS));
    } else {
      dispatch(removeAllVideos());
      dispatch(addVideoApi(`${GET_CATEGORY_VIDEOS}&q=${name}&type=video`));
    }
  };
  return (
    <>
      <button
        className={className}
        type={type}
        onClick={categorySelectHandler}>
        {name}
      </button>
    </>
  );
};

export default Button;

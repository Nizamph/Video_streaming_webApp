import React from 'react';
import {
  GET_CATEGORY_VIDEOS,
  GET_MOST_POPULAR_VIDEOS,
} from '../../utils/constants';
import {
  addVideoApi,
  addVideos,
  removeAllVideos,
  setClickCount,
} from '../../reduxStore/videoSlice';
import { useDispatch, useSelector } from 'react-redux';
const Button = ({ name, className, setCurrentBtn, type, id }) => {
  const dispatch = useDispatch();
  const currentClick = useSelector((store) => store.video.clickCount);
  const categorySelectHandler = (id) => {
    console.log('clicking category button');
    if (name === 'All') {
      dispatch(removeAllVideos());
      dispatch(addVideoApi(GET_MOST_POPULAR_VIDEOS));
      localStorage.setItem('currentVideoApi', GET_MOST_POPULAR_VIDEOS);
      dispatch(setClickCount({ clickCount: currentClick + 1 }));
    } else {
      dispatch(removeAllVideos());
      dispatch(addVideoApi(`${GET_CATEGORY_VIDEOS}&q=${name}&type=video`));
      localStorage.setItem(
        'currentVideoApi',
        `${GET_CATEGORY_VIDEOS}&q=${name}&type=video`
      );
      dispatch(setClickCount({ clickCount: currentClick + 1 }));
    }
    setCurrentBtn(id);
    localStorage.setItem('currentButton', id);
    localStorage.removeItem('currentMenu');
    console.log('working');
  };
  return (
    <>
      <button
        className={className}
        type={type}
        onClick={() => categorySelectHandler(id)}>
        {name}
      </button>
    </>
  );
};

export default Button;

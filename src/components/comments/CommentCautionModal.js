import React from 'react';
import { useDispatch } from 'react-redux';
import { setShowCommentModal } from '../../reduxStore/commentSlice';
const CommentCautionModal = ({ onClick }) => {
  const dispatch = useDispatch();
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50'>
      <div className='w-72 py-4 h-32 p-3 rounded-lg shadow-lg bg-white flex flex-col justify-between'>
        <p className='font-thin'>Delete your comment permanently?</p>
        <div className='flex items-center w-full justify-end'>
          <button
            className='mr-2 p-2 rounded-full text-slate-500 font-medium hover:bg-blue-600'
            onClick={() => dispatch(setShowCommentModal(false))}>
            cancel
          </button>
          <button
            className='p-2 rounded-full text-slate-500 font-medium hover:bg-blue-600'
            onClick={onClick}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentCautionModal;

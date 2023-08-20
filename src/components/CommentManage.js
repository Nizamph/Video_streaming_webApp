import React from 'react';
import EditIcon from '../youtubeIcons/editIcon.png';
import DeleteIcon from '../youtubeIcons/deleteIcon.png';
import { useDispatch } from 'react-redux';
import useTraverseTree from '../utils/usetraverseTree';
import {
  setCommentManageShow,
  setCommentText,
  setDeleteCommentId,
  setShowCommentModal,
} from '../reduxStore/commentSlice';
const CommentManage = ({ commentId, setCommentData, commentEditHandler }) => {
  console.log('comment id from comment manage', commentId);
  const dispatch = useDispatch();
  const { deleteNode } = useTraverseTree();
  const commentDeleteHandler = () => {
    dispatch(setShowCommentModal(true));
    dispatch(setDeleteCommentId(commentId));
  };

  // const commentEditHandler = () => {
  //    showCommentDetailsHandler(false);
  //   // dispatch(setCommentText(commentText));
  //   // let dataAfterDelete = deleteNode(fullCommentData, commentId);
  //   // setCommentData(dataAfterDelete);
  // };
  return (
    <div className='rounded-lg flex flex-col justify-center items-start gap-3 w-32 shadow-md bg-white p-3'>
      <button
        className='flex items-center justify-start'
        onClick={commentEditHandler}>
        <img
          alt='edit'
          className='w-5'
          src={EditIcon}
        />
        <p className='ml-2 p-2 text-base '>Edit</p>
      </button>
      <button
        className='flex items-center justify-start'
        onClick={commentDeleteHandler}>
        <img
          alt='delete'
          className='w-5'
          src={DeleteIcon}
        />
        <p className='ml-2 p-2 text-base'>Delete</p>
      </button>
    </div>
  );
};

export default CommentManage;

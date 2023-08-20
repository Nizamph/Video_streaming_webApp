import React, { useEffect, useState } from 'react';
import CommentInputHandler from './CommentInputHandler';
import CommentList from './CommentList';
import Comments from './Comments';
import { commentData } from '../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import CommentCautionModal from './CommentCautionModal';
import useTraverseTree from '../utils/usetraverseTree';
import { setShowCommentModal } from '../reduxStore/commentSlice';
const CommentContainer = () => {
  // const commentData = useSelector((store) => store.comment.commentsList);
  const deletCommentId = useSelector((store) => store.comment.deleteCommentId);
  const dispatch = useDispatch();
  const [comments, setComments] = useState(commentData);
  const isModalShow = useSelector((store) => store.comment.showCommentModal);
  const { deleteNode } = useTraverseTree();
  const onDeleteHandler = () => {
    console.log('delete comment Id', deletCommentId);
    let dataAfterDelete = deleteNode(commentData, deletCommentId);
    console.log('data after delete ', dataAfterDelete);
    console.log('deleting from container');
    setComments(dataAfterDelete);
    dispatch(setShowCommentModal(false));
  };
  return (
    <div className='w-full pl-2 flex flex-col justify-center relative'>
      <div className='font-bold p-1'>Comments</div>
      {isModalShow && <CommentCautionModal onClick={onDeleteHandler} />}
      <CommentInputHandler />
      <CommentList
        commentData={comments}
        setCommentData={setComments}
      />
    </div>
  );
};

export default CommentContainer;

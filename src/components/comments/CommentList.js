import React, { useEffect } from 'react';
import Comments from './Comments';
import { useSelector, useDispatch } from 'react-redux';
import useTraverseTree from '../../utils/usetraverseTree';
import { addComment } from '../../reduxStore/commentSlice';
const CommentList = ({ commentData, setCommentData }) => {
  // const dispatch = useDispatch();
  const { commentId, comment } = useSelector(
    (store) => store.comment.editDetails
  );
  const { insertNode, editNode } = useTraverseTree();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentData, folderId, item);
    console.log('finalStructure', finalStructure);
    setCommentData(finalStructure);
  };

  useEffect(() => {
    const editedTree = editNode(commentData, commentId, comment);
    setCommentData(editedTree);
  }, [comment]);

  console.log('commentData is here', commentData);
  return commentData.map((comment, i) => (
    <>
      <Comments
        key={i}
        comment={comment}
        handleInsertNode={handleInsertNode}
        fullCommentData={commentData}
        setCommentData={setCommentData}
      />
    </>
  ));
};
export default CommentList;

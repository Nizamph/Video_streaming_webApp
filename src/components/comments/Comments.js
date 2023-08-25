import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from '../../youtubeIcons/profile-dp.jpg';
import threeDots from '../../youtubeIcons/menu.png';
import SmallVersionCommentInputHandler from '../UI/SmallVersionCommentInputHandler';
import CommentManage from './CommentManage';
import CommentCautionModal from './CommentCautionModal';
import useTraverseTree from '../../utils/usetraverseTree';
import { setEditDetails } from '../../reduxStore/commentSlice';
import upArrow from '../../youtubeIcons/upperArrow.png';
import downArrow from '../../youtubeIcons/downArrow.png';
import LikeButton from '../../youtubeIcons/like.png';
import Dislike from '../../youtubeIcons/dislike.png';
const Comments = ({ comment, handleInsertNode, editInputComment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [showCommentManage, setShowCommentManage] = useState(false);
  const [showCommentDetails, setshowCommentDetails] = useState(true);
  const [isCommentFocussed, setIsCommentFocused] = useState(false);
  const [disable, setDisable] = useState(true);
  const [typeComment, setTypeComment] = useState('');
  const [impressionCount, setImpressionCount] = useState({
    likeCount: 0,
    dislikeCount: 0,
  });
  const { editNode } = useTraverseTree();
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setTypeComment(e.target.value);
  };
  // const commentsData = useSelector((store) => store.comment.commentsList);
  useEffect(() => {
    if (typeComment.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [typeComment]);

  const commentSubmitHandler = () => {
    handleInsertNode(comment.id, commentText);
    setShowInput(false);
    setShowReplies(true);
  };

  const catchCommentHandler = (comment) => {
    setCommentText(comment);
  };

  useEffect(() => {
    if (comment?.id === '2000') {
      setShowReplies(true);
    }
  }, [comment]);

  const editCommentHandler = () => {
    console.log('showEdti');
    setshowCommentDetails(false);
    setTypeComment(comment?.comment);
  };

  const editSubmitHandler = () => {
    // editInputComment(comment?.id, typeComment);
    setshowCommentDetails(true);
    dispatch(setEditDetails({ commentId: comment?.id, comment: typeComment }));
  };

  console.log('showCommentDetails', showCommentDetails);
  return (
    <div>
      <div
        className=''
        onClick={(e) => {
          setShowCommentManage(false);
          e.stopPropagation();
        }}>
        <div className='flex items-center justify-between'>
          <div className='flex gap-4 m-2 items-center'>
            <img
              alt='proPic'
              src={comment?.url}
              className='w-10 h-10 rounded-full'
            />
            {showCommentDetails ? (
              <div>
                <p className='m-1 font-semibold'>{comment?.name}</p>
                <p className='m-1'>{comment?.comment}</p>
              </div>
            ) : (
              <>
                <input
                  type='text'
                  className={` border-b-2 pl-2  ${
                    isCommentFocussed ? 'focus:outline-none' : ''
                  } border-gray-400 w-[60%]`}
                  placeholder='type a comment'
                  value={typeComment}
                  onChange={onChangeHandler}
                  onFocus={() => setIsCommentFocused(true)}
                />
                <div className='w-4/6 flex justify-end'>
                  <button
                    type='button'
                    className='p-1  text-xs px-3 m-2 bg-slate-200 rounded-full'
                    onClick={() => setshowCommentDetails(true)}>
                    cancel
                  </button>
                  <button
                    type='button'
                    disabled={disable}
                    className={`p-1  text-xs px-3 m-2 ${
                      disable ? 'bg-slate-100' : 'bg-blue-600 text-white'
                    }  rounded-full`}
                    onClick={editSubmitHandler}>
                    reply
                  </button>
                </div>
              </>
            )}
          </div>
          {comment?.name === 'Nizam' ? (
            <div className='relative'>
              <button
                className='flex justify-end items-center'
                onClick={(e) => {
                  e.stopPropagation();
                  return setShowCommentManage((prevState) => !prevState);
                }}>
                <img
                  alt='menu'
                  src={threeDots}
                  className='w-8'
                />
              </button>
              <div
                className='absolute'
                style={{
                  opacity: showCommentManage ? 1 : 0,
                  visibility: showCommentManage ? 'visible' : 'hidden',
                  transition: 'opacity 500ms ease-in-out',
                }}>
                {showCommentManage && (
                  <CommentManage
                    commentId={comment?.id}
                    commentEditHandler={editCommentHandler}
                  />
                )}
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
        {showCommentDetails && (
          <div className='flex flex-col justify-center items-start'>
            <div className='flex justify-start items-center gap-1'>
              <button
                className='flex justify-between items-center'
                onClick={() =>
                  setImpressionCount((prevState) => {
                    return { dislikeCount: 0, likeCount: 1 };
                  })
                }>
                <img
                  alt='like'
                  src={LikeButton}
                  className='w-4'
                />
                <p className=' m-1'>{impressionCount.likeCount}</p>
              </button>
              <button
                className='flex justify-between items-center'
                onClick={() =>
                  setImpressionCount((prevState) => {
                    return { likeCount: 0, dislikeCount: 1 };
                  })
                }>
                <img
                  alt='like'
                  src={Dislike}
                  className='w-5'
                />
                <p className='m-1 '>{impressionCount.dislikeCount}</p>
              </button>
              <button
                className='m-2 p-1 px-3 hover:bg-gray-200 rounded-full'
                onClick={() => setShowInput(true)}>
                reply
              </button>
            </div>
            <div className='flex items-center justify-start'>
              {comment?.replies?.length > 0 ? (
                <button
                  onClick={() => setShowReplies((prevState) => !prevState)}
                  className='flex items-center justify-start p-2'>
                  {showReplies ? (
                    <>
                      <img
                        alt='upArrow'
                        className='w-4'
                        src={upArrow}
                      />
                    </>
                  ) : (
                    <>
                      <img
                        alt='downArrow'
                        className='w-4'
                        src={downArrow}
                      />
                    </>
                  )}
                  {
                    <p className='font-semibold text-sm'>
                      {comment?.replies?.length} Replies
                    </p>
                  }
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        )}
      </div>
      <SmallVersionCommentInputHandler
        showInput={showInput}
        setShowInput={setShowInput}
        commentSubmitHandler={commentSubmitHandler}
        catchComment={catchCommentHandler}
      />
      {showReplies && (
        <div className='ml-3 p-2 border border-l-gray-300'>
          {comment?.replies?.length > 0 &&
            comment?.replies?.map((comment) => (
              <Comments
                key={comment.id}
                handleInsertNode={handleInsertNode}
                comment={comment}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Comments;

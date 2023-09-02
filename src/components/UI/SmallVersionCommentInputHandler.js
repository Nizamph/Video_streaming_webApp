import { useState, useEffect } from 'react';
import displayPic from '../../youtubeIcons/propicRandom.png';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../reduxStore/commentSlice';
import useTraverseTree from '../../utils/usetraverseTree';
const SmallVersionCommentInputHandler = (props) => {
  const commentTextFromEdit = useSelector((store) => store.comment.commentText);

  const dispatch = useDispatch();
  const [disable, setDisable] = useState(true);
  const [isCommentFocussed, setIsCommentFocused] = useState(false);
  const [typeComment, setTypeComment] = useState('');
  useEffect(() => {
    if (typeComment.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [typeComment]);

  useEffect(() => {
    props.catchComment(typeComment);
  }, [typeComment]);

  useEffect(() => {
    if (commentTextFromEdit.length > 0) {
      setTypeComment(commentTextFromEdit);
    }
  }, [commentTextFromEdit]);

  const onChangeHandler = (e) => {
    setTypeComment(e.target.value);
  };

  return (
    <>
      {props.showInput && (
        <>
          <div className='flex justify-start pt-2 '>
            <img
              src={displayPic}
              alt='dp'
              className='w-10 rounded-full mr-2'
            />
            <input
              type='text'
              className={` border-b-2 pl-2  ${
                isCommentFocussed ? 'focus:outline-none' : ''
              } border-gray-400 w-[60%]`}
              placeholder='type a comment'
              onChange={onChangeHandler}
              onFocus={() => setIsCommentFocused(true)}
            />
          </div>
          <div className='w-4/6 flex justify-end'>
            <button
              type='button'
              className='p-1  text-xs px-3 m-2 bg-slate-200 rounded-full'
              onClick={() => props.setShowInput(false)}>
              cancel
            </button>
            <button
              type='button'
              disabled={disable}
              className={`p-1  text-xs px-3 m-2 ${
                disable ? 'bg-slate-100' : 'bg-blue-600 text-white'
              }  rounded-full`}
              onClick={props.commentSubmitHandler}>
              comment
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default SmallVersionCommentInputHandler;

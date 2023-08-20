import { useState, useEffect } from 'react';
import displayPic from '../youtubeIcons/blank-profile-picture-gec5b7f001_1280.png';

const CommentInputHandler = () => {
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
  return (
    <>
      <div className='flex justify-start'>
        <img
          src={displayPic}
          alt='dp'
          className='w-10 rounded-full mr-2'
        />
        <input
          type='text'
          className={` border-b-2 pl-2  ${
            isCommentFocussed ? 'focus:outline-none' : ''
          } border-gray-400 w-full`}
          placeholder='type a comment'
          onChange={(e) => setTypeComment(e.target.value)}
          onFocus={() => setIsCommentFocused(true)}
        />
      </div>
      {isCommentFocussed && (
        <div className='w-full flex justify-end'>
          <button
            type='button'
            className='p-2  text-sm px-3 m-2 bg-slate-200 rounded-full'
            onClick={() => setIsCommentFocused(false)}>
            cancel
          </button>
          <button
            type='button'
            disabled={disable}
            className={`p-2  text-sm px-3 m-2 ${
              disable ? 'bg-slate-100' : 'bg-blue-600 text-white'
            }  rounded-full`}>
            comment
          </button>
        </div>
      )}
    </>
  );
};

export default CommentInputHandler;

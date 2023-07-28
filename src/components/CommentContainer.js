import React, { useEffect } from 'react';
import Profile from '../youtubeIcons/profile-dp.jpg';
import { useState } from 'react';
import displayPic from '../youtubeIcons/blank-profile-picture-gec5b7f001_1280.png';
const commentData = [
  {
    name: 'Nizam',
    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
    replies: [
      {
        name: 'Nizam',
        comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
        replies: [
          {
            name: 'Nizam',
            comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
            replies: [],
          },
          {
            name: 'Nizam',
            comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
            replies: [],
          },
        ],
      },
      {
        name: 'Nizam',
        comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
        replies: [
          {
            name: 'Nizam',
            comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
            replies: [
              {
                name: 'Nizam',
                comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
                replies: [],
              },
            ],
          },
          {
            name: 'Nizam',
            comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Nizam',
    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
    replies: [
      {
        name: 'Nizam',
        comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
        replies: [],
      },
    ],
  },
  {
    name: 'Nizam',
    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
    replies: [
      {
        name: 'Nizam',
        comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
        replies: [
          {
            name: 'Nizam',
            comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
            replies: [
              {
                name: 'Nizam',
                comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
                replies: [
                  {
                    name: 'Nizam',
                    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
                    replies: [],
                  },
                  {
                    name: 'Nizam',
                    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Nizam',
    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
    replies: [],
  },
  {
    name: 'Nizam',
    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
    replies: [],
  },
  {
    name: 'Nizam',
    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
    replies: [],
  },
];

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

const SmallVersionCommentInputHandler = () => {
  const [disable, setDisable] = useState(true);
  const [isCommentFocussed, setIsCommentFocused] = useState(false);
  const [showNewInputField, setShowNewInputField] = useState(true);
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
      {showNewInputField && (
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
              onChange={(e) => setTypeComment(e.target.value)}
              onFocus={() => setIsCommentFocused(true)}
            />
          </div>

          <div className='w-4/6 flex justify-end'>
            <button
              type='button'
              className='p-1  text-xs px-3 m-2 bg-slate-200 rounded-full'
              onClick={() => setShowNewInputField(false)}>
              cancel
            </button>
            <button
              type='button'
              disabled={disable}
              className={`p-1  text-xs px-3 m-2 ${
                disable ? 'bg-slate-100' : 'bg-blue-600 text-white'
              }  rounded-full`}>
              comment
            </button>
          </div>
        </>
      )}
    </>
  );
};

const Comments = ({ comment, commentVisible }) => {
  console.log('comment reply', comment?.replies);
  const [showReplies, setShowReplies] = useState(false);
  const [showInputForReply, setShowInputForReply] = useState(false);
  console.log('showINputReply', showInputForReply);
  return (
    <div>
      <div className='shadow-lg'>
        <div className='flex gap-4 m-2 items-center'>
          <img
            alt='fuck'
            src={Profile}
            className='w-10 h-10 rounded-full'
          />
          <div>
            <p className='m-1 '>{comment?.name}</p>
            <p className='m-1'>{comment?.comment}</p>
          </div>
        </div>
        <div className='flex items-center justify-start'>
          <button
            className='m-2'
            onClick={() => {
              return setShowInputForReply(true);
            }}>
            reply
          </button>
          {comment?.replies?.length > 0 ? (
            <button onClick={() => setShowReplies((prevState) => !prevState)}>
              {showReplies ? 'close' : 'show'}
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
      {showInputForReply && <SmallVersionCommentInputHandler />}
      {showReplies && (
        <div className='ml-3 p-2 border border-l-black'>
          {comment?.replies?.length > 0 &&
            comment?.replies?.map((comment) => <Comments comment={comment} />)}
        </div>
      )}
    </div>
  );
};

const CommentList = ({ commentData }) => {
  return commentData.map((comment, i) => (
    <>
      <Comments
        key={i}
        comment={comment}
      />
    </>
  ));
};

const CommentContainer = () => {
  const [commentDataList, setCommentData] = useState(commentData);
  return (
    <div className='w-full pl-2 flex flex-col justify-center'>
      <div className='font-bold p-1'>Comments</div>
      <CommentInputHandler />
      <CommentList commentData={commentDataList} />
    </div>
  );
};

export default CommentContainer;

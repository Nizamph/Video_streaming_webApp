import React from 'react';
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

const Comments = ({ comment, commentVisible }) => {
  return (
    <>
      <div className='shadow-lg'>
        <div className='flex gap-4 m-2 items-center'>
          <img
            alt='fuck'
            src={Profile}
            className='w-10 h-10 rounded-full'
          />
          <div>
            <p className='m-1 '>{comment.name}</p>
            <p className='m-1'>{comment.comment}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const CommentList = ({ commentData }) => {
  return commentData.map((comment, i) => (
    <>
      <Comments
        key={i}
        comment={comment}
      />
      <div className='ml-3 p-2 border border-l-black'>
        <CommentList
          key={i}
          commentData={comment.replies}
        />
      </div>
    </>
  ));
};
const CommentContainer = () => {
  const [commentDataList, setCommentData] = useState(commentData);

  return (
    <div className='w-full pl-2'>
      <div className='font-bold p-1'>Comments</div>
      <div className='flex justify-start'>
        <img
          src={displayPic}
          alt='dp'
          className='w-10 rounded-full mr-2'
        />
        <input
          type='text'
          className=' border-b-2 pl-2 border-gray-400 w-2/4'
          placeholder='type a comment'
        />
      </div>
      <CommentList commentData={commentDataList} />
    </div>
  );
};

export default CommentContainer;

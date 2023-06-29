import React from 'react';
import Profile from '../youtubeIcons/profile-dp.jpg';

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

const Comments = (comment) => {
  console.log('commment', comment);
  return (
    <div className='flex gap-4 m-2 items-center shadow-lg'>
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
  );
};

const CommentList = ({ commentData }) => {
  return commentData.map((comment) => (
    <>
      <Comments {...comment} />
      <div className='ml-3 p-2 border border-l-black'>
        <CommentList commentData={comment.replies} />
      </div>
    </>
  ));
};
const CommentContainer = () => {
  return (
    <div className='w-4/6'>
      <div>Comments</div>
      <CommentList commentData={commentData} />
    </div>
  );
};

export default CommentContainer;

import React from 'react';
import ChatList from './ChatList';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessages } from '../../reduxStore/chatSlice';
import proPic from '../../youtubeIcons/propicRandom.png';
import displayPic from '../../youtubeIcons/profile-dp.jpg';
import imogi from '../../youtubeIcons/imogi.png';
import superChat from '../../youtubeIcons/superchat.png';
import send from '../../youtubeIcons/send.png';
const LiveChat = () => {
  const [liveMessages, setliveMessages] = useState('');
  const [showLiveChat, setShowLiveChat] = useState(true);
  const dispatch = useDispatch();

  console.log('live message', liveMessages);
  return (
    <div className='flex flex-col justify-center items-start w-full md:w-96'>
      <div className='font-semibold border w-full md:w-11/12 flex justify-start items-center p-1 mt-4 rounded-t-lg border-slate-400'>
        Live Chat
      </div>
      <div
        className={
          showLiveChat
            ? `bg-gray-100 border w-full md:w-11/12 border-black h-[330px] max-h-[515px] relative overflow-y-scroll flex flex-col-reverse`
            : `hidden`
        }>
        <ChatList />
      </div>
      <form
        className='pt-2 flex flex-col justify-center border border-black w-full md:w-11/12 p-1 rounded-b-lg'
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessages({
              name: 'User',
              message: liveMessages,
              image: proPic,
            })
          );
          setliveMessages('');
        }}>
        {showLiveChat && (
          <>
            <div className='flex flex-col md:flex-row gap-2 items-start mt-4'>
              <div>
                <img
                  alt='proPic'
                  src={proPic}
                  className='w-7 rounded-full'
                />
              </div>
              <div className='md:w-64'>
                <p className='font-semibold'>User</p>
                <input
                  type='text'
                  onChange={(e) => setliveMessages(e.target.value)}
                  value={liveMessages}
                  className='border-b border-gray-400 p-1 w-full h-6 '
                  placeholder='Type your message'
                />
              </div>
            </div>
            <div className='flex justify-between items-center p-3'>
              <div className='flex gap-2'>
                <button>
                  <img
                    src={imogi}
                    className='w-5'
                  />
                </button>
                <button>
                  <img
                    src={superChat}
                    className='w-7'
                  />
                </button>
              </div>
              <div className='flex gap-2'>
                <p>0/200</p>
                <button>
                  <img
                    src={send}
                    className='w-5'
                  />
                </button>
              </div>
            </div>
          </>
        )}

        <button
          className='hover:bg-gray-300 p-1 rounded-full font-semibold'
          onClick={() => setShowLiveChat((prevState) => !prevState)}>
          {showLiveChat ? 'Hide' : 'Show Chat'}
        </button>
      </form>
    </div>
  );
};

export default LiveChat;

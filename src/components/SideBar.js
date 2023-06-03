import React from 'react';
import HomeIcon from '../youtubeIcons/home.svg';
import Subscription from '../youtubeIcons/subscriptions.svg';
import history from '../youtubeIcons/history-line-icon.svg';
import shorts from '../youtubeIcons/youtube-shorts-logo-15253.svg';
import library from '../youtubeIcons/library.svg';
import yourVideos from '../youtubeIcons/your_video.svg';
import watchLater from '../youtubeIcons/watch-later.svg';
import yourClips from '../youtubeIcons/scissors-icon.svg';
import showMore from '../youtubeIcons/show_more.svg';

const SideBar = () => {
  return (
    <div className='flex flex-col pr-3 max-h-[89vh] overflow-y-scroll scrollbar-none hover:scrollbar-thin scrollbar-thumb-gray-300 '>
      <div className=''>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={HomeIcon}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Home</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={shorts}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Shorts</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Subscriptions</p>
        </div>
      </div>
      <div className='pt-2 mt-2 border-t-2'>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={library}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Library</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.2rem] ml-3 '
            src={history}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>History</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.3rem] ml-3 '
            src={yourVideos}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Your Videos</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={watchLater}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Watch Later</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1rem] ml-3 '
            src={yourClips}
            alt='Home Icon'
          />
          <p className='font-semibold ml-6 text-sm  '>Your clips</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[0.4rem] ml-4 '
            src={showMore}
            alt='Home Icon'
          />
          <button className='font-semibold ml-7 text-sm  '>Show more</button>
        </div>
      </div>
      <div className='pt-2 mt-3 border-t-2'>
        <div className=' font-semibold text-base p-1 ml-2'>Subscriptions</div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Subscriptions</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Subscriptions</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Subscriptions</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Subscriptions</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Subscriptions</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Subscriptions</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <button className='font-semibold ml-5 text-sm  '>show more</button>
        </div>
      </div>
      <div className='pt-2 mt-3 border-t-2'>
        <div className=' font-semibold text-base p-1 ml-2'>Explore</div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Trending</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Shopping</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Music</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Film</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Live</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Gaming</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>News</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Sport</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Learning</p>
        </div>
        <div className='w-44 h-9 flex items-center rounded-md hover:bg-gray-100'>
          <img
            className='h-[1.4rem] ml-3 '
            src={Subscription}
            alt='Home Icon'
          />
          <p className='font-semibold ml-5 text-sm  '>Fashion & beauty</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

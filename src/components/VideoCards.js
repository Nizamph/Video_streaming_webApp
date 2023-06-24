import { useTimeAgo } from '../utils/useTimeAgo';
import Profile from '../youtubeIcons/profile-dp.jpg';
import { useSelector } from 'react-redux';
const VideoCards = ({ videos }) => {
  const apiDate = videos?.snippet?.publishedAt;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const videoTimeAgo = useTimeAgo(apiDate);
  return (
    <div
      className={`${
        isMenuOpen ? 'w-[21rem]' : 'w-72'
      } lg: grid grid-flow-row object-fill items-center justify-center`}>
      <img
        src={videos?.snippet?.thumbnails?.medium?.url}
        className='h-48 rounded-lg w-full'
        alt='Video thumbnail'
      />
      <div className='flex'>
        <div className='pr-3 w-1/3'>
          <img
            src={Profile}
            className='rounded-full h-10 object-fill  mt-3'
            alt='Profile'
          />
        </div>
        <div className='flex flex-col'>
          <p className='text-md font-bold p-2'>
            {videos?.snippet?.localized?.title}
          </p>
          <p className='text-sm'>{videos?.snippet?.channelTitle}</p>
          <div className='text-sm flex '>
            <div>{videos?.statistics?.viewCount} views</div>
            <div className='w-1 h-1 mt-2 m-1 bg-slate-900 rounded-full'></div>
            <div>
              {videoTimeAgo.seconds > 0
                ? `${videoTimeAgo.seconds} second${
                    videoTimeAgo.seconds !== 1 ? 's' : ''
                  } ago`
                : videoTimeAgo.minutes > 0
                ? `${videoTimeAgo.minutes} minute${
                    videoTimeAgo.minutes !== 1 ? 's' : ''
                  } ago`
                : videoTimeAgo.hours > 0
                ? `${videoTimeAgo.hours} hour${
                    videoTimeAgo.hours !== 1 ? 's' : ''
                  } ago`
                : videoTimeAgo.days > 0
                ? `${videoTimeAgo.days} day${
                    videoTimeAgo.days !== 1 ? 's' : ''
                  } ago`
                : videoTimeAgo.months > 0
                ? `${videoTimeAgo.months} month${
                    videoTimeAgo.months !== 1 ? 's' : ''
                  } ago`
                : `${videoTimeAgo.years} year${
                    videoTimeAgo.years !== 1 ? 's' : ''
                  } ago`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;

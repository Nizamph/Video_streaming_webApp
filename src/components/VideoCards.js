import { useTimeAgo } from '../utils/useTimeAgo';
import dummyDp from '../youtubeIcons/blank-profile-picture-gec5b7f001_1280.png';
import { useSelector } from 'react-redux';
import useCountAbbrevation from '../utils/useCountAbbrevation';
import useGetChannelDetails from '../utils/useGetChannelDetails';
const VideoCards = ({ videos }) => {
  const apiDate = videos?.snippet?.publishedAt;
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { viewCount } = videos?.statistics;
  const viewCountAbbrevation = useCountAbbrevation(viewCount);
  const timeAbbrevation = useTimeAgo(apiDate);
  const { channelId } = videos?.snippet;
  console.log('channelId from videoCards', channelId);
  const { channelDp } = useGetChannelDetails(channelId);
  console.log('channel Dp from video', channelDp);
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
            src={channelDp}
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
            <div>{viewCountAbbrevation} views</div>
            <div className='w-1 h-1 mt-2 m-1 bg-slate-900 rounded-full'></div>
            <div>{timeAbbrevation}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCards;

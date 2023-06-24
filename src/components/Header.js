import hamburgerManu from '../youtubeIcons/hamburger-menu.svg';
import Youtube from '../youtubeIcons/youtube-logo.svg';
import Create from '../youtubeIcons/upload.svg';
import notification from '../youtubeIcons/notifications.svg';
import Profile from '../youtubeIcons/profile-dp.jpg';
import VoiceIcon from '../youtubeIcons/voice-search-icon.svg';
import Search from '../youtubeIcons/search.svg';
import { useDispatch } from 'react-redux';
import { menuToggle } from '../reduxStore/appSlice';
import { useEffect, useState } from 'react';
const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestionList, setSuggestionList] = useState([]);
  const showSidebarHandler = () => {
    dispatch(menuToggle());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        searchSuggestions();
      } catch (err) {
        console.log(err);
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchSuggestions = async () => {
    const data = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`
    );
    const searchSuggestions = await data.json();
    setSuggestionList(searchSuggestions[1]);
  };
  return (
    <div className='py-2 grid grid-flow-col shadow-md items-center px-5'>
      <div className='col-span-1 flex items-center'>
        <button onClick={showSidebarHandler}>
          <img
            src={hamburgerManu}
            className='h-6'
            alt='humberger Menu'
          />
        </button>
        <img
          src={Youtube}
          className='h-5 ml-5'
          alt='youtube'
        />
      </div>
      <div>
        <div className='flex col-span-8 justify-center items-center mr-7'>
          <input
            className='w-4/5 h-9 border pl-3 p-2 border-gray-300 rounded-l-full'
            type='text'
            placeholder='Search..'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className='p-[0.30rem] px-4 border border-gray-200 mr-2 rounded-r-full '>
            <img
              src={Search}
              className='h-6'
            />
          </button>
          <button className='p-2 bg-gray-100 rounded-full hover:bg-gray-200 mr-7'>
            <img
              src={VoiceIcon}
              className='h-5'
            />
          </button>
        </div>
        <div>
          {suggestionList.length > 0 && (
            <div className=' flex-col items-center fixed bg-white m-2 p-2 px-3 w-[32.55%] rounded-lg'>
              {suggestionList?.map((suggestion) => (
                <div className='items-center flex my-1 gap-2'>
                  <img
                    src={Search}
                    className='h-5'
                  />
                  <p className='font-semibold'>{suggestion}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='col-span-1 flex justify-evenly'>
        <img
          src={Create}
          className='h-7'
          alt='create video'
        />
        <img
          src={notification}
          className='h-7'
          alt='notification'
        />
        <img
          src={Profile}
          className='h-7 rounded-full'
          alt='dp'
        />
      </div>
    </div>
  );
};

export default Header;

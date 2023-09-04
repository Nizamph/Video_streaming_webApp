import JavascriptIcon from '../youtubeIcons/icons8-javascript-50.png';
import vuejsIcon from '../youtubeIcons/vue.js icon.png';
import reactIcon from '../youtubeIcons/ract icon.png';
import htmlLogo from '../youtubeIcons/html_html_logo.svg';
import CssLogo from '../youtubeIcons/cssIcon.png';
import NodeLogo from '../youtubeIcons/node.js icon.png';
import expressLogo from '../youtubeIcons/express.js icon.png';
import mongoDb from '../youtubeIcons/mongodbIcon.png';
import Home from '../youtubeIcons/home.svg';
import AngularIcon from '../youtubeIcons/angularIcon.png';
import Trending from '../youtubeIcons/trendingIcon.png';
import music from '../youtubeIcons/musicIcon.png';
import films from '../youtubeIcons/movieIcon.png';
import liveIcon from '../youtubeIcons/LiveIcon.png';
import sport from '../youtubeIcons/sportIcon.png';
import fashion from '../youtubeIcons/fashionIcon.png';
import news from '../youtubeIcons/newsIcon.png';
import games from '../youtubeIcons/gamesIcon.png';
import proPic1 from '../youtubeIcons/proPic1.jpg';
import proPic2 from '../youtubeIcons/proPic2.jpg';
import proPic3 from '../youtubeIcons/proPic3.jpg';
import proPic4 from '../youtubeIcons/proPic4.jpg';
import proPic5 from '../youtubeIcons/propic5.jpg';
import proPic6 from '../youtubeIcons/proPic6.jpg';
import proPic7 from '../youtubeIcons/proPic7.jpg';
import proPic8 from '../youtubeIcons/proPic8.jpg';
import proPic9 from '../youtubeIcons/proPic9.jpg';
import proPic10 from '../youtubeIcons/proPic10.jpg';
import proPic11 from '../youtubeIcons/proPic11.jpg';
import proPic12 from '../youtubeIcons/proPic12.jpg';
import proPic13 from '../youtubeIcons/proPic13.jpg';
import proPic14 from '../youtubeIcons/proPic14.jpg';
import proPic15 from '../youtubeIcons/proPic15.jpg';
import proPic16 from '../youtubeIcons/proPic16.jpg';
import proPic17 from '../youtubeIcons/proPic17.jpg';
import proPic18 from '../youtubeIcons/proPic18.jpg';
import proPic19 from '../youtubeIcons/proPic19.jpg';
import proPic20 from '../youtubeIcons/proPic20.jpg';
export const GOOGLE_API_KEY = '&key=AIzaSyC5l6aEWGAJHz1Efsi7m9bQ7Kskvyg4WmA';
// AIzaSyAmX3J37XrbhTGDKi1LSvFwOsmVJ9Y_jrg
export const REGION_CODE = '&regionCode=IN';
export const NUMBER_OF_VIDEOS = 10;
export const GET_MOST_POPULAR_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${NUMBER_OF_VIDEOS}`;
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=
export const SEARCH_VIDEOS =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=';
export const GET_SUGGESTION_LIST =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q';

export const SINGLE_VIDEO_DETAILS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`;

export const GET_CATEGORY_VIDEOS = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${NUMBER_OF_VIDEOS}`;

export const RELATED_VIDEOS =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=';
export const commentData = [
  {
    id: '1',
    name: 'John',
    url: proPic4,
    comment: 'Nice video👍 ',
    replies: [
      {
        id: '2',
        name: 'chris',
        url: proPic2,
        comment: 'cant agree more',
        replies: [
          {
            id: '3',
            name: 'jasir',
            url: proPic3,
            comment: 'chris have you seen this before',
            replies: [],
          },
          {
            id: '4',
            name: 'luther',
            url: proPic1,
            comment: 'chris make a video',
            replies: [],
          },
        ],
      },
      {
        id: '5',
        name: 'rohan',
        url: proPic5,
        comment: 'fabulous',
        replies: [
          {
            id: '6',
            name: 'zuan',
            url: proPic6,
            comment: 'i dont think so',
            replies: [
              {
                id: '7',
                name: 'Mubashir',
                url: proPic7,
                comment: 'then go ahead and dislike it',
                replies: [],
              },
            ],
          },
          {
            id: '8',
            name: 'sabir',
            url: proPic8,
            comment: 'informative one✅',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: '9',
    name: 'rayman',
    url: proPic9,
    comment: 'superb😍',
    replies: [
      {
        id: '10',
        name: 'Mubaz',
        url: proPic10,
        comment: 'what superb😍',
        replies: [],
      },
    ],
  },
  {
    id: '11',
    name: 'Nevlie',
    url: proPic11,
    comment: 'you should have done this in a better way',
    replies: [
      {
        id: '12',
        name: 'Jazz',
        url: proPic12,
        comment: 'he done pretty well ',
        replies: [
          {
            id: '13',
            name: 'mazz',
            url: proPic13,
            comment: 'no i dont think so',
            replies: [
              {
                id: '14',
                name: 'Mubaz',
                url: proPic10,
                comment: 'who are you😒 ',
                replies: [
                  {
                    id: '15',
                    name: 'Nevlie',
                    ur: proPic11,
                    comment: 'Nevlie once again',
                    replies: [],
                  },
                  {
                    id: '16',
                    name: 'jifri',
                    url: proPic16,
                    comment: 'jifri here🙋',
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
    id: '17',
    name: 'Jack',
    url: proPic17,
    comment: 'fantastic🚀',
    replies: [],
  },
  {
    id: '18',
    name: 'Ezra Rico',
    url: proPic18,
    comment: 'enjoyy',
    replies: [],
  },
  {
    id: '19',
    name: 'Lane',
    url: proPic19,
    comment: 'hello everyone',
    replies: [
      {
        id: '20',
        name: 'Ivan',
        url: proPic20,
        comment: 'haii everyone',
        replies: [],
      },
    ],
  },
];

export let BUTTON_NAMES = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Investement' },
  { id: 3, name: 'Music' },
  { id: 4, name: 'Mixes' },
  { id: 5, name: 'BlockChain' },
  { id: 6, name: 'Camera' },
  { id: 7, name: 'Photography' },
  { id: 8, name: 'Malayalam Cinema' },
  { id: 9, name: 'Software Engineer' },
  { id: 10, name: 'Web3' },
  { id: 11, name: 'Crypto' },
  { id: 12, name: 'Metaverse' },
];

export const sideBarMenus = [
  {
    id: 1,
    name: 'Home',
    url: Home,
  },
  {
    id: 2,
    name: 'Javascript',
    url: JavascriptIcon,
  },
  {
    id: 3,
    name: 'HTML',
    url: htmlLogo,
  },
  {
    id: 4,
    name: 'CSS',
    url: CssLogo,
  },
  {
    id: 5,
    name: 'Vue.js',
    url: vuejsIcon,
  },
  {
    id: 6,
    name: 'React.js',
    url: reactIcon,
  },
  {
    id: 7,
    name: 'Angular.js',
    url: AngularIcon,
  },
  {
    id: 8,
    name: 'Node.js',
    url: NodeLogo,
  },
  {
    id: 9,
    name: 'Express.js',
    url: expressLogo,
  },
  {
    id: 10,
    name: 'MongoDB',
    url: mongoDb,
  },
  {
    id: 11,
    name: 'Explore',
    url: null,
  },
  {
    id: 12,
    name: 'Trending',
    url: Trending,
  },
  {
    id: 13,
    name: 'Music',
    url: music,
  },
  {
    id: 14,
    name: 'Live',
    url: liveIcon,
  },
  {
    id: 15,
    name: 'Films',
    url: films,
  },
  {
    id: 16,
    name: 'News',
    url: news,
  },
  {
    id: 17,
    name: 'sport',
    url: sport,
  },
];

// export const sideBarMenuExplore = [

// ];

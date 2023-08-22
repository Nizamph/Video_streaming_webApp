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
export const GOOGLE_API_KEY = '&key=AIzaSyC5l6aEWGAJHz1Efsi7m9bQ7Kskvyg4WmA';
// AIzaSyAmX3J37XrbhTGDKi1LSvFwOsmVJ9Y_jrg
export const REGION_CODE = '&regionCode=IN';
export const NUMBER_OF_VIDEOS = 10;
export const GET_MOST_POPULAR_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${NUMBER_OF_VIDEOS}`;
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=

export const GET_SUGGESTION_LIST =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q';

export const SINGLE_VIDEO_DETAILS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`;

export const GET_CATEGORY_VIDEOS = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${NUMBER_OF_VIDEOS}`;

export const RELATED_VIDEOS =
  'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=';
export const commentData = [
  {
    id: '1',
    name: 'Nizam',
    comment: 'lorem Ipsum dhkkg ',
    replies: [
      {
        id: '2',
        name: 'suhai',
        comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
        replies: [
          {
            id: '3',
            name: 'jasir',
            comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
            replies: [],
          },
          {
            id: '4',
            name: 'jimbru',
            comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
            replies: [],
          },
        ],
      },
      {
        id: '5',
        name: 'Junais',
        comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
        replies: [
          {
            id: '6',
            name: 'jalal',
            comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
            replies: [
              {
                id: '7',
                name: 'Mubashir',
                comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
                replies: [],
              },
            ],
          },
          {
            id: '8',
            name: 'ithifaq',
            comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: '9',
    name: 'siraj',
    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
    replies: [
      {
        id: '10',
        name: 'mubaz',
        comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
        replies: [],
      },
    ],
  },
  {
    id: '11',
    name: 'rajkamal',
    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
    replies: [
      {
        id: '12',
        name: 'jazz',
        comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
        replies: [
          {
            id: '13',
            name: 'mazz',
            comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
            replies: [
              {
                id: '14',
                name: 'fazz',
                comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
                replies: [
                  {
                    id: '15',
                    name: 'ramlal',
                    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
                    replies: [],
                  },
                  {
                    id: '16',
                    name: 'jifri',
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
    id: '17',
    name: 'rifahath',
    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
    replies: [],
  },
  {
    id: '18',
    name: 'fuckrudheen',
    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
    replies: [],
  },
  {
    id: '19',
    name: 'suckiyaan',
    comment: 'lorem Ipsum dhkkg dkfdlf mdkfj',
    replies: [],
  },
];

export let BUTTON_NAMES = [
  'All',
  'Gaming',
  'Music',
  'Mixes',
  'React',
  'Cinema',
  'Comedy',
  'Cricket',
  'Film',
  'Computer programming',
  'Namaste React',
  'Namaste Javascript',
];

export const sideBarMenus = [
  {
    name: 'Home',
    url: Home,
  },
  {
    name: 'Javascript',
    url: JavascriptIcon,
  },
  {
    name: 'HTML',
    url: htmlLogo,
  },
  {
    name: 'CSS',
    url: CssLogo,
  },
  {
    name: 'Vue.js',
    url: vuejsIcon,
  },
  {
    name: 'React.js',
    url: reactIcon,
  },
  {
    name: 'Angular.js',
    url: AngularIcon,
  },
  {
    name: 'Node.js',
    url: NodeLogo,
  },
  {
    name: 'Express.js',
    url: expressLogo,
  },
  {
    name: 'MongoDB',
    url: mongoDb,
  },
  {
    name: 'Explore',
    url: null,
  },
  {
    name: 'Trending',
    url: Trending,
  },
  {
    name: 'Music',
    url: music,
  },
  {
    name: 'Live',
    url: liveIcon,
  },
  {
    name: 'Films',
    url: films,
  },
  {
    name: 'News',
    url: news,
  },
  {
    name: 'sport',
    url: sport,
  },
];

// export const sideBarMenuExplore = [

// ];

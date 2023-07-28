export const GOOGLE_API_KEY = '&key=AIzaSyAmX3J37XrbhTGDKi1LSvFwOsmVJ9Y_jrg';
// AIzaSyAmX3J37XrbhTGDKi1LSvFwOsmVJ9Y_jrg
export const REGION_CODE = '&regionCode=IN';

export const GET_MOST_POPULAR_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=`;

export const GET_SUGGESTION_LIST =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q';

export const SINGLE_VIDEO_DETAILS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`;

export const RELATED_VIDEOS =
  'https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=';

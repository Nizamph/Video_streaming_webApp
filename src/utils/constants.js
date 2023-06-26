const GOOGLE_API_KEY = 'AIzaSyD7_w0vwyMYwGSioKIJMhUnFxXDs5Pfh1c';

export const GET_MOST_POPULAR_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const GET_SUGGESTION_LIST =
  'http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q';

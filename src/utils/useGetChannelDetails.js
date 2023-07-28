import React from 'react';
import { useEffect, useState } from 'react';
import { GOOGLE_API_KEY } from './constants';
import { useSelector } from 'react-redux';
const useGetChannelDetails = (channelId) => {
  console.log('channelid', channelId);
  const [videoDetails, setDetails] = useState({});
  const search_query = useSelector((store) => store.search.searchContent);
  console.log('search query is here', search_query);
  useEffect(() => {
    console.log('useEffect is running');
    fetchChannelDetails();
  }, [search_query, channelId]);

  const fetchChannelDetails = async () => {
    if (channelId) {
      console.log('fetching channel detials');
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}${GOOGLE_API_KEY}`
      );
      const details = await res.json();
      console.log('detials from channelDetails', details);
      console.log('dp details', details?.items[0]?.snippet?.thumbnails?.medium);
      setDetails({
        channelDp: details?.items[0]?.snippet?.thumbnails?.medium?.url,
        id: details?.items[0]?.id,
        title: details?.items[0]?.snippet?.title,
        description: details?.items[0]?.snippet?.description,
      });
    }
  };

  return videoDetails;
};

export default useGetChannelDetails;

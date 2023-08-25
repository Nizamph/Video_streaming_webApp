import React from 'react';
import { useEffect, useState } from 'react';
import { GOOGLE_API_KEY } from './constants';
import { useSelector } from 'react-redux';
const useGetChannelDetails = (channelId) => {
  const [videoDetails, setDetails] = useState({});
  const search_query = useSelector((store) => store.search.searchContent);
  useEffect(() => {
    fetchChannelDetails();
  }, [channelId]);

  const fetchChannelDetails = async () => {
    if (channelId) {
      const res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}${GOOGLE_API_KEY}`
      );
      const details = await res.json();

      setDetails({
        channelDp: details?.items[0]?.snippet?.thumbnails?.medium?.url,
        id: details?.items[0]?.id,
        title: details?.items[0]?.snippet?.title,
        description: details?.items[0]?.snippet?.description,
        subscriberCount: details?.items[0].statistics.subscriberCount,
      });
    }
  };

  return videoDetails;
};

export default useGetChannelDetails;

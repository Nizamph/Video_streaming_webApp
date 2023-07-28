import React from 'react';
import { GOOGLE_API_KEY, SINGLE_VIDEO_DETAILS } from './constants';
import { useState, useEffect } from 'react';
const useGetVideoDetails = (videoId) => {
  const [singleVideoDetails, setSingleVideoDetails] = useState([]);
  useEffect(() => {
    getVideoDetails();
  }, [videoId]);
  const getVideoDetails = async () => {
    let res = await fetch(SINGLE_VIDEO_DETAILS + videoId + GOOGLE_API_KEY);
    let videoDetails = await res.json();
    console.log('details', videoDetails);
    setSingleVideoDetails(videoDetails.items);
  };

  return singleVideoDetails;
};

export default useGetVideoDetails;

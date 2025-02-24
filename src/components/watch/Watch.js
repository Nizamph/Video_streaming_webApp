import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../reduxStore/appSlice";
import CommentContainer from "../comments/CommentContainer";
import LiveChat from "../liveChat/LiveChat";
import {
  RELATED_VIDEOS,
  SINGLE_VIDEO_DETAILS,
  REGION_CODE,
} from "../../utils/constants";
import { GOOGLE_API_KEY } from "../../utils/constants";
import displayPic from "../../youtubeIcons/blank-profile-picture-gec5b7f001_1280.png";
import Like from "../../youtubeIcons/like.png";
import dislike from "../../youtubeIcons/dislike.png";
import shareIcon from "../../youtubeIcons/shareIcon.png";
import downloadIcon from "../../youtubeIcons/downloadIcon.png";
import RelatedVideoList from "../videos/RelatedVideoList";
import useGetChannelDetails from "../../utils/useGetChannelDetails";
import useCountAbbrevation from "../../utils/useCountAbbrevation";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get("v");
  const [showDescription, setShowDesription] = useState(false);
  const [singleVideoDetails, setSingleVideoDetails] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  useEffect(() => {
    getVideoDetails();
  }, [videoId]);

  const getVideoDetails = async () => {
    let res = await fetch(SINGLE_VIDEO_DETAILS + videoId + GOOGLE_API_KEY);
    let videoDetails = await res.json();
    setSingleVideoDetails(videoDetails.items);
  };

  const abbrevatedLikeCount = useCountAbbrevation(
    singleVideoDetails[0]?.statistics?.likeCount
  );

  let filteredDescription = singleVideoDetails[0]?.snippet?.description
    .split(" ")
    .slice(0, 30);

  useEffect(() => {
    try {
      relatedVideosList();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const relatedVideosList = async () => {
    let res = await fetch(RELATED_VIDEOS + 10 + REGION_CODE + GOOGLE_API_KEY);
    const relatedVideos = await res.json();
    setRelatedVideos(relatedVideos.items);
  };

  const { channelDp, subscriberCount } = useGetChannelDetails(
    singleVideoDetails[0]?.snippet?.channelId
  );

  const abbrevatedSubscribeCount = useCountAbbrevation(subscriberCount);

  return (
    <div className="flex ml-8 flex-col md:flex-row gap-8 p-6 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
      {/* Video Player and Details Section */}
      <div className="flex flex-col w-full md:w-3/4 gap-6">
        {/* Video Player */}
        <div
          className="relative overflow-hidden rounded-xl shadow-2xl"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Title */}
        <h1 className="text-2xl font-bold text-white">
          {singleVideoDetails[0]?.snippet?.localized?.title}
        </h1>

        {/* Channel Info and Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-4">
            <img
              src={channelDp || displayPic}
              alt="channel-dp"
              className="w-12 h-12 rounded-full border-2 border-blue-500"
            />
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-white">
                {singleVideoDetails[0]?.snippet?.channelTitle}
              </p>
              <p className="text-sm text-gray-400">
                {abbrevatedSubscribeCount} subscribers
              </p>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>

          {/* Like, Share, Download Buttons */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-gray-800 rounded-full p-1">
              <button className="flex items-center gap-2 px-3 py-1">
                <img src={Like} alt="like" className="w-5" />
                <span className="text-sm text-white">
                  {abbrevatedLikeCount}
                </span>
              </button>
              <span className="w-px h-6 bg-gray-600"></span>
              <button className="px-3 py-1">
                <img src={dislike} alt="dislike" className="w-5" />
              </button>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              <img src={shareIcon} alt="share" className="w-4" />
              <span className="text-sm">Share</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
              <img src={downloadIcon} alt="download" className="w-4" />
              <span className="text-sm">Download</span>
            </button>
          </div>
        </div>

        {/* Video Description */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-white">
            {filteredDescription?.join(" ")}
            {showDescription && singleVideoDetails[0]?.snippet?.description}
          </p>
          <button
            className="mt-2 text-blue-400 hover:text-blue-300 transition-colors"
            onClick={() => setShowDesription((prevState) => !prevState)}
          >
            {showDescription ? "Show Less" : "Show More"}
          </button>
        </div>

        {/* Comments Section */}
        <CommentContainer />
      </div>

      {/* Live Chat and Recommended Videos Section */}
      <div className="flex flex-col w-full md:w-1/4 gap-6">
        <LiveChat />
        <h2 className="text-xl font-bold text-white">Recommended Videos</h2>
        <RelatedVideoList relatedVideos={relatedVideos} />
      </div>
    </div>
  );
};

export default Watch;

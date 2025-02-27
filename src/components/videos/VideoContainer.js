import React from "react";
import VideoList from "./VideoList";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../reduxStore/appSlice";
import { useEffect } from "react";

const VideoContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="ml-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      <VideoList />
    </div>
  );
};

export default VideoContainer;

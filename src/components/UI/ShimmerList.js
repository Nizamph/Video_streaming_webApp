import React from 'react';
import Shimmer from './Shimmer';
import { useSelector } from 'react-redux';
const ShimmerList = (number) => {
  return (
    <>
      {Array(number)
        .fill('')
        .map((shmr, i) => (
          <Shimmer key={i} />
        ))}
    </>
  );
};

export default ShimmerList;

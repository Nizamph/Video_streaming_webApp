import React from 'react';
import { useEffect, useState } from 'react';
export const useTimeAgo = (apiTimeData) => {
  const [videoTimeAgo, setvideoTimeAgo] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    months: 0,
    years: 0,
  });
  useEffect(() => {
    const publishedDate = new Date(apiTimeData);
    const currentDate = new Date();
    const timeDifference = currentDate - publishedDate;

    const millisecondsPerSecond = 1000;
    const millisecondsPerMinute = millisecondsPerSecond * 60;
    const millisecondsPerHour = millisecondsPerMinute * 60;
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const millisecondsPerMonth = 30 * millisecondsPerDay; // Approximate value for months
    const millisecondsPerYear = 365 * millisecondsPerDay; // Approximate value for years

    if (timeDifference < millisecondsPerMinute) {
      const seconds = Math.floor(timeDifference / millisecondsPerSecond);
      setvideoTimeAgo({ ...videoTimeAgo, seconds });
    } else if (timeDifference < millisecondsPerHour) {
      const minutes = Math.floor(timeDifference / millisecondsPerMinute);
      setvideoTimeAgo({ ...videoTimeAgo, minutes });
    } else if (timeDifference < millisecondsPerDay) {
      const hours = Math.floor(timeDifference / millisecondsPerHour);
      setvideoTimeAgo({ ...videoTimeAgo, hours });
    } else if (timeDifference < millisecondsPerMonth) {
      const days = Math.floor(timeDifference / millisecondsPerDay);
      setvideoTimeAgo({ ...videoTimeAgo, days });
    } else if (timeDifference < millisecondsPerYear) {
      const months = Math.floor(timeDifference / millisecondsPerMonth);
      setvideoTimeAgo({ ...videoTimeAgo, months });
    } else {
      const years = Math.floor(timeDifference / millisecondsPerYear);
      setvideoTimeAgo({ ...videoTimeAgo, years });
    }
  }, [apiTimeData]);
  let timeAbbrevation =
    videoTimeAgo?.seconds > 0
      ? `${videoTimeAgo.seconds} second${
          videoTimeAgo.seconds !== 1 ? 's' : ''
        } ago`
      : videoTimeAgo.minutes > 0
      ? `${videoTimeAgo.minutes} minute${
          videoTimeAgo.minutes !== 1 ? 's' : ''
        } ago`
      : videoTimeAgo.hours > 0
      ? `${videoTimeAgo.hours} hour${videoTimeAgo.hours !== 1 ? 's' : ''} ago`
      : videoTimeAgo.days > 0
      ? `${videoTimeAgo.days} day${videoTimeAgo.days !== 1 ? 's' : ''} ago`
      : videoTimeAgo.months > 0
      ? `${videoTimeAgo.months} month${
          videoTimeAgo.months !== 1 ? 's' : ''
        } ago`
      : `${videoTimeAgo.years} year${videoTimeAgo.years !== 1 ? 's' : ''} ago`;
  return timeAbbrevation;
};

import React, { useEffect, useState } from 'react';
import SearchCard from './SearchCard';
import { useSelector } from 'react-redux';
import { GOOGLE_API_KEY } from '../utils/constants';
const SearchCardList = () => {
  const searchQuery = useSelector((store) => store.search.searchContent);
  console.log('search query from card', searchQuery);
  const [searchContents, setSearchContents] = useState([]);
  useEffect(() => {
    try {
      getSearchVidoes();
    } catch (err) {
      console.log(err);
    }
  }, [searchQuery]);

  const getSearchVidoes = async () => {
    if (searchQuery !== '') {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchQuery}&type=video&key=${GOOGLE_API_KEY}`
      );
      const searchVideos = await res.json();
      console.log(searchVideos);
      setSearchContents(searchVideos.items);
    }
  };

  console.log('search contents inside the lsit', searchContents);
  return (
    <>
      {searchContents.map((content) => (
        <SearchCard searchContent={content} />
      ))}
    </>
  );
};

export default SearchCardList;

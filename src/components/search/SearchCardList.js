import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { useSelector } from "react-redux";
import { GOOGLE_API_KEY, SEARCH_VIDEOS } from "../../utils/constants";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
const SearchCardList = () => {
  const searchQuery = useSelector((store) => store.search.searchContent);
  console.log("search query from card", searchQuery);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const videoContent = searchParams.get("search_query");
  console.log("video Content", videoContent);
  const [searchContents, setSearchContents] = useState([]);
  useEffect(() => {
    try {
      getSearchVidoes();
    } catch (err) {
      console.log(err);
    }
  }, [searchQuery]);
  console.log("search query is here inside searchCard list", searchQuery);
  const getSearchVidoes = async () => {
    if (searchQuery !== "" && searchQuery !== null) {
      const res = await fetch(
        `${SEARCH_VIDEOS}${searchQuery}&type=video${GOOGLE_API_KEY}`
      );
      const searchVideos = await res.json();
      console.log("searched videos", searchVideos);
      setSearchContents(searchVideos.items);
    } else {
      navigate("/", { replace: true });
    }
  };

  console.log("search contents inside the lsit", searchContents);
  return (
    <div className="ml-12">
      {searchContents?.map((content) => (
        <Link key={content.id.videoId} to={`/watch?v=${content.id.videoId}`}>
          <SearchCard key={content.id.videoId} searchContent={content} />
        </Link>
      ))}
    </div>
  );
};

export default SearchCardList;

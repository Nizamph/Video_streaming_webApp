import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCache } from "../../reduxStore/searchSlice";
import { GET_SUGGESTION_LIST } from "../../utils/constants";
import Suggestion from "./Suggestion";
const SuggestionList = ({ searchQuery }) => {
  const [suggestionList, setSuggestionList] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search.cache);

  const showSuggestion = useSelector((store) => store.search.showSuggestion);
  const showSuggestionExcpetion = useSelector(
    (store) => store.search.suggestionException
  );
  // console.log('searchCache', searchCache);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (searchCache[searchQuery] !== undefined) {
          // console.log('cached data', searchCache[searchQuery]);
          let cachedData = searchCache[searchQuery];
          setSuggestionList(cachedData);
          // console.log('suggestionlist inside if', suggestionList);
        } else {
          searchSuggestions();
        }
      } catch (err) {
        console.log(err);
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchSuggestions = async () => {
    try {
      const response = await fetch(`${GET_SUGGESTION_LIST}=${searchQuery}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const text = await response.text();
      console.log("Raw response:", text.length === 0 ? "EMPTY RESPONSE" : text);

      // Handle empty response
      if (!text.trim()) {
        console.warn("Received an empty response from API.");
        setSuggestionList([]); // Set an empty list to prevent errors
        return;
      }

      // Try parsing JSON
      const searchSuggestions = JSON.parse(text);
      console.log("Parsed searchSuggestions:", searchSuggestions);

      setSuggestionList(searchSuggestions[1] || []); // Fallback to an empty array
      dispatch(addCache({ [searchQuery]: searchSuggestions[1] || [] }));
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  return (
    <>
      {showSuggestion && suggestionList?.length > 0 && (
        <div className=" flex-col items-center absolute z-50 bg-white m-2 p-2 px-3 w-[32.55%] rounded-lg">
          {suggestionList?.map((suggestion, i) => {
            return <Suggestion key={i} suggestion={suggestion} />;
          })}
        </div>
      )}
    </>
  );
};

export default SuggestionList;

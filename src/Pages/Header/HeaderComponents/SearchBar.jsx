import React from "react";
import { useSearch } from "./SearchContext";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
function SearchBar() {
  const { setQuery } = useSearch();
  const navigate = useNavigate();

  function handleSearch(e) {
    if (e.key === "Enter") {
      setQuery(e.target.value);
      navigate("/search"); // Go to results page
    }
  }

  return (
    <input
      type="text"
      placeholder="Search..."
      onKeyDown={handleSearch}
      className="p-2 border rounded"
    />
  );
}

export default SearchBar;
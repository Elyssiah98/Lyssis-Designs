import React from "react";
import { useSearch } from "../../context/SearchContext";
import { Link } from "react-router-dom";
import allContent from "../../Data/allContent"; // Merge of blog, events, etc.

function SearchResults() {
  const { query } = useSearch();
  const results = allContent.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Search Results for "{query}"</h1>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((item, i) => (
            <li key={i}>
              
              <Link to={item.url} className="text-blue-600 underline">
                {item.title} — {item.type}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults;
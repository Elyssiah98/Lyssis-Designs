import React from "react";
import { useSearch } from "../Header/HeaderComponents/SearchContext";
import { Link } from "react-router-dom";
import allContent from "../../Data/allContent";
import "./SearchResults.css";
import Pagination from "../../Components/Pagination/Pagination";
import emoji from "emoji-dictionary";

function convertEmoji(text) {
  return text.replace(/:([a-zA-Z0-9_+-]+):/g, (_, name) =>
    emoji.getUnicode(name) || `:${name}:`
  );
}

// Helper to strip HTML tags from strings
function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "");
}

function Highlight({ text = "", query = "" }) {
  if (!query) return <>{text}</>;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="highlight">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function getSnippet(text, query, length = 100) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text.slice(0, length) + (text.length > length ? "…" : "");
  const start = Math.max(0, idx - length / 2);
  const end = Math.min(text.length, idx + length / 2);
  return (start > 0 ? "…" : "") + text.slice(start, end) + (end < text.length ? "…" : "");
}

function SearchResults() {
  const { query } = useSearch();
  const queryLower = query.toLowerCase();

  const results = allContent.filter(item => {
    const inTitle = item.title.toLowerCase().includes(queryLower);
    const cleanContent = stripHtml(item.content || item.description || "");
    const inContent = cleanContent.toLowerCase().includes(queryLower);
    const inTags = item.tags && item.tags.some(tag => tag.toLowerCase().includes(queryLower));
    return inTitle || inContent || inTags;
  });

  const [currentPage, setCurrentPage] = React.useState(1);
  const resultsPerPage = 5;
  const totalPages = Math.ceil(results.length / resultsPerPage);
  const pagedResults = results.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  return (
    <div className="search-results-container">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <h1 className="search-results-title">
        Search Results for "<Highlight text={query} query={query} />"
      </h1>
      <p className="result-count">
        {results.length} result{results.length !== 1 ? "s" : ""} found for "<Highlight text={query} query={query} />"
      </p>

      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <>
          <ul className="results-list">
            {pagedResults.map((item, i) => (
              <li key={i} className="result-item">
                <Link to={item.url} className="result-link">
                  <Highlight text={convertEmoji(item.title + " — " + item.type)} query={query} />
                </Link>
                {item.date && (
                  <p className="result-date">
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                )}
                <p className="result-snippet">
                  <Highlight
                    text={convertEmoji(getSnippet(stripHtml(item.content || item.description || ""), query))}
                    query={query}
                  />
                </p>
              </li>
            ))}
          </ul>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default SearchResults;
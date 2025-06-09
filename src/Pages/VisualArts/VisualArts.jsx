import React, { useState } from "react";
import arts from "./Data/Arts/index.js";
import ArtCard from "./components/ArtCard";
import Pagination from "./components/Pagination";
import "./VisualArts.css";

const POSTS_PER_PAGE = 48;

function VisualArts() {
  const [page, setPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  if (!Array.isArray(arts)) return <p>Loading arts...</p>;

  const years = [...new Set(arts.map(e => new Date(e.date).getFullYear()).filter(Boolean))].sort((a, b) => b - a);
  const types = [...new Set(arts.map(e => e.type).filter(Boolean))];

  // Filter by selected year and art type
  const filteredArts = arts.filter(art => {
    const yearMatch = selectedYear === "All" || new Date(art.date).getFullYear() === Number(selectedYear);
    const typeMatch = selectedType === "All" || art.type === selectedType;
    return yearMatch && typeMatch;
  });

  // Pagination
  const paginated = filteredArts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <div className="visual-arts-page">
      <h1 className="page-title-visual-arts">Visual Arts</h1>
      <div className="visual-arts-container">

        <div className="filters">
          <div className="year-buttons">
            <button onClick={() => setSelectedYear("All")} className={`year-button ${selectedYear === "All" ? "active" : ""}`}>
              All Years
            </button>
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`year-button ${selectedYear === year ? "active" : ""}`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="type-filter">
            <label htmlFor="type">Filter by type:</label>
            <select id="type" value={selectedType} onChange={e => setSelectedType(e.target.value)}>
              <option value="All">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="result-count">
          Showing {filteredArts.length} art{filteredArts.length !== 1 ? "s" : ""} matching your filters
        </p>

        <div className="art-cards">
          {paginated.map(art => (
            <ArtCard key={art.slug} art={art} />
          ))}
        </div>

        <Pagination
          currentPage={page}
          totalCount={filteredArts.length}
          perPage={POSTS_PER_PAGE}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

export default VisualArts;
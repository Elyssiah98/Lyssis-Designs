import React, { useState, useEffect } from "react";
import Costumes from "./Data/Costume";
import CostumeCard from "./CostumeComponents/CostumeCard";
import ModalGallery from "../VisualArts/ArtComponents/ModalGallery";
import Pagination from "../../Components/Pagination";
import "./CostumePortfolio.css";

const POSTS_PER_PAGE = 12;

function CostumePortfolio() {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const years = [
    ...new Set(
      Costumes.map((c) => (c.date ? new Date(c.date).getFullYear() : null)).filter(Boolean)
    ),
  ].map(String);

  const types = [...new Set(Costumes.map((c) => c.type || "default"))];

  useEffect(() => {
    setPage(1);
  }, [selectedYear, selectedType]);

  const filteredCostumes = Costumes.filter((costume) => {
    const costumeYear = costume.date ? new Date(costume.date).getFullYear().toString() : null;
    const yearMatch = selectedYear === "All" || costumeYear === selectedYear;
    const typeMatch = selectedType === "All" || (costume.type || "default") === selectedType;
    return yearMatch && typeMatch;
  });

  const paginatedCostumes = filteredCostumes.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <div>
      <h1 className="costume-title">Costume Portfolio</h1>
      <div className="portfolio-page">
        <div className="filters">
          <div className="year-buttons">
            <button
              onClick={() => setSelectedYear("All")}
              className={`year-button ${selectedYear === "All" ? "active" : ""}`}
              aria-pressed={selectedYear === "All"}
            >
              All Years
            </button>
            {years.map((year) => (
              <button
                key={year}
                aria-pressed={selectedYear === year}
                onClick={() => setSelectedYear(year)}
                className={`year-button ${selectedYear === year ? "active" : ""}`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="type-filter">
            <label htmlFor="type">Filter by type:</label>
            <select
              id="type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="All">All Types</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

      
        <div className="costume-grid">
          {paginatedCostumes.map((costume) => (
            <CostumeCard key={costume.slug} costume={costume} onClick={setSelected} />
          ))}
        </div>

        <Pagination
          currentPage={page}
          totalCount={filteredCostumes.length}
          perPage={POSTS_PER_PAGE}
          onPageChange={setPage}
        />

        {selected && (
          <ModalGallery
            data={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </div>
  );
}

export default CostumePortfolio;
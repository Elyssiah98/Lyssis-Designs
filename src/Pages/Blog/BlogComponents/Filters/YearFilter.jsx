// YearFilter.jsx
import React from "react";

export default function YearFilter({ years, selectedYear, onChange }) {
  const isMobile = window.innerWidth < 768;
  
  return (
    <div className="year-filter">
      {isMobile ? (
        <select
          className="year-dropdown"
          value={selectedYear}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      ) : (
      <div className="year-buttons">

          {/* "All Years" button */}
        <button
          className={`year-button ${selectedYear === "" ? "active" : ""}`}
          onClick={() => onChange("")}  // empty string means "all years"
        >
          All Years
        </button>

        {/* Buttons for each year */}
        {years.map((year) => (
          <button
            key={year}
            className={`year-button ${selectedYear === year ? "active" : ""}`}
            onClick={() => onChange(year)}
          >
            {year}
          </button>
        ))}
      </div>
      )}
    </div>
  );
}
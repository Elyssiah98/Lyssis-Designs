import React from "react";

export default function YearFilter({ years, selectedYear, onChange }) {
  return (
    <div className="year-filter">
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
    </div>
  );
}
import React from "react";

export default function CategoryFilter({ categories, selectedCategory, onChange }) {
  return (
    <div className="category-filter">
      <label htmlFor="category-select">Category:</label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value=''>All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
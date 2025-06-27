import React from "react";

export default function CategoryFilter({
  categories,
  selectedCategory,
  onChange,
  label = "Filter by category:"
}) {

  // Extract the last word (e.g. "apparatus" or "category") for the "All" label
  const labelKeyword = label.split(" ").pop().replace(":", "");
  
  return (
    <div className="blog-type-filter category-filter">
      <label htmlFor="category-select">{label}</label>
      <select
        id="category-select"
        aria-label="Filter posts by category"
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{`All ${labelKeyword.charAt(0).toUpperCase() + labelKeyword.slice(1)}`}</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}
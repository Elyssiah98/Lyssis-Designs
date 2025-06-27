// SubcategoryFilter.jsx
import React from "react";

const SubcategoryFilter = ({ subcategories, selectedSubcategory, onChange }) => {
  return (
    <div className="blog-type-filter subcategory-filter">
      <label htmlFor="subcategory-select" className="block text-sm font-medium text-gray-700">
        Subcategory:
      </label>
      <select
        id="subcategory-select"
        aria-label="Filter posts by subcategory"
        value={selectedSubcategory}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All Subcategories</option>
        {subcategories.map((subcategory) => (
          <option key={subcategory} value={subcategory}>
            {subcategory}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubcategoryFilter;
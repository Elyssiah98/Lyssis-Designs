// Components/Filters/SubcategoryFilter.jsx
import React from "react";

const SubcategoryFilter = ({ subcategories, selectedSubcategory, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="subcategory-select" className="block text-sm font-medium text-gray-700">
        Subcategory:
      </label>
      <select
        id="subcategory-select"
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-purple-500"
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
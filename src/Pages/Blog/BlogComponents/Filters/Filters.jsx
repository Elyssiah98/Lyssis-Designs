import React from "react";
import YearFilter from "./YearFilter";
import CategoryFilter from "./CategoryFilter";
import SubcategoryFilter from "./SubcategoryFilter";
import './Filter.css'

export default function Filters({
  years,
  categories,
  subcategories,
  selectedYear,
  selectedCategory,
  selectedSubcategory,
  setSelectedYear,
  setSelectedCategory,
  setSelectedSubcategory,
  setCurrentPage,
}) {
  return (
    <div className="filters-container sticky-filters">
      <YearFilter
        years={years}
        selectedYear={selectedYear}
        onChange={(year) => {
          setSelectedYear(year);
          setCurrentPage(1);
        }}
      />

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onChange={(category) => {
          setSelectedCategory(category);
          setSelectedSubcategory("");
          setCurrentPage(1);
        }}
      />

      <SubcategoryFilter
        subcategories={subcategories}
        selectedSubcategory={selectedSubcategory}
        onChange={(subcategory) => {
          setSelectedSubcategory(subcategory);
          setCurrentPage(1);
        }}
      />
    </div>
  );
}
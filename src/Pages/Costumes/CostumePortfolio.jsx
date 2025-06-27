import React, { useState, useEffect } from "react";

import Costumes from "./Data/Costume";
import CostumeCard from "./CostumeComponents/CostumeCard";

import ModalGallery from "../VisualArts/ArtComponents/ModalGallery";
import YearFilter from "../../Components/Filters/YearFilter";
import CategoryFilter from "../../Components/Filters/CategoryFilter";
import Pagination from "../../Components/Pagination/Pagination";
import useFilters from "../../Components/Hooks/useFilters";
import usePagination from "../../Components/Hooks/usePagination";
import useURLSync from "../../Components/Hooks/useURLSync";

import "./CostumePortfolio.css";

const POSTS_PER_PAGE = 12;

function CostumePortfolio() {
  // Modal selected costume state
  const [selected, setSelected] = useState(null);
  
  // Sync filters and page with URL
  const {
    selectedYear,
    setSelectedYear,
    selectedType,
    setSelectedType,
    page,
    setPage
  } = useURLSync({ page: 1 });

  // Apply filters using URL synced selectedYear and selectedType
  const {
    filtered,
    years,
    types,
  } = useFilters(Costumes, {
    typeKey: "type",
    dateKey: "date",
    externalSelectedYear: selectedYear,
    externalSelectedType: selectedType,
  });

  // Paginate filtered results
  const {
    total,
    totalPages,
    paginated
  } = usePagination(filtered, POSTS_PER_PAGE);

  // Reset page to 1 whenever filters change
  useEffect(() => {
    setPage(1);
  }, [selectedYear, selectedType, setPage]);

  return (
    <div>
      <h1 className="costume-title">Costume Portfolio</h1>
      <div className="portfolio-page">

        {/* Filter Controls */}
        <div className="filters">
          <YearFilter
            years={years}
            selectedYear={selectedYear}
            onChange={setSelectedYear}
          />

          <CategoryFilter
            categories={types}
            selectedCategory={selectedType}
            onChange={setSelectedType}
            label="Costume Type:"
          />
        </div>

        {/* Costume Cards */}
        <div className="costume-grid">
          {paginated.map((costume) => (
            <CostumeCard key={costume.slug} costume={costume} onClick={setSelected} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          totalCount={total}
          perPage={POSTS_PER_PAGE}
          setCurrentPage={setPage}
        />

        {/* Modal Viewer */}
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
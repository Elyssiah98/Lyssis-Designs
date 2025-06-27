import React, { useState } from "react";

import arts from "./Data/Arts/Art";
import ArtCard from "./ArtComponents/ArtCard";

import YearFilter from "../../Components/Filters/YearFilter";
import CategoryFilter from "../../Components/Filters/CategoryFilter";
import Pagination from "../../Components/Pagination/Pagination";
import ModalGallery from "./ArtComponents/ModalGallery";
import useFilters from "../../Components/Hooks/useFilters";
import usePagination from "../../Components/Hooks/usePagination";
import useUrlSync from "../../Components/Hooks/useURLSync";

import "./VisualArts.css";

const POSTS_PER_PAGE = 48;

function VisualArts() {
  const [selectedArt, setSelectedArt] = useState(null);
  const [initialIndex, setInitialIndex] = useState(0);

  // 🔁 Sync state with URL
  const {
    selectedYear,
    setSelectedYear,
    selectedType,
    setSelectedType,
    page,
    setPage
  } = useUrlSync({ page: 1 });

  // 🧠 Apply reusable filtering hook
  const {
    filtered,
    years,
    types,
  } = useFilters(arts, {
    typeKey: "type",
    dateKey: "date",
    externalSelectedYear: selectedYear,
    externalSelectedType: selectedType
  });

  // 🔢 Use pagination hook
  const {
    total,
    totalPages,
    paginated
  } = usePagination(filtered, POSTS_PER_PAGE);

  function openGallery(art, index = 0) {
    setSelectedArt(art);
    setInitialIndex(index);
  }

  React.useEffect(() => {
    setPage(1);
  }, [selectedYear, selectedType]);

  return (
    <div className="visual-arts-page">
      <h1 className="page-title-visual-arts">Visual Arts</h1>
      <div className="visual-arts-container">

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
            label="Filter by art:"
          />
        </div>

        <p className="result-count">
          Showing {total} art{total !== 1 ? "s" : ""}
        </p>

        {/* Art Cards */}
        <div className="art-cards">
          {paginated.map((art, index) => (
            <ArtCard
              key={art.slug}
              art={art}
              openGallery={() => openGallery(art, index)}
              onTypeClick={(clickedType) =>
                setSelectedType(prev => prev === clickedType ? "" : clickedType)
              }
            />
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

        {/* Modal Gallery */}
        {selectedArt && (
          <ModalGallery
            data={selectedArt}
            initialIndex={initialIndex}
            onClose={() => setSelectedArt(null)}
          />
        )}
      </div>
    </div>
  );
}

export default VisualArts;
import React from "react";
import "./Pagination.css";

export default function Pagination({
  currentPage,
  totalPages,
  totalCount,
  perPage,
  setCurrentPage,
  onPageChange,
}) {
  const pageCount = totalPages || (totalCount && perPage ? Math.ceil(totalCount / perPage) : 0);

  if (pageCount <= 1) return null;

  const handlePageChange = (pageNum) => {
    if (setCurrentPage) setCurrentPage(pageNum);
    else if (onPageChange) onPageChange(pageNum);
  };

  return (
    <div className="pagination">
      {Array.from({ length: pageCount }, (_, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`pagination-button${currentPage === i + 1 ? " active" : ""}`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
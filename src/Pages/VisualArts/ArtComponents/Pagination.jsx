import React from "react";
import "./Pagination.css";

function Pagination({ currentPage, totalCount, perPage, onPageChange }) {
  const pageCount = Math.ceil(totalCount / perPage);
  if (pageCount <= 1) return null;

  return (
    <div className="pagination">
      {Array.from({ length: pageCount }, (_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? "active" : ""}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
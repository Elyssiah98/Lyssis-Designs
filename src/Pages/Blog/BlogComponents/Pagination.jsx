// Pagination.jsx
import React from "react";
import './Pagination.css';

export default function Pagination({ currentPage, totalPages, setCurrentPage }) {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)}
          className={`pagination-button${num === currentPage ? " active" : ""}`}
        >
          {num}
        </button>
      ))}
    </div>
  );
}
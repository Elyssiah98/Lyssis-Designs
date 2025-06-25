import React, { useState, useEffect } from "react";

import events from "./Data/Events";
import EventCard from "./EventComponents/EventCard";

import YearFilter from "../../Components/Filters/YearFilter";
import CategoryFilter from "../../Components/Filters/CategoryFilter";
import Pagination from "../../Components/Pagination/Pagination";
import useFilters from "../../Components/Hooks/useFilters";
import usePagination from "../../Components/Hooks/usePagination";
import useURLSync from "../../Components/Hooks/useURLSync";

import "./PastEvents.css";

const POSTS_PER_PAGE = 4;

function PastEvents() {
  // Sync selected filters and page with URL
  const {
    selectedYear,
    setSelectedYear,
    selectedType,
    setSelectedType,
    page,
    setPage
  } = useURLSync({ page: 1 });

  // Filter data with external selected filters from URL sync
  const {
    filtered,
    years,
    types
  } = useFilters(events, {
    typeKey: "type",
    dateKey: "date",
    externalSelectedYear: selectedYear,
    externalSelectedType: selectedType,
  });

  // Paginate filtered data
  const {
    total,
    totalPages,
    paginated
  } = usePagination(filtered, POSTS_PER_PAGE);

  // Reset page to 1 if filters change
  useEffect(() => {
    setPage(1);
  }, [selectedYear, selectedType, setPage]);

  return (
    <div className="past-events-page">
      <h1>Past Events</h1>
      
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
          label="Filter by type:"
        />
      </div>

      <p className="result-count">
        Showing {total} event{total !== 1 ? "s" : ""}
      </p>

      {paginated.length === 0 ? (
        <p>No events found.</p>
      ) : (
        paginated.map(event => (
          <EventCard key={event.slug} event={event} />
        ))
      )}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        totalCount={total}
        perPage={POSTS_PER_PAGE}
        onPageChange={setPage}
      />
    </div>
  );
}

export default PastEvents;
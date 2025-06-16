import React, { useState, useEffect } from "react";
import events from "../../Data/Events/Events";
import EventCard from "./components/EventCard";
import Pagination from "./components/Pagination";
import "./PastEvents.css";

const POSTS_PER_PAGE = 4;

function PastEvents() {
  const [page, setPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  
  // Sort events by date descending
  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [selectedYear, selectedType]);

  if (!Array.isArray(events)) return <p>Loading events...</p>;
  
  // Extract unique years as strings
  const years = [...new Set(events.map((e) => new Date(e.date).getFullYear()))].map(String);
  // Extract unique event types
  const types = [...new Set(events.map(e => e.type))];

  // Filter by selected year and event type
  const filteredEvents = sortedEvents.filter((event) => {
    const eventYear = new Date(event.date).getFullYear().toString();
    const yearMatch = selectedYear === "All" || Number(eventYear) === Number(selectedYear);
    const typeMatch = selectedType === "All" || (event.type || "default") === selectedType;
    return yearMatch && typeMatch;
  });

  // Pagination
  const paginated = filteredEvents.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <div className="past-events-page">
      <h1 className="page-title-past-events">Past Events</h1>
      <div className="past-events-container">
        <div className="filters">
          <div className="year-buttons">
            <button
              onClick={() => setSelectedYear("All")}
              className={`year-button ${selectedYear === "All" ? "active" : ""}`}
            >
              All Years
            </button>
            {years.map(year => (
              <button
                key={year}
                aria-pressed={selectedYear === year}
                onClick={() => setSelectedYear(year)}
                className={`year-button ${selectedYear === year ? "active" : ""}`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="type-filter">
            <label htmlFor="type">Filter by type:</label>
            <select
              id="type"
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
            >
              <option value="All">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="result-count">
          Showing {filteredEvents.length} event
          {filteredEvents.length !== 1 ? "s" : ""} matching your filters
        </p>

        {filteredEvents.length === 0 ? (
          <p className="no-events-message">No events found for selected filters.</p>
        ) : (
          <div className="event-cards">
            {paginated.map(event => (
              <EventCard
                key={event.slug}
                event={event}
              />
            ))}
          </div>
        )}

        <Pagination
          currentPage={page}
          totalCount={filteredEvents.length}
          perPage={POSTS_PER_PAGE}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

export default PastEvents;
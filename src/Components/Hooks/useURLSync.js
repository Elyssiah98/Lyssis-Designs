import { useSearchParams } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

export default function useURLSync(defaults = {}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isFirstLoad = useRef(true);

  // Initial state from URL or defaults
  const [year, setYear] = useState(() => searchParams.get("year") || defaults.year || "");
  const [type, setType] = useState(() => searchParams.get("type") || defaults.type || "");
  const [page, setPage] = useState(() => parseInt(searchParams.get("page")) || defaults.page || 1);

  // Update URL when filters change
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    const params = {};
    if (year) params.year = year;
    if (type) params.type = type;
    if (page > 1) params.page = page;

    setSearchParams(params);
  }, [year, type, page]);

  // Sync state on browser navigation
  useEffect(() => {
    const newYear = searchParams.get("year") || "";
    const newType = searchParams.get("type") || "";
    const newPage = parseInt(searchParams.get("page")) || 1;

    setYear(newYear);
    setType(newType);
    setPage(newPage);
  }, [searchParams]);

  return {
    selectedYear: year,
    setSelectedYear: setYear,
    selectedType: type,
    setSelectedType: setType,
    page,
    setPage,
  };
}
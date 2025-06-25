import { useState, useEffect } from "react";

export default function usePagination(data = [], perPage = 10) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1); // reset to page 1 if the input data changes
  }, [data]);

  const total = data.length;
  const totalPages = Math.ceil(total / perPage);
  const paginated = data.slice((page - 1) * perPage, page * perPage);

  return {
    page,
    setPage,
    total,
    totalPages,
    paginated
  };
}
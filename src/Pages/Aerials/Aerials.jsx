import React from "react";
import aerialPosts from "./Data/loadAerialPosts";
import AerialVideos from "./AerialVideos/AerialVideos";
import YearFilter from "../../Components/Filters/YearFilter";
import CategoryFilter from "../../Components/Filters/CategoryFilter";
import Pagination from "../../Components/Pagination/Pagination";
import useFilters from "../../Components/Hooks/useFilters";
import usePagination from "../../Components/Hooks/usePagination";
import useURLSync from "../../Components/Hooks/useURLSync";
import "./AerialVideos/AerialCard.css";
import "./Aerials.css"

const POSTS_PER_PAGE = 6;

function Aerials() {
  const {
    selectedYear,
    setSelectedYear,
    selectedType,
    setSelectedType,
    page,
    setPage
  } = useURLSync({ page: 1 });

  const {
    filtered,
    years,
    types,
  } = useFilters(aerialPosts, {
    typeKey: "apparatus",
    dateKey: "date",
    externalSelectedYear: selectedYear,
    externalSelectedType: selectedType,
  });

  const {
    total,
    totalPages,
    paginated
  } = usePagination(filtered, POSTS_PER_PAGE);

  React.useEffect(() => {
    // Instagram embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    // TikTok embeds
    const tiktokScript = document.createElement("script");
    tiktokScript.src = "https://www.tiktok.com/embed.js";
    tiktokScript.async = true;
    document.body.appendChild(tiktokScript);

    // Facebook embeds handled globally if needed
  }, [paginated]); // rerun embeds on filtered data change

  React.useEffect(() => {
    setPage(1);
  }, [selectedYear, selectedType]);

  return (
    <div>
      <h2 className="aerial-title">Aerials</h2>
      <div className="aerial-page-content">
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
          label="Filter by apparatus:"
        />
        </div>

        <AerialVideos aerials={paginated} />

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          totalCount={total}
          perPage={POSTS_PER_PAGE}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

export default Aerials;
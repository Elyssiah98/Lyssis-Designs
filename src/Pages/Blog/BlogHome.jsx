import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import posts from "./BlogData";
import Pagination from "../../Components/Pagination";
import Filters from "./BlogComponents/Filters/Filters";
import BlogPostList from "./BlogComponents/BlogPostList";

import './BlogHome.css'

const POSTS_PER_PAGE = 6;

export default function BlogHome() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const isSyncingFromUrlRef = React.useRef(false);

  // Initialize state from URL query params or fallback to defaults
  const [currentPage, setCurrentPage] = useState(() => {
    const page = parseInt(searchParams.get("page"));
    return isNaN(page) || page < 1 ? 1 : page;
  });
  const [selectedCategory, setSelectedCategory] = useState(() => searchParams.get("category") || "");
  const [selectedYear, setSelectedYear] = useState(() => searchParams.get("year") || "");
  const [selectedSubcategory, setSelectedSubcategory] = useState(() => searchParams.get("subcategory") || "");

  // Unique categories and years
  const categories = [...new Set(posts.map(post => post.category))];
  const years = [...new Set(
    posts
      .map(post => {
        const year = new Date(post.date).getFullYear();
        return isNaN(year) ? null : year.toString();
      })
      .filter(Boolean)
  )];
  
  const subcategories = [...new Set(
    posts
      .filter(post => selectedCategory === "" || post.category === selectedCategory)
      .map(post => post.subcategory)
      .filter(Boolean)
  )];

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const yearMatch = selectedYear === "" || new Date(post.date).getFullYear().toString() === selectedYear;
    const categoryMatch = selectedCategory === "" || post.category === selectedCategory;
    const subcategoryMatch = selectedSubcategory === "" || post.subcategory === selectedSubcategory;
    return yearMatch && categoryMatch && subcategoryMatch;
  });

  // Pagination
  const indexOfLast = currentPage * POSTS_PER_PAGE;
  const indexOfFirst = indexOfLast - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const isFirstLoad = useRef(true);

  useEffect(() => {
    // Only run this logic once per actual navigation change
    const page = parseInt(searchParams.get("page")) || 1;
    const category = searchParams.get("category") || "";
    const year = searchParams.get("year") || "";
    const subcategory = searchParams.get("subcategory") || "";
  
    const valuesChanged =
      page !== currentPage ||
      category !== selectedCategory ||
      year !== selectedYear ||
      subcategory !== selectedSubcategory;
  
    if (valuesChanged) {
      // Avoid triggering state updates that trigger URL writes immediately after
      isFirstLoad.current = true;
    
      setCurrentPage(page);
      setSelectedCategory(category);
      setSelectedYear(year);
      setSelectedSubcategory(subcategory);
    }
  }, [searchParams]);
  
  useEffect(() => {
    // Only update URL if state changed by user interaction
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
  
    const params = {};
    if (currentPage > 1) params.page = currentPage;
    if (selectedCategory) params.category = selectedCategory;
    if (selectedYear) params.year = selectedYear;
    if (selectedSubcategory) params.subcategory = selectedSubcategory;
  
    setSearchParams(params);
  }, [currentPage, selectedCategory, selectedYear, selectedSubcategory]);

  // Handlers to reset page to 1 on filter change
  const onCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setSelectedSubcategory("");
    setCurrentPage(1);
  };

  const onYearChange = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  const onSubcategoryChange = (subcat) => {
    setSelectedSubcategory(subcat);
    setCurrentPage(1);
  };

  return (
    <div className="blog-home">
      <h1 className="blog-name-title">Blog</h1>

      <Filters
        years={years}
        categories={categories}
        subcategories={subcategories}
        selectedYear={selectedYear}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        setSelectedYear={setSelectedYear}
        setSelectedCategory={setSelectedCategory}
        setSelectedSubcategory={setSelectedSubcategory}
        setCurrentPage={setCurrentPage}
      />

      <div className="blog-main-content">
        <p className="result-count">
          Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""} matching your filters
        </p>

        <BlogPostList
          posts={currentPosts}
          navigate={navigate}
          selectedCategory={selectedCategory}
          handleCategoryChange={onCategoryChange}
        />

        {filteredPosts.length > POSTS_PER_PAGE && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}
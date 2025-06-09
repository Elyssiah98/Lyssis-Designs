import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './BlogHome.css';
import posts from "./BlogData";
import Pagination from "./Pagination";
import CategoryFilter from './CategoryFilter';
import YearFilter from './YearFilter';
import SubcategoryFilter from "./SubcategoryFilter";

const POSTS_PER_PAGE = 6;

export default function BlogHome() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const navigate = useNavigate();

  // Generate unique category and year lists
  const categories = [...new Set(posts.map(post => post.category))];
  const years = [...new Set(
    posts
      .map(post => {
        const year = new Date(post.date).getFullYear();
        return isNaN(year) ? null : year.toString();
      })
      .filter(Boolean)
  )];
  
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const subcategories = [...new Set(
    posts
      .filter(post => selectedCategory === "" || post.category === selectedCategory)
      .map(post => post.subcategory)
      .filter(Boolean)
  )];

  // Filter posts based on year and category
  const filteredPosts = posts.filter(post => {
    const yearMatch = selectedYear === "" || new Date(post.date).getFullYear().toString() === selectedYear;
    const categoryMatch = selectedCategory === "" || post.category === selectedCategory;
    const subcategoryMatch = selectedSubcategory === "" || post.subcategory === selectedSubcategory;
    return yearMatch && categoryMatch && subcategoryMatch;
  });

  // Paginate filtered posts
  const indexOfLast = currentPage * POSTS_PER_PAGE;
  const indexOfFirst = indexOfLast - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [currentPage]);

  // Handlers
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setCurrentPage(1);
  };

  return (
    <div className="blog-home">
      <h1 className="blog-name-title">Blog</h1>

      {/* Filters */}
      <div className="filters-container sticky-filters">
        <YearFilter
          years={years}
          selectedYear={selectedYear}
          onChange={handleYearChange}
        />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onChange={(category) => {
            setSelectedCategory(category);
            setSelectedSubcategory(""); // Reset subcategory when category changes
          }}
        />

        <SubcategoryFilter
          subcategories={subcategories}
          selectedSubcategory={selectedSubcategory}
          onChange={(subcategory) => {
            setSelectedSubcategory(subcategory);
            setCurrentPage(1);
          }}
        />
      </div>
        
        {/* Blog Posts */}
        <div className="blog-main-content">
        <p className="result-count">
          Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? "s" : ""} matching your filters
        </p>

        {currentPosts.length === 0 ? (
          <p className="no-posts-message">No posts match your filters.</p>
        ) : (
          currentPosts.map((post) => (
            <div
              key={post.slug}
              className={`blog-post ${post.thumbnail ? (post.thumbnailPosition === "right" ? "thumbnail-right" : "thumbnail-top") : "no-thumbnail"}`}
            >
              {/* Thumbnail on top */}
              {post.thumbnail && post.thumbnailPosition === "top" && (
                <div
                  role="button"
                  tabIndex={0}
                  className="blog-thumbnail-wrapper-top"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/blog/${post.slug}`); }}
                >
                  <div className="thumbnail-outer-wrapper">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="blog-thumbnail-top rotated-image"
                      style={{
                        "--rotation": post.rotation || "0deg",
                        "--zoom": post.zoom || "1"
                      }}
                    />
                  </div>
                </div>
              )}

                <div className="blog-post-inner">
                {/* Thumbnail on right */}
                {post.thumbnail && post.thumbnailPosition === "right" && (
                  <div
                    role="button"
                    tabIndex={0}
                    className="blog-thumbnail-wrapper-right"
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/blog/${post.slug}`); }}
                  >
                    <div className="thumbnail-outer-wrapper">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="blog-thumbnail-right rotated-image"
                        style={{
                          "--rotation": post.rotation || "0deg",
                          "--zoom": post.zoom || "1"
                        }}
                      />
                    </div>
                  </div>
                )}

                <div className="blog-post-content">
                  <h2
                    className="blog-title"
                    role="button"
                    tabIndex={0}
                    onClick={() => navigate(`/blog/${post.slug}`)}
                    onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/blog/${post.slug}`); }}
                  >
                    <span className="blog-title-link">{post.title}</span>
                  </h2>

                  <p className="blog-meta">
                    {post.date} •{" "}
                    <span
                      className={`blog-category clickable-category ${
                        selectedCategory === post.category ? "active" : ""
                      }`}
                      onClick={() => handleCategoryChange(post.category)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleCategoryChange(post.category);
                        }
                      }}
                    >
                      {post.category}
                    </span>
                  </p>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <button
                    className="read-more"
                    onClick={() => navigate(`/blog/${post.slug}`)}
                  >
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
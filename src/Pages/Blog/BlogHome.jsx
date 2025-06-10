import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import posts from "./BlogData";
import Pagination from "./BlogComponents/Pagination";
import Filters from "./BlogComponents/Filters/Filters";
import BlogPostList from "./BlogComponents/BlogPostList";

import './BlogHome.css'

const POSTS_PER_PAGE = 6;

export default function BlogHome() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  
  const navigate = useNavigate();

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
          handleCategoryChange={(cat) => {
            setSelectedCategory(cat);
            setCurrentPage(1);
          }}
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
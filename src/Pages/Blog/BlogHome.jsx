import React, { useState } from "react";
import './BlogHome.css';
import posts from "./BlogData";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const POSTS_PER_PAGE = 6;

export default function BlogHome() {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLast = currentPage * POSTS_PER_PAGE;
  const indexOfFirst = indexOfLast - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return (
    <div className="blog-home">
      <h1 className="page-title text-center">Blog</h1>

      {currentPosts.map((post) => (
        <div key={post.slug} className={`blog-post ${post.thumbnail ? (post.thumbnailPosition === "right" ? "thumbnail-right" : "thumbnail-top") : "no-thumbnail"}`}>
          {post.thumbnail && post.thumbnailPosition === "top" && (
            <img src={post.thumbnail} alt={post.title} className="blog-thumbnail-top" />
          )}
          
          <div className="blog-post-inner">
            {post.thumbnail && post.thumbnailPosition === "right" && (
              <img src={post.thumbnail} alt={post.title} className="blog-thumbnail-right" />
            )}
      
            <div className="blog-post-content">
              <h2 className="blog-title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="blog-meta">
                {post.date} • <span className="blog-category">{post.category}</span>
              </p>
              <p className="blog-excerpt">{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="read-more">Read more →</Link>
            </div>
          </div>
        </div>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
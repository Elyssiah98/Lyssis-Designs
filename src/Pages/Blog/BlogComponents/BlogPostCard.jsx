import React from "react";
import Thumbnail from "./Thumbnail";

export default function BlogPostCard({ post, navigate, selectedCategory, handleCategoryChange }) {
  return (
    <div
      className={`blog-post ${post.thumbnail ? (post.thumbnailPosition === "right" ? "thumbnail-right" : "thumbnail-top") : "no-thumbnail"}`}
    >
      {post.thumbnail && post.thumbnailPosition === "top" && (
        <Thumbnail
          post={post}
          navigate={navigate}
          position="top"
        />
      )}

      <div className="blog-post-inner">
        {post.thumbnail && post.thumbnailPosition === "right" && (
          <Thumbnail
            post={post}
            navigate={navigate}
            position="right"
          />
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
              className={`blog-category clickable-category ${selectedCategory === post.category ? "active" : ""}`}
              onClick={() => handleCategoryChange(post.category)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") handleCategoryChange(post.category); }}
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
  );
}
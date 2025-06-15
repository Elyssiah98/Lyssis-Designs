import React from "react";
import { useLocation } from "react-router-dom";
import Thumbnail from "./Thumbnail";

function joinUrl(base, slug) {
  if (base.endsWith('/')) base = base.slice(0, -1);
  if (slug.startsWith('/')) slug = slug.slice(1);
  return `${base}/${slug}`;
}

export default function BlogPostCard({ post, navigate, selectedCategory, handleCategoryChange }) {
  const location = useLocation();

  const goToPost = () => {
    const url = joinUrl('/blog', post.slug) + location.search;
    navigate(url);
  };

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
            onClick={goToPost}
            onKeyDown={(e) => { if (e.key === 'Enter') goToPost(); }}
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
            onClick={goToPost}
          >
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
}
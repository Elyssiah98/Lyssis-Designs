import React from "react";
import BlogPostCard from "./BlogPostCard";

export default function BlogPostList({ posts, navigate, selectedCategory, handleCategoryChange }) {
  if (posts.length === 0) {
    return <p className="no-posts-message">No posts match your filters.</p>;
  }

  return (
    <>
      {posts.map(post => (
        <BlogPostCard
          key={post.slug}
          post={post}
          navigate={navigate}
          selectedCategory={selectedCategory}
          handleCategoryChange={handleCategoryChange}
        />
      ))}
    </>
  );
}
import React, { useEffect, useState } from 'react';
import posts from '../../Pages/Blog/BlogData';
import './BlogPreview.css';


function BlogPreview() {
  return (
    <div className="blog-preview-list">
      {posts.slice(0, 3).map((post) => (
        <div className="blog-card" key={post.slug}>
          {post.thumbnail && (
            <img
              src={post.thumbnail}
              alt={post.title}
              className="blog-thumbnail"
            />
          )}
          <div className="blog-info">
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.excerpt}</p>
            <a href={`/Blog/${post.slug}`} className="read-more">
              Read more →
            </a>
          </div>
        </div>
      ))}
    </div>
  )}
export default BlogPreview;
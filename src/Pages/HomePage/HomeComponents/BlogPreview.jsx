import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../../Blog/BlogData';
import './BlogPreview.css';

function BlogPreview() {
  return (
    <div className="blog-preview-list">
      {posts.slice(0, 3).map((post) => (
        <div className="blog-card" key={post.slug}>
          <Link to={`/Blog/${post.slug}`}>
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="blog-thumbnail"
              />
            )}
          </Link>
          <div className="blog-info">
            <Link to={`/Blog/${post.slug}`} className="blog-preview-title-link">
              <h3>{post.title}</h3>
            </Link>
            <p className="blog-date">{post.date}</p>
            <p>{post.excerpt}</p>
            <Link to={`/Blog/${post.slug}`} className="read-more">
              Read more →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPreview;

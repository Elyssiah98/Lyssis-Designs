// src/blog/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";
import posts from "./BlogData";
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <div className="blog-post-not-found">Post not found</div>;

  return (
    <div className="blog-post-container">
      <h1 className="blog-post-title">{post.title}</h1>
      <p className="blog-post-meta">
        {post.date} • <span className="blog-post-category">{post.category}</span>
      </p>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
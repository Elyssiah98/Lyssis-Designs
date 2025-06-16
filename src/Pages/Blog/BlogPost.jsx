// src/blog/BlogPost.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import posts from "./BlogData";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import './BlogPost.css';
import ModalImageViewer from "./BlogComponents/ModalImageViewer";

export default function BlogPost() {
  const { category, '*': slug } = useParams();
  const fullSlug = `${category}/${slug}`;
  const post = posts.find((p) => p.slug === fullSlug);

  const [modalImage, setModalImage] = useState(null);

  if (!post)
    return <div className="blog-post-not-found">Post not found</div>;

  // Markdown custom renderers
  const components = {
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt || 'Blog image'}
        onClick={() => setModalImage({ src, alt })}
        className="blog-post-markdown-image"
      />
    ),
  };

  const zoom = post.postThumbnailZoom ?? 1;
  const rotation = post.postThumbnailRotate ?? 0;

  return (
    <>
    <article className="blog-post-container">
      <h1 className="blog-post-title">{post.title}</h1>
      
      {post.thumbnail && (
        <img
          src={post.thumbnail}
          alt={`${post.title} thumbnail`}
          className="blog-post-thumbnail"
          style={{
            transform: `scale(${zoom}) rotate(${rotation}deg)`,
            transition: "transform 0.3s ease",
            cursor: "pointer",
          }}
          onClick={() => setModalImage({ src: post.thumbnail, alt: `${post.title} thumbnail` })}
        />
      )}

      <div className="blog-post-meta">
        <div className="category-tags-row">
          <span className="blog-post-category">
            <Link to={`/category/${post.category.toLowerCase()}`}>
              {post.category}
            </Link>
            {post.subcategory && (
              <>
                {" / "}
                <Link to={`/category/${post.category.toLowerCase()}/${post.subcategory.toLowerCase()}`}>
                  {post.subcategory}
                </Link>
              </>
            )}
          </span>
          <span className="blog-post-tags">
            {post.tags &&
              [...post.tags].sort((a, b) => a.localeCompare(b)).map((tag) => (
                <React.Fragment key={tag}>
                  <Link to={`/tag/${encodeURIComponent(tag.toLowerCase())}`} className="blog-post-tag">
                    {tag}
                  </Link>
                </React.Fragment>
            ))}
          </span>
        </div>
        <div className="date-row">{post.date}</div>
      </div>

      <ReactMarkdown components={components} rehypePlugins={[rehypeRaw]}>
        {post.content}
      </ReactMarkdown>
    </article>
    
    {modalImage && (
      <ModalImageViewer
        src={modalImage.src}
        alt={modalImage.alt}
        onClose={() => setModalImage(null)}
      />
      )}
    </>
  );
}
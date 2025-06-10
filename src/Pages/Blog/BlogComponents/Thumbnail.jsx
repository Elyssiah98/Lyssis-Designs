import React from "react";
import './Thumbnail.css';

export default function Thumbnail({ post, navigate, position }) {
  const isTop = position === "top";
  const wrapperClass = isTop ? "blog-thumbnail-wrapper-top" : "blog-thumbnail-wrapper-right";
  const imgClass = isTop ? "blog-thumbnail-top rotated-image" : "blog-thumbnail-right rotated-image";

  return (
    <div
      role="button"
      tabIndex={0}
      className={wrapperClass}
      onClick={() => navigate(`/blog/${post.slug}`)}
      onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/blog/${post.slug}`); }}
    >
      <div className="thumbnail-outer-wrapper">
        <img
          src={post.thumbnail}
          alt={post.title}
          className={imgClass}
          style={{
            "--rotation": post.rotation || "0deg",
            "--zoom": post.zoom || "1"
          }}
        />
      </div>
    </div>
  );
}
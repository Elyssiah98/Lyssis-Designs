import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ArtCard.css";
import ReactMarkdown from "react-markdown";
import remarkEmoji from "remark-emoji";
import parseEmoji from "../../Utils/ParseEmoji";
import rehypeRaw from "rehype-raw";

const typeColors = {

  jewellery: "#ffefef",
  painting: "#ffefef",
  drawing: "#e8fff1",
  sculpture: "#e8f0ff",
  default: "#f4f4f4",
  tafe: "#d2e7d6"
};

function ArtCard({ art, openGallery, onTypeClick }) {
  const colorArray = art.type?.map(t => typeColors[t.toLowerCase()] || typeColors.default) || [typeColors.default];
  const gradient = colorArray.length === 1
    ? colorArray[0]
    : `linear-gradient(135deg, ${colorArray.join(", ")})`;

  return (
    <div className={`art-card ${art.type?.map(t => t.toLowerCase()).join(" ") || "default"}`}>
      <h2 className="art-title">{parseEmoji(art.title)}</h2>
      <p className="date">{new Date(art.date).toLocaleDateString()}</p>

      {art.type && (
        <div className="type-tags">
          {art.type.map((t, i) => (
            <span
              key={i}
              className="type-tag clickable"
              style={{ backgroundColor: typeColors[t.toLowerCase()] || typeColors.default }}
              onClick={() => onTypeClick && onTypeClick(t)}
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {art.medium && <p><strong>Medium:</strong> {art.medium}</p>}
      {art.dimensions && <p><strong>Dimensions:</strong> {art.dimensions}</p>}

      {art.images?.[0] && (
        <img
          src={art.images[0]}
          alt={art.title}
          className="art-thumbnail"
          onClick={() => openGallery(art)}
        />
      )}

      {art.blogLink && (
        <Link
          to={art.blogLink
            .replace(/^#?\/?blog\//, '/blog/')  // normalize path
            .replace(/\.md$/, '')}
          className="read-more-link"
        >
          Read more →
        </Link>
      )}
    </div>
  );
}

export default ArtCard;
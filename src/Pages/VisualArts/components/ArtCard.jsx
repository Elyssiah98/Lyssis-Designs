import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ArtCard.css";

const typeColors = {
  charity: "#ffefef",
  volunteer: "#e8fff1",
  comiccon: "#e8f0ff",
  default: "#f4f4f4",
  tafe: "#d2e7d6"
};

function ArtCard({ art, openGallery }) {
  const bgColor = typeColors[art.type?.toLowerCase()] || typeColors.default;

  return (
    <div className="art-card" style={{ backgroundColor: bgColor }}>
      <h3>{art.title}</h3>
      <p>{new Date(art.date).toLocaleDateString()}</p>

      {art.medium && <p><strong>Medium:</strong> {art.medium}</p>}
      {art.dimensions && <p><strong>Dimensions:</strong> {art.dimensions}</p>}

      {art.images?.[0] && (
        <img
          src={art.images[0]}
          alt={art.title}
          className="art-thumbnail"
          onClick={() => openGallery(art.images, 0)}
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
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalGallery from "/src/Pages/VisualArts/components/ModalGallery.jsx";
import "./ArtCard.css";

const typeColors = {
  charity: "#ffefef",
  volunteer: "#e8fff1",
  comiccon: "#e8f0ff",
  default: "#f4f4f4",
  TAFE: "#80EF80"
};

function ArtCard({ art }) {
  const [showGallery, setShowGallery] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const bgColor = typeColors[art.type?.toLowerCase()] || typeColors.default;

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setShowGallery(true);
  };

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
          onClick={() => handleImageClick(0)}
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

      {showGallery && (
        <ModalGallery
          images={art.images}
          currentIndex={currentIndex}
          onClose={() => setShowGallery(false)}
        />
      )}
    </div>
  );
}

export default ArtCard;
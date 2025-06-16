import React, { useState, useEffect, useRef } from "react";
import "./ModalGallery.css";

function ModalGallery({ data, onClose, initialIndex = 0 }) {
  const { 
    title, 
    date, 
    medium, 
    dimensions, 
    description, 
    blogLink,
    fullImage,
    images = fullImage ?  [fullImage] : [],
  } = data || {};
  
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAutoPlaying, setIsAutoPlaying] = useState(images.length > 1);
  const autoPlayRef = useRef();

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  // Autoplay every 4 seconds unless interrupted
  useEffect(() => {
    if (isAutoPlaying && images.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!data) return null;  // safety fallback

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-gallery" onClick={(e) => e.stopPropagation()}>

        {/* Controls & Close button */}
        <div className="modal-controls">
          {images.length > 1 && (
            <div style={{ display: "flex", gap: "2rem" }}>
              <button
                className="nav-button prev"
                onClick={() => { setCurrentIndex((currentIndex - 1 + images.length) % images.length); setIsAutoPlaying(false); }}
                aria-label="Previous"
              >
                &#10094;
              </button>
              <button
                className="nav-button next"
                onClick={() => { setCurrentIndex((currentIndex + 1) % images.length); setIsAutoPlaying(false); }}
                aria-label="Next"
              >
                &#10095;
              </button>
            </div>
          )}
            <button className="close-button" onClick={onClose} aria-label="Close modal">&times;</button>
        </div>

        {/* Image */}
        {images.length > 0 && (
          <img
            src={images[currentIndex]}
            alt={`${title || "Gallery"} image ${currentIndex + 1}`}
            className="modal-image"
          />
        )}

        {/* Info section below or beside the image */}
        <div className="modal-info">
          {title && <h2>{title}</h2>}
          {date && <p><strong>Date:</strong> {new Date(date).toLocaleDateString()}</p>}
          {medium && <p><strong>Medium:</strong> {medium}</p>}
          {dimensions && <p><strong>Dimensions:</strong> {dimensions}</p>}
          {description && <p>{description}</p>}
          {blogLink && (
            <a href={blogLink} target="_blank" rel="noopener noreferrer" className="read-more">
              Read More →
            </a>
          )}
        </div>

        {/* Dot navigation */}
        {images.length > 1 && (
          <div className="dot-nav">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => { setCurrentIndex(index); setIsAutoPlaying(false); }}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalGallery;
import React, { useState, useEffect, useRef } from "react";
import "./ModalGallery.css";

function ModalGallery({ images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef();

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Autoplay every 4 seconds unless interrupted
  useEffect(() => {
    if (isAutoPlaying) {
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

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-gallery" onClick={(e) => e.stopPropagation()}>
        <div className="modal-controls">
  <div style={{ display: "flex", gap: "2rem" }}>
    <button className="nav-button prev" onClick={goPrev} aria-label="Previous">&#10094;</button>
    <button className="nav-button next" onClick={goNext} aria-label="Next">&#10095;</button>
  </div>
  <button className="close-button" onClick={onClose} aria-label="Close modal">&times;</button>
</div>

<img
  src={images[currentIndex]}
  alt={`Gallery image ${currentIndex + 1}`}
  className="modal-image"
/>

<div className="dot-nav">
  {images.map((_, index) => (
    <span
      key={index}
      className={`dot ${index === currentIndex ? "active" : ""}`}
      onClick={() => goToIndex(index)}
    ></span>
  ))}
</div>

      </div>
    </div>
  );
}

export default ModalGallery;
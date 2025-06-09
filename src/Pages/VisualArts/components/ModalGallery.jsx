import React, { useState, useEffect } from "react";
import "./ModalGallery.css";

function ModalGallery({ images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  // Keyboard handler for arrows and escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        goNext();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup listener on unmount
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, images.length, onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-gallery" onClick={(e) => e.stopPropagation()}>
        <button className="nav-button prev" onClick={goPrev} aria-label="Previous image">
          &#10094;
        </button>

        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="modal-image"
        />

        <button className="nav-button next" onClick={goNext} aria-label="Next image">
          &#10095;
        </button>

        <button onClick={onClose} className="close-button" aria-label="Close modal">
          &times;
        </button>
      </div>
    </div>
  );
}

export default ModalGallery;
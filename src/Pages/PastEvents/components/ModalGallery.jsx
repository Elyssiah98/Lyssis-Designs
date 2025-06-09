import React from "react";
import "./ModalGallery.css";

function ModalGallery({ images, onClose, children }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-gallery" onClick={e => e.stopPropagation()}>
        {images.map((src, i) => (
          <img key={i} src={src} alt={`Gallery ${i}`} />
        ))}
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ModalGallery;
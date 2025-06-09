import React from "react";
import ReactDOM from "react-dom";
import "./ModalImageViewer.css";

const ModalImageViewer = ({ src, alt, onClose }) => {
  const modalContent = (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="modal-close-button"
        >
          &times;
        </button>
        <img
          src={src}
          alt={alt}
          className="modal-image"
        />
        {alt && (
          <p className="modal-caption">{alt}</p>
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default ModalImageViewer;
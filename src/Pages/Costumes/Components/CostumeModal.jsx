import React from "react";
import "../CostumePortfolio.css";
import { Link } from "react-router-dom";

function CostumeModal({ costume, onClose }) {
  if (!costume) return null;

  return (
    <div className="costume-modal" onClick={onClose}>
      <div className="costume-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{costume.title}</h2>
        <img src={costume.fullImage} alt={costume.title} />
        <button onClick={onClose} className="close-btn">×</button>
        <p>{costume.description}</p>
        <Link to={costume.blogLink}
          className="read-more"
          target="_blank"
          rel="noopener noreferrer">
            View build post
        </Link>
      </div>
    </div>
  );
}

export default CostumeModal;
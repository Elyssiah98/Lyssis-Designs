import React from "react";
import { Link } from "react-router-dom";
import "../CostumePortfolio.css";

function CostumeCard({ costume, onClick }) {
  return (
    <div className="costume-card" onClick={() => onClick(costume)}>
      <img src={costume.thumbnail} alt={costume.title} />
      <h3>{costume.title}</h3>
      <p>{costume.description}</p>
      <Link to={costume.blogLink} className="read-more">Read more →</Link>
    </div>
  );
}

export default CostumeCard;
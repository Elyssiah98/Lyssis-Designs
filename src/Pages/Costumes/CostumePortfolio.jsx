import React, { useState } from "react";
import Costumes from "./Data/Costumes.js";
import CostumeCard from "./Components/CostumeCard";
import CostumeModal from "./Components/CostumeModal";
import "./CostumePortfolio.css";

function CostumePortfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h1 className="costume-title">Costume Portfolio</h1>
      <div className="portfolio-page">
        <div className="costume-grid">
          {Costumes.map(costume => (
            <CostumeCard key={costume.id} costume={costume} onClick={setSelected} />
          ))}
        </div>
        <CostumeModal costume={selected} onClose={() => setSelected(null)} />
      </div>
    </div>
  );
}

export default CostumePortfolio;
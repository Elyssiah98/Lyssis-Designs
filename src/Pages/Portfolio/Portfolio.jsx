import React from "react";
import { Link } from "react-router-dom"; // <-- import Link from react-router-dom
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1 className="portfolio-main-title">My Portfolio</h1>
        <p>Explore my work across costume design, aerial arts, and visual projects.</p>
      </header>

      <section className="portfolio-section" id="costumes">
        <h2>
          <Link to="../costumes" className="portfolio-link">Costume Design</Link>
        </h2>
        <p>
          From cosplay to performance costumes, here are some of my favorite creations.
        </p>
      </section>

      <section className="portfolio-section" id="aerial">
        <h2>
          <Link to="../aerials" className="portfolio-link">Aerial Arts</Link>
        </h2>
        <p>
          A collection of aerial performance photos, videos, and related costume designs.
        </p>
      </section>

      <section className="portfolio-section" id="visual-art">
        <h2>
          <Link to="../visualarts" className="portfolio-link">Visual Arts</Link>
        </h2>
        <p>
          Visual art pieces showcasing my explorations in different media and techniques.
        </p>
      </section>
    </div>
  );
}

export default Portfolio;
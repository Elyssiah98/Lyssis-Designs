import React, { useEffect, useState } from "react";
import Header from "./Header";
import ImageCarousel from "./Components/Homepage/ImageCarousel";
import Announcements from "./Components/Homepage/Announcements";
import BlogPreview from "./Components/Homepage/BlogPreview";
import "./HomePage.css";

function HomePage() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero-section").offsetHeight;
      setShowHeader(window.scrollY > heroHeight - 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`homepage-wrapper ${showHeader ? "show-header" : ""}`}>
        <section className="hero-section">
          <img
            src="https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/432197672_122455044499245276_2251109464437260479_n.jpg"
            alt="Hero"
            className="hero-image"
          />
          <div className="hero-overlay">
            <h1 className="hero-title">Lyssi's Designs</h1>
            <p className="hero-subtitle">Costumes • Art • Movement</p>
          </div>
        </section>

        {showHeader && <Header />}

        <section className="carousel-section">
          <h2>Gallery Highlights</h2>
          <ImageCarousel />
        </section>

        <section className="announcements-section">
          <h2>Announcements</h2>
          <Announcements />
        </section>

        <section className="blog-preview-section">
          <h2>From the Journal</h2>
          <BlogPreview />
        </section>
      </div>
    </>
  );
}

export default HomePage;
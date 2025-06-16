import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import ImageCarousel from "./HomeComponents/ImageCarousel";
import Announcements from "./HomeComponents/Announcements";
import BlogPreview from "./HomeComponents/BlogPreview";
import supergirlImg from "../../Assets/Supergirl.jpg";
import "./Home.css";

function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero-section')?.offsetHeight || 0;
      setScrolled(window.scrollY > heroHeight - 60);
    };

    window.addEventListener("scroll", handleScroll);
    const timeout = setTimeout(handleScroll, 500); // ensure correct initial height
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <Header className="header-homePage" scrolled={scrolled} />

      <div className="homepage-wrapper">
        <main>
          <section className="hero-section">
            <img
              src={supergirlImg}
              alt="Hero"
              className="hero-image"
            />
            <div className="hero-overlay">
              <h1 className="hero-title">Lyssi's Designs</h1>
              <p className="hero-subtitle">Costumes • Aerials • Art</p>
            </div>
          </section>

          <section className="carousel-section">
            <h2>Gallery Highlights</h2>
            <ImageCarousel />
          </section>

          <section className="announcements-section">
            <Announcements />
          </section>

          <section className="blog-preview-section">
            <h2>Latest Updates</h2>
            <BlogPreview />
          </section>
        </main>
      </div>
    </>
  );
}

export default Home;
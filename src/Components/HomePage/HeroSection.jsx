import React, { useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current.offsetHeight;
      const header = document.getElementById('main-header');
      if (window.scrollY > heroHeight) {
        header.classList.add('visible');
      } else {
        header.classList.remove('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      <nav className="hero-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <img
        src="https://via.placeholder.com/1920x1080"
        alt="Hero"
        className="hero-image"
      />
    </section>
  );
};

export default HeroSection;
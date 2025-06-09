import React, { useEffect, useRef } from 'react';
import "./About.css";

function About() {
  const sparkleRef = useRef(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sparkleContainer = sparkleRef.current;
    if (!sparkleContainer) return;

    sparkleContainer.innerHTML = ''; // Clear any existing sparkles

    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      
      // Add size variety
      const size = 1 + Math.random() * 2;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;

      sparkle.style.animationDelay = `${Math.random() * 6}s`;
      sparkle.style.animationDuration = `${4 + Math.random() * 4}s`;

      sparkleContainer.appendChild(sparkle);
    }
  }, []);

  return (
    <div>
      <div ref={sparkleRef} className="sparkle-background" />
      <h1 className="page-title">About</h1>
      <section className="about-hero">  
        <div className="about-card">
          <div className="about-image" />
          <div className="about-content">
            
            <h2 className="about-title">Creator of Lyssi's Designs</h2>
            <p className="about-subtitle">
              Cosplay • Aerialist • Artist
            </p>
            <p className="about-text">
              Hi, I'm Elyssiah, an aerialist, cosplayer, and artist based in 
              Australia, and the creator of Lyssi's Designs.
            </p>
            <p className="about-text">
              My love of costumes started early, with my grandma making dress-ups 
              for me. I joined the cosplay community in 2017 and went on to study 
              costume design, finishing my degree in 2020 and further pursued a 
              Diploma of Visual Art in 2025.
            </p>
            <p className="about-text">
              I discovered aerials in 2020 and never looked back. Lyra is my 
              favourite apparatus, but I also enjoy and practice skills in silks, 
              hammock, trapeze, and rope; especially when I get to perform in 
              costumes I've made myself.
            </p>

            {/* Artist Statement Section */}
            <section className="artist-statement-container">
            <div className="artist-statement">
              <h2 className="artist-statement-title">Artist Statement</h2>
                <p className="artist-statement-text">
                  My work is driven by a lifelong love of fantasy, storytelling, 
                  and transformation; becoming something more than yourself. Through 
                  both cosplay and visual art, I explore how character, costume, and 
                  performance explore characters and stories that inspire me. I'm 
                  passionate about continually expanding my skillset; whether 
                  learning new art forms or experimenting with unfamiliar materials 
                  and techniques.
                </p>
                <p className="artist-statement-text">
                  I use my practice to advocate for accessibility and inclusion. 
                  Projects like Cosplay for a Cause allow me to combine my creativity 
                  with purpose; raising awareness while helping others feel seen and 
                  celebrated.
                </p>
                <p className="artist-statement-text">
                  I believe in learning together. I love sharing what I've figured 
                  out along the way and helping others explore their creativity with 
                  confidence. Learning and creating should feel open, encouraging, 
                  and fun.
                </p>
                <p className="artist-statement-text">
                  My portfolio brings together my interests in costume design, aerial 
                  performance, and handcrafted details. My work is about growth, 
                  expression, and finding magic in the process, not just the final 
                  result.
                </p>
              </div>
              <div className="artist-photo" />
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
import React, { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const [showFooter, setShowFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      if (scrollY + windowHeight >= bodyHeight - 1) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    // Check initially in case user loads page at bottom
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; 
  }, [location.pathname]);

  return (

<footer>
    <div className="footer-container">
      <div className="footer-top">

        {/* Social left */}
        <div className="footer-social-left">
          <h4>Follow</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/LyssisDesigns/">
              <img
                src="./SVG/Facebook V2.svg"
                className="social-icon"
                alt="Facebook"
              />
            </a>
            <a href="https://www.instagram.com/lyssis_designs/">
              <img
                src="./SVG/Instagram.svg"
                className="social-icon"
                alt="Instagram"
              />
            </a>
            <a href="https://www.youtube.com/channel/UCqR4YqcMs21erl28TXIK9tQ">
              <img
                src="./SVG/YouTube.svg"
                className="social-icon"
                alt="YouTube"
              />
            </a>
            <a href="https://linktr.ee/Lyssis_Designs">
              <img
                src="./SVG/Linktree.svg"
                className="social-icon"
                alt="Linktree"
              />
            </a>
          </div>
        </div>

        {/* Logo center */}
        <div className="footer-logo-center">
          <Link to="index.html" className="homepage-redirect-footer">
            <img
              src="./SVG/Lyssi's Designs Logo ebd6f2.svg"
              alt="Lyssi's Designs logo" width="50px"
            />
            <span className="website-title">Lyssi's Designs</span>
          </Link>
        </div>

        {/* Footer links */}
        <div className="footer-links">
          <div className="footer-pair">
            <h4>Legal :</h4>
            <ul>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      
      {/* Copyright bottom */}
      <div className={`footer-hidden${showFooter ? " visible" : ""}`} id="footerHidden">
        <p>&copy; Lyssi's Designs 2025</p>
      </div>
  </footer>
  );
}

export default Footer;
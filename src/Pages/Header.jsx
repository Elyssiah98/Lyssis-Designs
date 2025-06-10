import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import HamburgerMenu from "../Components/Header/HamburgerMenu";
import NavLink from "../Components/Header/NavLink";
import DropdownMenu from "../Components/Header/DropdownMenu";
import SearchBar from "../Components/Header/SearchBar";

function Header({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const hoverTimeout = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // For desktop hover open with delay close
  const handleMouseEnter = (menuName) => {
    if (isMobile) return;
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setOpenDropdown(menuName);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    hoverTimeout.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 1000); // 1 Second delay after mouse leaves
  };

  // On mobile, toggle dropdown by click:
  const handleDropdownClick = (menuName) => {
    if (!isMobile) return;
    setOpenDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
    closeMobileMenu();
  };  

  // On touch devices, toggle dropdown by click:
  useEffect(() => {
    const checkIfMobile = () => {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(isTouch);
    };
  
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  

  return (
    <header
      id="main-header"
      className={`${isHome ? (scrolled ? "scrolled" : "on-hero") : "scrolled"}`}
    >
      <HamburgerMenu toggleMobileMenu={toggleMobileMenu} isOpen={mobileMenuOpen} />
      <nav className="nav-bar">
        {/* Make this sticky on mobile only */}
        <div className="nav-header">
          <div className="homepage-redirect-header">
          <Link to="/">
            <img src="./SVG/Lyssi's Designs Logo ebd6f2.svg" alt="Lyssi's Designs logo, to the homepage" width="65px"/>
            <span className="website-title">Lyssi's Designs</span>
          </Link>
          </div>
        </div>

        {/* Make this sticky on desktop only */}
        <div className="nav-main">
          <div className={`nav-links ${mobileMenuOpen ? "show" : ""}`}>
            
          {scrolled && (
            <NavLink
              to="/"
              icon="./SVG/Home.svg"
              className="Homepage"
              onClick={closeMobileMenu}
            />
          )}

            <DropdownMenu
              title="About"
              menuName="about"
              href="/about"
              openDropdown={openDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onToggleClick={handleDropdownClick}
              isMobile={isMobile}
              closeMobileMenu={closeMobileMenu}
            >
              <Link to="/PastEvents" onClick={closeMobileMenu}>Past Events</Link>
            </DropdownMenu>

            <DropdownMenu
              title="Portfolio"
              menuName="portfolio"
              href="/portfolio"
              openDropdown={openDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onToggleClick={handleDropdownClick}
              isMobile={isMobile}
              closeMobileMenu={closeMobileMenu}
            >
              <Link to="/costumes" onClick={closeMobileMenu}>Costumes</Link>
              <Link to="/aerials" onClick={closeMobileMenu}>Aerials</Link>
              <Link to="/visualarts" onClick={closeMobileMenu}>Visual Arts</Link>
            </DropdownMenu>

            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className="nav-link Blog">
              Blog
            </Link>

            <DropdownMenu
              title="Contact"
              menuName="contact"
              href="/contact"
              openDropdown={openDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onToggleClick={handleDropdownClick}
              isMobile={isMobile}
              closeMobileMenu={closeMobileMenu}
            >
              <Link to="/faqs" onClick={closeMobileMenu}>FAQs</Link>
            </DropdownMenu>
          </div>

          <div className="search-container">
            <img
              src="/Lyssis-Designs/SVG/Search.svg"
              alt="Search Icon"
              className="search-icon"
            />
            <SearchBar />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

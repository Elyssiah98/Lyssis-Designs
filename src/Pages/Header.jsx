import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import HamburgerMenu from "../Components/HamburgerMenu";
import NavLink from "../Components/NavLink";
import DropdownMenu from "../Components/DropdownMenu";
import SearchBar from "../Components/SearchBar";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const hoverTimeout = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const closeMobileMenu = () => setMobileMenuOpen(false);

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

  return (
    <header id="main-header">
      <HamburgerMenu toggleMobileMenu={toggleMobileMenu} isOpen={mobileMenuOpen} />
      <nav className="nav-bar">
        {/* Make this sticky on mobile only */}
        <div className="nav-header">
          <div className="homepage-redirect">
            <a href="index.html">
              <img src="./SVG/Lyssi's Designs Logo Placeholder.png" alt="Lyssi's Designs logo, to the homepage" />
              <span className="website-title">Lyssi's Designs</span>
            </a>
          </div>
        </div>

        {/* Make this sticky on desktop only */}
        <div className="nav-main">
          <div className={`nav-links ${mobileMenuOpen ? "show" : ""}`}>
            <NavLink
              href="index.html"
              icon="./SVG/Home.svg"
              label="Homepage"
              onClick={closeMobileMenu}
            />

            <DropdownMenu
              title="About"
              menuName="about"
              href="/about"
              openDropdown={openDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onToggleClick={handleDropdownClick}
              isMobile={isMobile}
            >
              <a href="#" onClick={closeMobileMenu}>Past Events</a>
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
            >
              <a href="#" onClick={closeMobileMenu}>Costumes</a>
              <a href="./aerials" onClick={closeMobileMenu}>Aerials</a>
              <a href="#" onClick={closeMobileMenu}>Visual Art</a>
            </DropdownMenu>

            <a href="/Blog">Blog</a>

            <DropdownMenu
              title="Contact"
              menuName="contact"
              href="/contact"
              openDropdown={openDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onToggleClick={handleDropdownClick}
              isMobile={isMobile}
            >
              <a href="#" onClick={closeMobileMenu}>FAQs</a>
            </DropdownMenu>
          </div>

          <div className="search-container">
            <img
              src="/SVG/Search.svg"
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

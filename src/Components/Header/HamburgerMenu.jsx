import React from "react";

function HamburgerMenu({ toggleMobileMenu, isOpen }) {
  return (
    <a
      href="#"
      className={`hamburger dropdown-toggle ${isOpen ? "open" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        toggleMobileMenu();
      }}
      aria-expanded={isOpen}
      aria-label="Toggle menu"
    >
      ☰
    </a>
  );
}

export default HamburgerMenu;

import React from "react";

function DropdownMenu({
  title,
  menuName,
  openDropdown,
  onMouseEnter,
  onMouseLeave,
  onToggleClick,
  isMobile,
  children,
}) {
  const isOpen = openDropdown === menuName;

  return (
    <div
      className="dropdown"
      onMouseEnter={() => !isMobile && onMouseEnter(menuName)}
      onMouseLeave={() => !isMobile && onMouseLeave()}
    >
      {/* The clickable title and arrow */}
      <div
        className={`dropdown-title-wrapper ${isOpen ? "open" : ""}`}
        onClick={(e) => {
          if (!isMobile) return; // Only toggle on mobile
          e.preventDefault();
          onToggleClick(menuName);
        }}
      >
        <a
          href={`/${menuName}`} // Replace with your actual links
          className="dropdown-title-link"
          aria-expanded={isOpen}
        >
          {title}
        </a>

        {/* Arrow always shown, rotated when open */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 20 20"
          fill="#ebd6f2"
          className={`dropdown-arrow ${isOpen ? "rotated" : ""}`}
        >
          <path d="M5 7l5 5 5-5z" />
        </svg>
      </div>

      {/* Dropdown submenu */}
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default DropdownMenu;

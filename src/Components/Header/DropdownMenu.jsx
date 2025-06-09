import React from "react";
import { Link, useNavigate } from "react-router-dom";

function DropdownMenu({
  title,
  menuName,
  openDropdown,
  onMouseEnter,
  onMouseLeave,
  onToggleClick,
  isMobile,
  closeMobileMenu, // Auto-close
  children,
  href = `/${menuName}`,  // default href for main menu page
}) {
  const isOpen = openDropdown === menuName;
  const navigate = useNavigate();

  const handleWrapperClick = (e) => {
    if (!isMobile) return;

    // If not open yet, open it and prevent navigation
    if (!isOpen) {
      e.preventDefault();
      onToggleClick(menuName);
    // If already open, allow navigation to the main page
  } else {
      // Navigate to main menu page when dropdown is open and tapped again
      navigate(href);
      closeMobileMenu();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggleClick(menuName);
    }
  };

  const handleSubLinkClick = () => {
    if (isMobile) {
      closeMobileMenu(); // ⬅️ auto-close on sub link click
    }
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={() => !isMobile && onMouseEnter(menuName)}
      onMouseLeave={() => !isMobile && onMouseLeave()}
    >
      {/* The clickable title and arrow */}
      {isMobile ? (
      <div
        className={`dropdown-title-wrapper ${isOpen ? "open" : ""}`}
        role="button"
        tabIndex="0"
        onClick={handleWrapperClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`dropdown-${menuName}`}
      >     
        <span className="dropdown-title-link">{title}</span>

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
    ) : (
      <Link
          to={href}
          className={`dropdown-title-wrapper ${isOpen ? "open" : ""}`}
          aria-expanded={isOpen}
          aria-controls={`dropdown-${menuName}`}
        >
          <span className="dropdown-title-link">{title}</span>
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
        </Link>
      )}

      {/* Dropdown submenu */}
      <div
        id={`dropdown-${menuName}`}
        className={`dropdown-content ${isOpen ? "open" : ""}`}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            onClick: (e) => {
              if (child.props.onClick) child.props.onClick(e);
              handleSubLinkClick(); // closes menu
            },
          })
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;
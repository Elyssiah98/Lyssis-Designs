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
  closeMobileMenu,
  children,
  href = `/${menuName}`,
}) {
  const isOpen = openDropdown === menuName;
  const navigate = useNavigate();

  // On mobile: click on title text navigates and closes menu
  const handleTitleClick = (e) => {
    if (isMobile) {
      closeMobileMenu();
      navigate(href);
    }
  };

  // On mobile: click on arrow toggles submenu
  const handleArrowClick = (e) => {
    e.preventDefault();
    onToggleClick(menuName);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggleClick(isOpen ? null : menuName);
    }
  };

  const handleSubLinkClick = () => {
    if (isMobile) {
      closeMobileMenu();
    }
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={() => !isMobile && onMouseEnter(menuName)}
      onMouseLeave={() => !isMobile && onMouseLeave()}
    >
      {isMobile ? (
        <div
          className={`dropdown-title-wrapper ${isOpen ? "open" : ""}`}
          role="group"
          aria-expanded={isOpen}
          aria-controls={`dropdown-${menuName}`}
        >
          {/* Title text clickable: React Router Link */}
          <Link
            to={href}
            className="dropdown-title-link"
            onClick={closeMobileMenu}
          >
            {title}
          </Link>
            
          {/* Arrow clickable: toggles submenu */}
          <button
            className={`dropdown-arrow ${isOpen ? "rotated" : ""}`}
            aria-label={isOpen ? `Close ${title} submenu` : `Open ${title} submenu`}
            onClick={(e) => {
              e.preventDefault();
              onToggleClick(isOpen ? null : menuName);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 20 20"
              fill="#ebd6f2"
            >
              <path d="M5 7l5 5 5-5z" />
            </svg>
          </button>
        </div>
      ) : (
        // Desktop as before
        <Link
          to={href}
          className={`dropdown-title-wrapper ${isOpen ? "open" : ""}`}
          aria-expanded={isOpen}
          aria-controls={`dropdown-${menuName}`}
        >
          <span className="dropdown-title-link">{title}</span>
          <svg
            className="dropdown-arrow"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ebd6f2"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>

        </Link>
      )}

      <div
        id={`dropdown-${menuName}`}
        className={`dropdown-content ${isOpen ? "open" : ""}`}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            onClick: (e) => {
              if (child.props.onClick) child.props.onClick(e);
              handleSubLinkClick();
            },
          })
        )}
      </div>
    </div>
  );
}

export default DropdownMenu;
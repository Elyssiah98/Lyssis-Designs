import React from "react";

function NavLink({ href, icon, label }) {
  return (
    <a href={href} className="icon-link" aria-label={label}>
      <img src={icon} height="40" alt={label} />
    </a>
  );
}

export default NavLink;
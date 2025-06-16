import React from "react";
import { Link } from "react-router-dom";

function NavLink({ to = "/", icon, label }) {
  return (
    <Link to={to} className="icon-link" aria-label={label}>
      {icon && <img src={icon} height="40" alt={label} />}
      {label && <span className="visually-hidden">{label}</span>}
    </Link>
  );
}

export default NavLink;
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Navigation() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>  
        <li>
          
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

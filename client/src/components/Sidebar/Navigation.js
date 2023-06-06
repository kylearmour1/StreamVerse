import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Navigation() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/videolist">VideoList</Link>
        </li>
        <li>
          <Link to="/videoplayer">VideoPlayer</Link>
        </li>
        <li>
          <Link to="/editprofile">EditProfile</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

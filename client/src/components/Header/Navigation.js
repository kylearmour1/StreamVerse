import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/videolist">VideoList</Link>
        </li>
        <li>
          <Link to="/videoplayer">VideoPlayer</Link>
        </li>
        <li>
          <Link to="/videoupload">VideoUpload</Link>
        </li>
        <li>
          <Link to="/logout">LogOut</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

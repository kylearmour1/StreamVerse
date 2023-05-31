import React from "react";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <h1>StreamVerse</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit">Video Search</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

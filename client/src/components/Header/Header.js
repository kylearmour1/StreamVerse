import React, { useState } from "react";
import "./Header.css";

const apiKey = process.env.REACT_APP_API_KEY; 

function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const apiEndpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${apiKey}`;


    console.log(apiEndpoint); 
  };

  return (
    <header>
      <div className="header-container">
        <h1>StreamVerse</h1>
        <div className="search-bar">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button type="submit">Video Search</button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;

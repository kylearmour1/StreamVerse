import React from "react";
import "./Header.css";
import logo from "../../../assets/logo.png"


function Header(props) {

return (
<header>
<div className="title-container">
<img src={logo} alt="Logo" />
</div>
</header>
);
}

export default Header;

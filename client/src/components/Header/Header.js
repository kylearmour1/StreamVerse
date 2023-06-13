import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Auth from "../../utils/auth";

function Header(props) {

return (
<header>
<div className="title-container">
<img src={logo} alt="Logo" />
</div>
{Auth.loggedIn() ? (
    <Link to="/logout">Logout</Link>
) : (
    <Link to="/login">Login</Link>
)}
</header>
);
}

export default Header;

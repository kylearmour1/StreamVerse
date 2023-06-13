import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import Auth from "../../utils/auth";
import { Button } from "@mui/material";

function Header(props) {
const location = useLocation();
const isHomePage = location.pathname === "/";

const logout = (event) => {
event.preventDefault();
Auth.logout();
};

const { handleChanges, handleSubmit } = props;

return (
<header>
<div className="title-container">
<h1>StreamVerse</h1>
</div>
<div className="button-container">
{Auth.loggedIn() ? (
<>
<Link to="/logout" onClick={logout}>
<Button
variant="outlined"
sx={{ backgroundImage:"linear-gradient(black, rgba(96, 10, 10, 0.795))", color: "white", borderColor: "white" }}
>
Logout
</Button>
</Link>
{isHomePage && (
<Link to="/profile">
<Button
variant="outlined"
sx={{ backgroundImage:"linear-gradient(black, rgba(96, 10, 10, 0.795))", color: "white", borderColor: "white" }}
>
Go to StreamVerse
</Button>
</Link>
)}
</>
) : (
<>
<Link to="/login">
<Button
variant="outlined"
color="secondary"
sx={{ backgroundImage:"linear-gradient(black, rgba(96, 10, 10, 0.795))", color: "white", borderColor: "white" }}
>
Login
</Button>
</Link>
<Link to="/signup">
<Button
variant="outlined"
color="secondary"
sx={{ backgroundImage:"linear-gradient(black, rgba(96, 10, 10, 0.795))", color: "white", borderColor: "white" }}
>
Signup
</Button>
</Link>
</>
)}
</div>
</header>
);
}

export default Header;

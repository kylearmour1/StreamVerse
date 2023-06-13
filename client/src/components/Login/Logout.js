import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Logout = () => {
    if(Auth.loggedIn()) {
        Auth.logout();
    } 
    return (
        <div className="logout">
            <h1>You are now logged out.</h1>
            <h2>Thanks for visiting StreamVerse!</h2>
            <h2>Built by: </h2>
            <ul>
                <li>Kyle Armour</li>
                <li>Allyson Gonzales</li>
                <li>Olive Provencio-Johnson</li>
                <li>Josh Ungurait</li>
            </ul>
            <Link className="btn btn-lg btn-info m-2" to="/login">
        Login
      </Link>
      <Link className="btn btn-lg btn-light m-2" to="/signup">
        Signup
      </Link>
        </div>
    );
}; 

export default Logout;
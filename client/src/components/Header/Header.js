import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Auth from '../../utils/auth';

function Header (props){
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const {searchQuery,handleChanges, handleSubmit } = props
  // const [searchQuery, setSearchQuery] = useState("");
  // const handleChanges = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Is this working?:", searchQuery);
  //   setSearchQuery("");
  // };
  
  return (
    <header>
      <div className="header-container">
        <h1>StreamVerse</h1>
        {Auth.loggedIn() ? (
          <div className="form">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleChanges}
          />
          <button type="submit">Video Search</button>
        </form>
        <button className="btn btn-lg btn-light m-2" onClick={logout}>
         Logout
        </button>
        </div>
        ) : (
          <>
          <Link className="btn btn-lg btn-info m-2" to="/login">
            Login
          </Link>
          <Link className="btn btn-lg btn-light m-2" to="/signup">
            Signup
          </Link>
        </>
        )}
      </div>
    </header>
  )
}

export default Header;





// function Header() {
//   return (
//     <header>
//       <div className="header-container">
//         <h1>StreamVerse</h1>
//         <div className="search-bar">
//           <input type="text" placeholder="Search..." />
//           <button type="submit">Video Search</button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

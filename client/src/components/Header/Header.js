import React from "react";
import "./Header.css";


function Header (props){
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
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleChanges}
          />
          <button type="submit">Video Search</button>
        </form>
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

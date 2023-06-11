// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { ApolloProvider } from "@apollo/client";
// import client from "./apolloClient";
// import axios from "axios";
// import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
// import Header from "./components/Header/Header";
// import VideoList from "./components/VideoList/VideoList";
// import EditProfile from "./components/EditProfile/EditProfile";
// import Profile from "./components/Profile/Profile";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Footer from "./components/Footer/Footer";

// import history from "./history"
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import SignUp from "./components/Signup/Signup";

// function HomePage(props) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const handleChanges = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Is this working?:", searchQuery);
//     setSearchQuery("");
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const apiKey = process.env.REACT_APP_API_KEY;
//         const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${apiKey}&type=video`;

//         const response = await axios.get(apiUrl, {
//           params: {
//             key: apiKey,
//           },
//         });

//         const data = response.data;
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     if(searchQuery){
//       fetchData();
//     }
//   }, [searchQuery]);

//   return (
//     <React.Fragment>
//       <Sidebar />
//       <Header
//         searchQuery={searchQuery}
//         handleChanges={handleChanges}
//         handleSubmit={handleSubmit}
//       />
//       <Home {...props} />
//       <Footer />
//     </React.Fragment>
//   );
// }

// function VideoListPage(props) {
//   return (
//     <React.Fragment>
//       <Sidebar />
//       <Header />
//       <VideoList {...props} />
//       <Footer />
//     </React.Fragment>
//   );
// }




// function EditProfilePage(props) {
//   return (
//     <React.Fragment>
//       <Sidebar />
//       <Header />
//       <EditProfile {...props} />
//       <Footer />
//     </React.Fragment>
//   );
// }

// function ProfilePage(props) {
//   return (
//     <React.Fragment>
//       <Sidebar />
//       <Header />
//       <Profile {...props} />
//       <Footer />
//     </React.Fragment>
//   );
// }

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router history={history}>
//       <Switch>
//     <Route path="/home" component={HomePage} />
//     <Route path="/videolist" component={VideoListPage} />
   
//     <Route path="/editprofile" component={EditProfilePage} />
//     <Route path="/profile" component={ProfilePage} />
//     <Route path="/signup" component={SignUp} />
//     <Route path="/login" component={Login} />
  
    
// </Switch>

//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;








// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { ApolloProvider } from "@apollo/client";
// import client from "./apolloClient";
// import Login from "./components/Login/Login";
// import Home from "./components/Home/Home";
// import Header from "./components/Header/Header";
// import VideoList from "./components/VideoList/VideoList";
// import EditProfile from "./components/EditProfile/EditProfile";
// import Profile from "./components/Profile/Profile";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Footer from "./components/Footer/Footer";
// import Signup from "./components/Signup/Signup"
// import history from "./history";

// function App() {
//   const [uploadedVideos, setUploadedVideos] = useState([]);
  
//   return (
//     <ApolloProvider client={client}>
//       <Router history={history}>
//         <Switch>
//           <Route path="/home">
//             <Sidebar />
//             <Header />
//             <Home
//               uploadedVideos={uploadedVideos}
//               setUploadedVideos={setUploadedVideos}
//             />
//             <Footer />
//           </Route>
//           <Route path="/videolist">
//             <Sidebar />
//             <Header />
//             <VideoList />
//             <Footer />
//           </Route>
         
//           <Route path="/editprofile">
//             <Sidebar />
//             <Header />
//             <EditProfile />
//             <Footer />
//           </Route>
         
//           <Route path="/signup">
           
       
//             <Signup />
          
//           </Route>
//           <Route path="/profile">
//             <Sidebar />
//             <Header />
//             <Profile />
//             <Footer />
//           </Route>
//           <Route path="/login">
//             <Login />
//           </Route>
//         </Switch>
//       </Router>
//     </ApolloProvider>
//   );
// }



// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import Signup from "./components/Signup/Signup"
import EditProfile from "./components/EditProfile/EditProfile";

import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";



function App() {
  const [uploadedVideos, setUploadedVideos] = useState([]);
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/home">
            <Sidebar />
            <Header />
            <Home
              uploadedVideos={uploadedVideos}
              setUploadedVideos={setUploadedVideos}
            />
            <Footer />
          </Route>
          <Route path="/videolist">
            <Sidebar />
            <Header />
            <VideoList />
            <Footer />
          </Route>
          
          <Route path="/editprofile">
            <Sidebar />
            <Header />
            <EditProfile />
            <Footer />
          </Route>
          <Route path="/signup">
            
            
            <Signup />
          
          </Route>
       
          <Route path="/profile">
            <Sidebar />
            <Header />
            <Profile />
            <Footer />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
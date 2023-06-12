import React, { useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import EditProfile from "./components/EditProfile/EditProfile";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import history from "./history"
import "@fortawesome/fontawesome-free/css/all.min.css";
// import MapVideoList from "./components/MapVideoList/MapVideoList";
import SignUp from "./components/Signup/Signup";

function HomePage(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChanges = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const handleSubmit = (event) => {
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    event.preventDefault();
    console.log("Is this working?:", searchQuery);
    setSearchQuery("");
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=dog&key=${apiKey}`)
      .then((data)=>{
        console.log(data.json())
      })
  };

//   useEffect(() => {
//     const fetchData = () => {
//       try {
//         const apiKey = process.env.YOUTUBE_API_KEY;
//         const apiUrl = `https://www.googleapis.com/youtube/v3/search/videos?part=snippet&maxResults=25&q=${searchQuery}&key=${apiKey}&type=video`;
//         console.log(apiUrl)
//         const response = axios.get(apiUrl, {
//           params: {
//             key: apiKey,
//             headers: {
//               'Access-Control-Allow-Origin': "*",
//               'Content-Type':'application/json'
//             },
//             withCredentials: true,
//             credntials:'same-origin'
//           },
//         });

//         const data = response.data;
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);
  return (
    <React.Fragment>
      <Sidebar />
      <Header
        searchQuery={searchQuery}
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
      />
      <Home {...props} />
      <Footer />
    </React.Fragment>
  );
}

function VideoListPage(props) {
  return (
    <React.Fragment>
      <Sidebar />
      <Header />
      <VideoList {...props} />
      <Footer />
    </React.Fragment>
  );
}

function VideoPlayerPage(props) {
  return (
    <React.Fragment>
      <Sidebar />
      <Header />
      <Comments />
      <VideoPlayer {...props} />
      <Footer />
    </React.Fragment>
  );
}


function EditProfilePage(props) {
  return (
    <React.Fragment>
      <Sidebar />
      <Header />
      <EditProfile {...props} />
      <Footer />
    </React.Fragment>
  );
}

function ProfilePage(props) {
  return (
    <React.Fragment>
      <Sidebar />
      <Header />
      <Profile {...props} />
      <Footer />
    </React.Fragment>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
      <Switch>
    <Route path="/home" component={HomePage} />
    <Route path="/videolist" component={VideoListPage} />
    <Route path="/videoplayer" component={VideoPlayerPage} />
    <Route path="/editprofile" component={EditProfilePage} />
    <Route path="/profile" component={ProfilePage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
  
    
</Switch>

      </Router>
    </ApolloProvider>
  );
}

export default App;
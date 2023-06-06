import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import axios from "axios";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoUpload from "./components/VideoUpload/VideoUpload";
import Logout from "./components/Logout/Logout";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Comments from "./components/Comments/Comments";
import "@fortawesome/fontawesome-free/css/all.min.css";

function HomePage(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const handleChanges = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Is this working?:", searchQuery);
    setSearchQuery("");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiUrl = `https://www.googleapis.com/youtube/v3/search/videos?part=snippet&maxResults=25&q=${searchQuery}&key=${apiKey}&type=video`;

        const response = await axios.get(apiUrl, {
          params: {
            key: apiKey,
          },
        });

        const data = response.data;
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
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

function VideoUploadPage(props) {
  return (
    <React.Fragment>
      <Sidebar />
      <Header />
      <VideoUpload {...props} />
      <Footer />
    </React.Fragment>
  );
}

function LogoutPage(props) {
  return (
    <React.Fragment>
      <Header />
      <Sidebar />
      <Logout {...props} />
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
      <Router>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/videolist" component={VideoListPage} />
          <Route path="/videoplayer" component={VideoPlayerPage} />
          <Route path="/videoupload" component={VideoUploadPage} />
          <Route path="/logout" component={LogoutPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;

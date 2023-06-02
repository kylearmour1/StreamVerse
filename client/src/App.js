import React, { useEffect } from "react";
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
import "@fortawesome/fontawesome-free/css/all.min.css";

// const apiEndpoint = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=dog&key=AIzaSyA1Jk0GTkv9Z2tMkEPhT4_N9IAzQ_vb8cg";



function HomePage(props) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const apiKey = process.env.REACT_APP_API_KEY;
        const apiEndpoint = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=dog&key=AIzaSyA1Jk0GTkv9Z2tMkEPhT4_N9IAzQ_vb8cg";

        const response = await axios.get(apiEndpoint);

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
      <Header />
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

function ProfilePage() {
  const [loggedInUser] = React.useState({
    name: "name",
    username: "username",
    photo: "photo",
    submittedVideos: "vids",
    friends: ["friend1", "friend2"],
    notifications: ["notifaction1", "notifaction2"],
  });
  return (
    <React.Fragment>
      <Sidebar />
      <Header />
      <Profile loggedInUser={loggedInUser} />
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
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;

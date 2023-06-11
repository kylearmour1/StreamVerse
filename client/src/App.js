import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import EditProfile from "./components/EditProfile/EditProfile";
// import Logout from "./components/Logout/Logout";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Comments from "./components/Comments/Comments";
import history from "./history";

function App() {
  const [uploadedVideos, setUploadedVideos] = useState([]);
  
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
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
          <Route path="/videoplayer">
            <Sidebar />
            <Header />
            <Comments />
            <VideoPlayer />
            <Footer />
          </Route>
          <Route path="/editprofile">
            <Sidebar />
            <Header />
            <EditProfile />
            <Footer />
          </Route>
          {/* <Route path="/logout">
            <Header />
            <Sidebar />
            <Logout />
            <Footer />
          </Route> */}
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
import React, { useState } from "react";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Login from "./components/Login/Login";
import Logout from "./components/Login/Logout";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import EditProfile from "./components/EditProfile/EditProfile";
import Profile from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import history from "./history";

function App() {
  const [uploadedVideos, setUploadedVideos] = useState([]);
  
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
    <Route path="/editprofile" component={EditProfilePage} />
    <Route path="/profile" component={ProfilePage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/logout" component={Logout} />
    <Route path="/login" component={Login} />
  
    
</Switch>

      </Router>
    </ApolloProvider>
  );
}

export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import VideoList from "./components/VideoList/VideoList";
import Signup from "./components/Signup/Signup";
import EditProfile from "./components/EditProfile/EditProfile";
import Profile from "./components/Profile/Profile";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const [uploadedVideos, setUploadedVideos] = useState([]);

  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              uploadedVideos={uploadedVideos}
              setUploadedVideos={setUploadedVideos}
            />
          </Route>

          <Route path="/videolist">
            <VideoList />
          </Route>

          <Route path="/editprofile">
            <EditProfile />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>

      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
    </ThemeProvider>
    </ApolloProvider>
  );


  
}

export default App;

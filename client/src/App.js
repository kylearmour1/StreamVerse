import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import Logout from "./components/Login/Logout";
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
          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Router>

      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
   
    </ThemeProvider>
    </ApolloProvider>
  );

  
  
}

export default App;
import React, { useEffect } from 'react';
import axios from 'axios'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Login from './components/Login/Login';
import Home from './components/Home/Home';


import Header from './components/Header/Header'

function HomePage(props) {
  return (
    <React.Fragment>
      <Header />
      <Home {...props} />
    </React.Fragment>
  );
}


function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const apiUrl =
          "https://www.googleapis.com/youtube/v3/search/videos?part=snippet&maxResults=25&q=react&key=" +
          apiKey +
          "&type=video";
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
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}
export default App;
       
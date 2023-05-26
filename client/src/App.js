import React from 'react';
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

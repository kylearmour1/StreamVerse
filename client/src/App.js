import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import Login from './components/Login/Login';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;

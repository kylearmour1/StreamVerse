import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the JWT from the local storage
  const token = localStorage.getItem('token');

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : "",
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});

export default client;

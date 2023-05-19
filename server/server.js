const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');

const typeDefs = require('./graphql/schema/schema');
const resolvers = require('./graphql/resolvers');

// get JWT secret from environment variables
const SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const user = jwt.verify(token, SECRET);
    req.user = user;
  }
  next();
};

const app = express();

// use middleware in your Express server
app.use(authMiddleware);

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ user: req.user }),
  });

  await server.start();

  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();

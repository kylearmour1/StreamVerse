const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');

const { typeDefs, resolvers } = require('./schemas/index');

const SECRET = process.env.JWT_SECRET; 
const cors = require('cors');

const app = express();
app.use(cors());

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const user = jwt.verify(token, SECRET);
    req.user = user;
  }
  next();
};

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



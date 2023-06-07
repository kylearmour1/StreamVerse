const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cors = require('cors');

const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');

const SECRET = process.env.JWT_SECRET; 

const app = express();

app.use(cors({
  origin: 'https://127.0.0.1:3000' 
}));

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const user = jwt.verify(token, SECRET);
    req.user = user;
  }
  next();
};

app.use(authMiddleware);

app.use('/uploads', express.static('uploads'));

// Configure multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {  
  console.log(req.file);
  // updated this line to return filename in the response
  res.json({ filename: req.file.filename });
});


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
    console.log(`Server is running at https://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();

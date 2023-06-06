const express = require('express');
const { ApolloServer } = require('apollo-server-express');
<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cors = require('cors');

const typeDefs = require('./graphql/schema/schema');
const resolvers = require('./graphql/resolvers');

const SECRET = process.env.JWT_SECRET; 
=======
const path = require('path');
// const jwt = require('jsonwebtoken');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const cors = require('cors');
>>>>>>> 6e22e363c038bebb9e1287e69691c462073bb2f2

const { typeDefs, resolvers } = require('./schemas/index');

const PORT = process.env.PORT || 3001;
const app = express();

<<<<<<< HEAD
app.use(cors({
  origin: 'http://localhost:3000' 
}));
=======
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
>>>>>>> 6e22e363c038bebb9e1287e69691c462073bb2f2

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use('/uploads', express.static('uploads'));

// Configure multer for handling file uploads
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {  
  console.log(req.file);
  // updated this line to return filename in the response
  res.json({ filename: req.file.filename });
});


async function startServer() {
  await server.start();

  server.applyMiddleware({ app });

  db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`GraphQL is running at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
};

startServer();

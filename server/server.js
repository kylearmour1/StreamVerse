const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));



app.listen(port, () => console.log(`Server running on port ${port}`));

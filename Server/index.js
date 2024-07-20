const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const mongoURI = process.env.MONGODB;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database Connected!!');
}).catch((err) => {
  console.log('Database connection error:', err);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

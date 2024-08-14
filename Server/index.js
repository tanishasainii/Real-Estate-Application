const express = require('express')
const cors = require('cors')
require('dotenv').config({ path: "./.env" })
const connectDB = require('./config/connectDb.js')

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

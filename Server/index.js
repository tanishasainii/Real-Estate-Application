const express = require('express')
const cors = require('cors')
const dotenv= require('dotenv').config({ path: "./.env" })
const connectDB = require('./config/connectDb.js')
const userRouter = require('./routes/user.route.js');
const authRouter = require('./routes/auth.route.js');
dotenv.config();

const app = express();
app.use(express.json());


const mongoURI = process.env.MONGODB;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database Connected!!');
}).catch((err) => {
  console.log('Database connection error:', err);
});


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

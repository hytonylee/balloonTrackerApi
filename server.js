const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');

// Load env vars
dotenv.config({ path: './config/config.env'});

// Connect to Database
connectDB();

// Route files
const balloons = require('./routes/balloons');

const app = express();

// Body Parser
app.use(express.json());

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  // app.use(logger);
}

// Mount Router
app.use('/api/v1/balloons', balloons);

const PORT = process.env.PORT || 8000;

const server = app.listen(
  PORT, 
  console.log("Server running in ".white.underline + process.env.NODE_ENV.yellow.bold.underline + " on port ".white.underline + PORT.yellow.bold.underline)
);

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise)=> {
  console.log("Error: ".white.underline + err.message.red.bold.underline);
  // Close server & exit process
  server.close(() => process.exit(1));
});
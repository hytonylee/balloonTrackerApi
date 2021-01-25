const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Route files
const balloons = require('./routes/balloons');

//Load env vars
dotenv.config({ path: './config/config.env'});

const app = express();

// Dev logging middleware
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  // app.use(logger);
}


// Mount Router
app.use('/api/v1/balloons', balloons);

const PORT = process.env.PORT || 8000;

app.listen(
  PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
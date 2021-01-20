const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/config.env'});

const app = express();

app.get('/api/v1/balloons', (req, res)=> {
  res.status(200).json({
    success: true,
    message: 'Show all balloons'
  })
});

app.post('/api/v1/balloons', (req, res)=> {
  res.status(200).json({
    success: true,
    message: 'Create a balloon'
  })
});

app.put('/api/v1/balloons/:id', (req, res)=> {
  res.status(200).json({
    success: true,
    message: `update balloon with id: ${req.params.id}`
  })
});

app.get('/api/v1/balloons/:id', (req, res)=> {
  res.status(200).json({
    success: true,
    message: `Get a balloon with id of ${req.params.id}`
  })
});

app.delete('/api/v1/balloons/:id', (req, res)=> {
  res.status(200).json({
    success: true,
    message: `Delete a balloon with id of ${req.params.id}`
  })
});

const PORT = process.env.PORT || 8000;

app.listen(
  PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
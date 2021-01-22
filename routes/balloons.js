const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
  res.status(200).json({
    success: true,
    message: 'Show all balloons'
  })
});

router.post('/', (req, res)=> {
  res.status(200).json({
    success: true,
    message: 'Create a balloon'
  })
});

router.put('/:id', (req, res)=> {
  res.status(200).json({
    success: true,
    message: `update balloon with id: ${req.params.id}`
  })
});

router.get('/:id', (req, res)=> {
  res.status(200).json({
    success: true,
    message: `Get a balloon with id of ${req.params.id}`
  })
});

router.delete('/:id', (req, res)=> {
  res.status(200).json({
    success: true,
    message: `Delete a balloon with id of ${req.params.id}`
  })
});

module.exports = router;
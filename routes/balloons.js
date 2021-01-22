const express = require('express');
const router = express.Router();
const { getBalloon, getBalloons, createBalloon, updateBalloon, deleteBalloon } = require('..//controllers/ballons');

// Replace the following with router.route() after controllers are created
// router.get('/', (req, res)=> {});
// router.post('/', (req, res)=> {});
// router.put('/:id', (req, res)=> {});
// router.get('/:id', (req, res)=> {});
// router.delete('/:id', (req, res)=> {});

router.route('/')
  .get(getBalloons)
  .post(createBalloon);

router.route('/:id')
  .get(getBalloon)
  .put(updateBalloon)
  .delete(deleteBalloon);

module.exports = router;
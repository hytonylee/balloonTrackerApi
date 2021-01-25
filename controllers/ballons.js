// @desc    get all balloons
// @route   GET /api/v1/balloons
// @access  Public
exports.getBalloons = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'Show all balloons',
    hello: req.hello
  })
}

// @desc    get a balloons
// @route   GET /api/v1/balloons/:id
// @access  Public
exports.getBalloon = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Get a balloon with id of ${req.params.id}`,
  })
}

// @desc    create a balloons
// @route   POST /api/v1/balloons
// @access  Private
exports.createBalloon = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'Create a balloon'
  })
}

// @desc    update a balloon
// @route   PUT /api/v1/balloons/:id
// @access  Private
exports.updateBalloon = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Update a balloon with id of ${req.params.id}`
  })
}

// @desc    delete a balloon
// @route   DELETE /api/v1/balloons/:id
// @access  Private
exports.deleteBalloon = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Remove a balloon with id of ${req.params.id}`
  })
}
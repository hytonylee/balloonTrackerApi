const mongoose = require('mongoose');

const BalloonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please have a name'],
    unique: true,
    trim: true,
    maxlength: [60, 'Name cannot be more than 60 characters']
  },
  color: {
    type: String,
    require: [true, 'Please choose a color'],
  },
  description: {
    type: String,
    require: [true, 'Please add balloon description.'],
    maxlength: [250, 'Description cannot be more than 250 characters']
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  location: {
    // GeoJson Point
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  photo: {
    type: String,
    default: 'no-photo.jpg'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
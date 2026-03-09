const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  description: {
    type: String
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model("Hotel", hotelSchema);
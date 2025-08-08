const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  duration: { type: String, required: true },
  price: { type: Number },
  dates: [{ type: Date }]
});

module.exports = mongoose.model('Tour', tourSchema);

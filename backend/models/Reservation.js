const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  people: { type: Number, required: true },
  customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  tour_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour', required: true }
});

module.exports = mongoose.model('Reservation', reservationSchema);

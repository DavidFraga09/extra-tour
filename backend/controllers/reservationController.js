const Reservation = require('../models/Reservation');

exports.createReservation = async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    const populatedReservation = await reservation.populate('customer_id tour_id');
    res.status(201).json(populatedReservation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find()
      .populate('customer_id')
      .populate('tour_id');
    res.json(reservations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateReservation = async (req, res) => {
  try {
    const updated = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('customer_id')
      .populate('tour_id');
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteReservation = async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.json({ message: "Reservación eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

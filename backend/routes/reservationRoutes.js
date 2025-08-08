const express = require('express');
const router = express.Router();
const {
  createReservation,
  getReservations,
  updateReservation,
  deleteReservation
} = require('../controllers/reservationController');

router.post('/', createReservation);
router.get('/', getReservations);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);

module.exports = router;

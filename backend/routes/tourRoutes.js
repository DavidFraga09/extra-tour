const express = require('express');
const router = express.Router();
const {
  createTour,
  getTours,
  updateTour,
  deleteTour
} = require('../controllers/tourController');

router.post('/', createTour);
router.get('/', getTours);
router.put('/:id', updateTour);
router.delete('/:id', deleteTour);

module.exports = router;

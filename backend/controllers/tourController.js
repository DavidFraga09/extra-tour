const Tour = require('../models/Tour');

// Crear tour
exports.createTour = async (req, res) => {
  try {
    const { name, description, duration, price, dates } = req.body;

    // Validación opcional de duración
    if (!/^\d+ (horas|días)$/.test(duration)) {
      return res.status(400).json({ message: "Duración inválida. Usa formato como '3 días' o '8 horas'" });
    }

    const tour = new Tour({ name, description, duration, price, dates });
    await tour.save();
    res.status(201).json(tour);
  } catch (err) {
    console.error("Error al crear tour:", err);
    res.status(500).json({ error: err.message });
  }
};

// Obtener tours
exports.getTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar tour
exports.updateTour = async (req, res) => {
  try {
    const { duration } = req.body;

    if (duration && !/^\d+ (horas|días)$/.test(duration)) {
      return res.status(400).json({ message: "Duración inválida. Usa formato como '3 días' o '8 horas'" });
    }

    const updated = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar tour
exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.json({ message: "Tour eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

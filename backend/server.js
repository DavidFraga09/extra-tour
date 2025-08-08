const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB conectado");
    console.log("Base de datos en uso:", mongoose.connection.name); 

    // Rutas
    const userRoutes = require('./routes/userRoutes');
    const customerRoutes = require('./routes/customerRoutes');
    const tourRoutes = require('./routes/tourRoutes');
    const reservationRoutes = require('./routes/reservationRoutes');

    app.use('/api/users', userRoutes);
    app.use('/api/customers', customerRoutes);
    app.use('/api/tours', tourRoutes);
    app.use('/api/reservations', reservationRoutes);

    // Ruta de prueba
    app.get('/', (req, res) => {
        res.send("API funcionando correctamente");
    });

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en puerto ${PORT}`);
    });

}).catch(err => console.error("Error al conectar MongoDB:", err));

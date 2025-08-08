const express = require('express');
const router = express.Router();

// Importar los controladores
const userController = require('../controllers/userController');

// Ruta: POST /api/users/register - Registro de usuario
router.post('/register', userController.register);

// Ruta: POST /api/users/login - Inicio de sesión
router.post('/login', userController.login);

// Exportar las rutas para usarlas en server.js
module.exports = router;

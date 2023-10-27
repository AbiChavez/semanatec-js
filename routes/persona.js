const express = require('express');
const router = express.Router();
const personaController = require("../controllers/persona")

router.post('/agregarPersona', personaController.postAgregarPersona);
router.get('/consultarPersonas',personaController.getconsultarPersonas);
//Rutas de mi controllers (ruta y accion)
module.exports = router
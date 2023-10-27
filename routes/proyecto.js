const express = require('express');
const router = express.Router();
const proyectoController = require("../controllers/proyecto")

router.post('/agregarProyecto', proyectoController.postAgregarProyecto);
router.get('/consultarProyectos',proyectoController.getconsultarProyectos);
//Rutas de mi controllers (ruta y accion)
module.exports = router
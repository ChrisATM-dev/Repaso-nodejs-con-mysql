const express = require('express');
const router = express.Router();
const personajeController = require("../controllers/personajeController");

router.get('/', personajeController.getPersonajes);
router.get('/:id', personajeController.getPersonajesById);


module.exports = router;
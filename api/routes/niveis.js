const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

// CREATE
router.post('/niveis', NivelController.criaNivel);

// READ
router.get('/niveis', NivelController.pegaTodosOsNiveis);
router.get('/niveis/:id', NivelController.pegaUmNivel);

// UPDATE
router.patch('/niveis/:id', NivelController.atualizaNivel);

// DELETE
router.delete('/niveis/:id', NivelController.apagaNivel);

module.exports = router;
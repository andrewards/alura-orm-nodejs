const { Router } = require('express');
const TurmaController = require('../controllers/TurmaController');

const router = Router();

// CREATE
router.post('/turmas', TurmaController.criaTurma);

// READ
router.get('/turmas', TurmaController.pegaTodasAsTurmas);
router.get('/turmas/:id', TurmaController.pegaUmaTurma);

// UPDATE
router.patch('/turmas/:id', TurmaController.atualizaTurma);

// DELETE
router.delete('/turmas/:id', TurmaController.apagaTurma);

module.exports = router;
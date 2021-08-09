const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

// CREATE
router.post('/pessoas', PessoaController.criaPessoa);

// READ
router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);

module.exports = router;
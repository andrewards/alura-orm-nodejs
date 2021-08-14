const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

// CREATE
router.post('/pessoas', PessoaController.criaPessoa);
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula);

// READ
router.get('/pessoas', PessoaController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula);

// UPDATE
router.patch('/pessoas/:id', PessoaController.atualizaPessoa);
router.patch('/pessoas/:id/restaura', PessoaController.restauraPessoa);
router.patch('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula);

// DELETE
router.delete('/pessoas/:id', PessoaController.apagaPessoa);
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);

module.exports = router;
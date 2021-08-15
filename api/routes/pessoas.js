const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router()

// CREATE
    .post('/pessoas', PessoaController.criaPessoa)
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)

// READ
    .get('/pessoas', PessoaController.pegaTodasAsPessoasAtivas)
    .get('/pessoas/all', PessoaController.pegaTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
    .get('/pessoas/:estudanteId/matriculas', PessoaController.pegaMatriculas)
    .get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.pegaUmaMatricula)

// UPDATE
    .patch('/pessoas/:id', PessoaController.atualizaPessoa)
    .patch('/pessoas/:id/restaura', PessoaController.restauraPessoa)
    .patch('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)

// DELETE
    .delete('/pessoas/:id', PessoaController.apagaPessoa)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula);

module.exports = router;
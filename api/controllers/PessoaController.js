const database = require('../models');

class PessoaController {

    // CREATE

    static criaPessoa = async (req, res) => {
        try {
            const novaPessoa = req.body;
            const novaPessoaCriada = await database.pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static criaMatricula = async (req, res) => {
        try {
            const { estudanteId } = req.params;
            const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
            const novaMatriculaCriada = await database.matriculas.create(novaMatricula);
            return res.status(200).json(novaMatriculaCriada);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    // READ

    static pegaTodasAsPessoasAtivas = async (req, res) => {
        try {
            const pessoasAtivas = await database.pessoas.findAll();
            return res.status(200).json(pessoasAtivas);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static pegaTodasAsPessoas = async (req, res) => {
        try {
            const todasAsPessoas = await database.pessoas.scope('all').findAll();
            return res.status(200).json(todasAsPessoas);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static pegaUmaPessoa = async (req, res) => {
        try {
            const { id } = req.params;
            const pessoa = await database.pessoas.findOne({
                where: {
                    id: Number(id),
                },
            });
            return res.status(200).json(pessoa);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static pegaUmaMatricula = async (req, res) => {
        try {
            const { estudanteId, matriculaId } = req.params;
            const matricula = await database.matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId),
                },
            });
            return res.status(200).json(matricula);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static pegaMatriculas = async (req, res) => {
        try {
            const { estudanteId } = req.params;
            const pessoa = await database.pessoas.findOne({
                where: {
                    id: Number(estudanteId),
                },
            });
            const matriculas = await pessoa.getAulasMatriculadas();
            return res.status(200).json(matriculas);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static pegaMatriculasPorTurma = async (req, res) => {
        try {
            const { turmaId } = req.params;
            const matriculas = await database.matriculas.findAndCountAll({
                where: {
                    turma_id: Number(turmaId),
                    status: 'confirmado',
                },
                limit: 2,
                order: [['estudante_id', 'ASC']]
            });
            return res.status(200).json(matriculas);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    // UPDATE

    static atualizaPessoa = async (req, res) => {
        try {
            const { id } = req.params;
            const novasInfos = req.body;
            await database.pessoas.update(novasInfos, {
                where: {
                    id: Number(id),
                },
            });
            const pessoaAtualizada = await database.pessoas.findOne({
                where: {
                    id: Number(id),
                },
            });
            return res.status(200).json(pessoaAtualizada);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static atualizaMatricula = async (req, res) => {
        try {
            const { estudanteId, matriculaId } = req.params;
            const novasInfos = req.body;
            await database.matriculas.update(novasInfos, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId),
                },
            });
            const matriculaAtualizada = await database.matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                },
            });
            return res.status(200).json(matriculaAtualizada);
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    // DELETE

    static apagaPessoa = async (req, res) => {
        try {
            const { id } = req.params;
            await database.pessoas.destroy({
                where: {
                    id: Number(id),
                },
            });
            return res.status(204).end();
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }

    static restauraPessoa = async (req, res) => {
        try {
            const { id } = req.params;
            await database.pessoas.restore({
                where: {
                    id: Number(id),
                },
            });
            return res.status(204).end();
        } catch (err) {
            return res.status(500).json(err.message);
        }
    }

    static apagaMatricula = async (req, res) => {
        try {
            const { estudanteId, matriculaId } = req.params;
            await database.matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId),
                },
            });
            return res.status(204).end();
        } catch(err) {
            return res.status(500).json(err.message);
        }
    }
}

module.exports = PessoaController;